import zlib from "node:zlib";

interface ZipEntry {
  name: string;
  data: Uint8Array;
}

function writeUint32LE(view: DataView, offset: number, value: number): void {
  view.setUint32(offset, value >>> 0, true);
}

function writeUint16LE(view: DataView, offset: number, value: number): void {
  view.setUint16(offset, value & 0xffff, true);
}

function dosDateTime(date: Date): { time: number; date: number } {
  const time = ((date.getHours() & 0x1f) << 11) | ((date.getMinutes() & 0x3f) << 5) | ((date.getSeconds() >> 1) & 0x1f);
  const d = (((date.getFullYear() - 1980) & 0x7f) << 9) | (((date.getMonth() + 1) & 0x0f) << 5) | (date.getDate() & 0x1f);
  return { time, date: d };
}

export function buildZip(entries: ZipEntry[]): Uint8Array {
  const encoder = new TextEncoder();
  const now = new Date();
  const { time, date } = dosDateTime(now);

  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const crc = zlib.crc32(entry.data);
    const size = entry.data.byteLength;

    // local file header
    const localHeader = new ArrayBuffer(30);
    const lhView = new DataView(localHeader);
    writeUint32LE(lhView, 0, 0x04034b50);
    writeUint16LE(lhView, 4, 20); // version needed
    writeUint16LE(lhView, 6, 0); // flags
    writeUint16LE(lhView, 8, 0); // method = stored
    writeUint16LE(lhView, 10, time);
    writeUint16LE(lhView, 12, date);
    writeUint32LE(lhView, 14, crc);
    writeUint32LE(lhView, 18, size); // compressed size
    writeUint32LE(lhView, 22, size); // uncompressed size
    writeUint16LE(lhView, 26, nameBytes.byteLength);
    writeUint16LE(lhView, 28, 0); // extra length

    localParts.push(new Uint8Array(localHeader));
    localParts.push(nameBytes);
    localParts.push(entry.data);

    // central directory header
    const central = new ArrayBuffer(46);
    const cdView = new DataView(central);
    writeUint32LE(cdView, 0, 0x02014b50);
    writeUint16LE(cdView, 4, 20); // version made by
    writeUint16LE(cdView, 6, 20); // version needed
    writeUint16LE(cdView, 8, 0); // flags
    writeUint16LE(cdView, 10, 0); // method
    writeUint16LE(cdView, 12, time);
    writeUint16LE(cdView, 14, date);
    writeUint32LE(cdView, 16, crc);
    writeUint32LE(cdView, 20, size);
    writeUint32LE(cdView, 24, size);
    writeUint16LE(cdView, 28, nameBytes.byteLength);
    writeUint16LE(cdView, 30, 0);
    writeUint16LE(cdView, 32, 0);
    writeUint16LE(cdView, 34, 0);
    writeUint16LE(cdView, 36, 0);
    writeUint32LE(cdView, 38, 0); // external attrs
    writeUint32LE(cdView, 42, offset); // local header offset

    centralParts.push(new Uint8Array(central));
    centralParts.push(nameBytes);

    offset += 30 + nameBytes.byteLength + size;
  }

  const centralStart = offset;
  const centralSize = centralParts.reduce((acc, b) => acc + b.byteLength, 0);

  const endRecord = new ArrayBuffer(22);
  const erView = new DataView(endRecord);
  writeUint32LE(erView, 0, 0x06054b50);
  writeUint16LE(erView, 4, 0);
  writeUint16LE(erView, 6, 0);
  writeUint16LE(erView, 8, entries.length);
  writeUint16LE(erView, 10, entries.length);
  writeUint32LE(erView, 12, centralSize);
  writeUint32LE(erView, 16, centralStart);
  writeUint16LE(erView, 20, 0);

  const totalSize = centralStart + centralSize + 22;
  const out = new Uint8Array(totalSize);
  let cursor = 0;
  for (const part of localParts) {
    out.set(part, cursor);
    cursor += part.byteLength;
  }
  for (const part of centralParts) {
    out.set(part, cursor);
    cursor += part.byteLength;
  }
  out.set(new Uint8Array(endRecord), cursor);
  return out;
}

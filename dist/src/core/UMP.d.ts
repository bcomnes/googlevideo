import type { Part } from '../index.js';
import type { ChunkedDataBuffer } from './ChunkedDataBuffer.js';
export declare class UMP {
    private chunkedDataBuffer;
    /**
     * Creates a new UMP parser.
     * @param chunkedDataBuffer - Buffer containing UMP format data.
     */
    constructor(chunkedDataBuffer: ChunkedDataBuffer);
    /**
     * Parses parts from the buffer and calls the handler for each complete part.
     * @param handlePart - Function called with each complete part.
     * @returns Partial part if parsing is incomplete, undefined otherwise.
     */
    parse(handlePart: (part: Part) => void): Part | undefined;
    /**
     * Reads a variable-length integer from the buffer.
     * @param offset - Position to start reading from.
     * @returns Tuple of [value, new offset] or [-1, offset] if incomplete.
     */
    readVarInt(offset: number): [number, number];
    /**
     * Checks if the specified bytes can be read from the current chunk.
     * @param offset - Position to start reading from.
     * @param length - Number of bytes to read.
     * @returns True if bytes can be read from current chunk, false otherwise.
     */
    canReadFromCurrentChunk(offset: number, length: number): boolean;
    /**
     * Gets a DataView of the current chunk, creating it if necessary.
     * @returns DataView for the current chunk.
     */
    getCurrentDataView(): DataView;
}

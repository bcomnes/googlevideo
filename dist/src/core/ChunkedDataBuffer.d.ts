export declare class ChunkedDataBuffer {
    chunks: Uint8Array[];
    currentChunkOffset: number;
    currentChunkIndex: number;
    currentDataView?: DataView;
    totalLength: number;
    constructor(chunks?: Uint8Array[]);
    getLength(): number;
    append(chunk: Uint8Array): void;
    split(position: number): {
        extractedBuffer: ChunkedDataBuffer;
        remainingBuffer: ChunkedDataBuffer;
    };
    isFocused(position: number): boolean;
    focus(position: number): void;
    canReadBytes(position: number, length: number): boolean;
    getUint8(position: number): number;
    private canMergeWithLastChunk;
    private resetFocus;
}

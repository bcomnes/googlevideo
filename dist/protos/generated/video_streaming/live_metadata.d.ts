import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "video_streaming";
export interface LiveMetadata {
    broadcastId?: string | undefined;
    headSequenceNumber?: number | undefined;
    headTimeMs?: number | undefined;
    wallTimeMs?: number | undefined;
    videoId?: string | undefined;
    postLiveDvr?: boolean | undefined;
    headm?: number | undefined;
    minSeekableTimeTicks?: number | undefined;
    minSeekableTimescale?: number | undefined;
    maxSeekableTimeTicks?: number | undefined;
    maxSeekableTimescale?: number | undefined;
}
export declare const LiveMetadata: MessageFns<LiveMetadata>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

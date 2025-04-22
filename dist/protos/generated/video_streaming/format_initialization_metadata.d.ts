import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FormatId, IndexRange, InitRange } from "../misc/common.js";
export declare const protobufPackage = "video_streaming";
export interface FormatInitializationMetadata {
    videoId?: string | undefined;
    formatId?: FormatId | undefined;
    endTimeMs?: number | undefined;
    endSegmentNumber?: number | undefined;
    mimeType?: string | undefined;
    initRange?: InitRange | undefined;
    indexRange?: IndexRange | undefined;
    field8?: number | undefined;
    durationMs?: number | undefined;
    field10?: number | undefined;
}
export declare const FormatInitializationMetadata: MessageFns<FormatInitializationMetadata>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

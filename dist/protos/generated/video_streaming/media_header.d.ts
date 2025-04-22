import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FormatId } from "../misc/common.js";
import { TimeRange } from "./time_range.js";
export declare const protobufPackage = "video_streaming";
export interface MediaHeader {
    headerId?: number | undefined;
    videoId?: string | undefined;
    itag?: number | undefined;
    lmt?: number | undefined;
    xtags?: string | undefined;
    startRange?: number | undefined;
    compressionAlgorithm?: MediaHeader_CompressionAlgorithm | undefined;
    isInitSeg?: boolean | undefined;
    sequenceNumber?: number | undefined;
    field10?: number | undefined;
    startMs?: number | undefined;
    durationMs?: number | undefined;
    formatId?: FormatId | undefined;
    contentLength?: number | undefined;
    timeRange?: TimeRange | undefined;
}
export declare enum MediaHeader_CompressionAlgorithm {
    UNKNOWN = 0,
    NONE = 1,
    GZIP = 2,
    UNRECOGNIZED = -1
}
export declare const MediaHeader: MessageFns<MediaHeader>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

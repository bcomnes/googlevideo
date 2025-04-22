import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "video_streaming";
export interface TimeRange {
    start?: number | undefined;
    duration?: number | undefined;
    timescale?: number | undefined;
}
export declare const TimeRange: MessageFns<TimeRange>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FormatId } from "../misc/common.js";
export declare const protobufPackage = "video_streaming";
export interface PlaybackCookie {
    /** Always 999999?? */
    field1?: number | undefined;
    field2?: number | undefined;
    videoFmt?: FormatId | undefined;
    audioFmt?: FormatId | undefined;
}
export declare const PlaybackCookie: MessageFns<PlaybackCookie>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

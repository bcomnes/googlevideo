import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { HttpHeader } from "../misc/common.js";
export declare const protobufPackage = "video_streaming";
export interface OnesiePlayerRequest {
    url?: string | undefined;
    headers: HttpHeader[];
    body?: string | undefined;
    proxiedByTrustedBandaid?: boolean | undefined;
    skipResponseEncryption?: boolean | undefined;
}
export declare const OnesiePlayerRequest: MessageFns<OnesiePlayerRequest>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

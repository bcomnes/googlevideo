import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { HttpHeader } from "../misc/common.js";
import { OnesieProxyStatus } from "./onesie_proxy_status.js";
export declare const protobufPackage = "video_streaming";
export interface OnesiePlayerResponse {
    onesieProxyStatus?: OnesieProxyStatus | undefined;
    httpStatus?: number | undefined;
    headers: HttpHeader[];
    body?: Uint8Array | undefined;
}
export declare const OnesiePlayerResponse: MessageFns<OnesiePlayerResponse>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

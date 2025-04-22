import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CryptoParams } from "./crypto_params.js";
import { OnesieHeaderType } from "./onesie_header_type.js";
export declare const protobufPackage = "video_streaming";
export interface OnesieHeader {
    type?: OnesieHeaderType | undefined;
    videoId?: string | undefined;
    itag?: string | undefined;
    cryptoParams?: CryptoParams | undefined;
    lastModified?: number | undefined;
    expectedMediaSizeBytes?: number | undefined;
    restrictedFormats: string[];
    xtags?: string | undefined;
    sequenceNumber?: number | undefined;
    field23?: OnesieHeader_Field23 | undefined;
    field34?: OnesieHeader_Field34 | undefined;
}
export interface OnesieHeader_Field23 {
    videoId?: string | undefined;
}
export interface OnesieHeader_Field34 {
    itagDenylist: string[];
}
export declare const OnesieHeader: MessageFns<OnesieHeader>;
export declare const OnesieHeader_Field23: MessageFns<OnesieHeader_Field23>;
export declare const OnesieHeader_Field34: MessageFns<OnesieHeader_Field34>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

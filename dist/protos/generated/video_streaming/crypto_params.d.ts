import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "video_streaming";
export interface CryptoParams {
    hmac?: Uint8Array | undefined;
    iv?: Uint8Array | undefined;
    compressionType?: CryptoParams_CompressionType | undefined;
}
export declare enum CryptoParams_CompressionType {
    NONE = 0,
    GZIP = 1,
    BROTLI = 2,
    UNRECOGNIZED = -1
}
export declare const CryptoParams: MessageFns<CryptoParams>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

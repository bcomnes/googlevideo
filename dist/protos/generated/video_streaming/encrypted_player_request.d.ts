import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "video_streaming";
export interface EncryptedPlayerRequest {
    context?: Uint8Array | undefined;
    encryptedOnesiePlayerRequest?: Uint8Array | undefined;
    encryptedClientKey?: Uint8Array | undefined;
    iv?: Uint8Array | undefined;
    hmac?: Uint8Array | undefined;
    reverseProxyConfig?: string | undefined;
    serializeResponseAsJson?: boolean | undefined;
    enableAdPlacementsPreroll?: boolean | undefined;
    enableCompression?: boolean | undefined;
    ustreamerFlags?: EncryptedPlayerRequest_UstreamerFlags | undefined;
    unencryptedOnesiePlayerRequest?: Uint8Array | undefined;
    useJsonformatterToParsePlayerResponse?: boolean | undefined;
}
export interface EncryptedPlayerRequest_UstreamerFlags {
    sendVideoPlaybackConfig?: boolean | undefined;
}
export declare const EncryptedPlayerRequest: MessageFns<EncryptedPlayerRequest>;
export declare const EncryptedPlayerRequest_UstreamerFlags: MessageFns<EncryptedPlayerRequest_UstreamerFlags>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

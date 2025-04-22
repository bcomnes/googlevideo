import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { OnesieRequestTarget } from "../misc/common.js";
import { BufferedRange } from "./buffered_range.js";
import { ClientAbrState } from "./client_abr_state.js";
import { EncryptedPlayerRequest } from "./encrypted_player_request.js";
import { StreamerContext } from "./streamer_context.js";
export declare const protobufPackage = "video_streaming";
export interface OnesieRequest {
    urls: string[];
    clientAbrState?: ClientAbrState | undefined;
    playerRequest?: EncryptedPlayerRequest | undefined;
    onesieUstreamerConfig?: Uint8Array | undefined;
    maxVp9Height?: number | undefined;
    clientDisplayHeight?: number | undefined;
    streamerContext?: StreamerContext | undefined;
    /** MLOnesieRequestTarget */
    requestTarget?: OnesieRequestTarget | undefined;
    bufferedRanges: BufferedRange[];
}
export declare const OnesieRequest: MessageFns<OnesieRequest>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FormatId } from "../misc/common.js";
import { BufferedRange } from "./buffered_range.js";
import { ClientAbrState } from "./client_abr_state.js";
import { StreamerContext } from "./streamer_context.js";
export declare const protobufPackage = "video_streaming";
export interface VideoPlaybackAbrRequest {
    clientAbrState?: ClientAbrState | undefined;
    selectedFormatIds: FormatId[];
    bufferedRanges: BufferedRange[];
    playerTimeMs?: number | undefined;
    videoPlaybackUstreamerConfig?: Uint8Array | undefined;
    lo?: Lo | undefined;
    selectedAudioFormatIds: FormatId[];
    selectedVideoFormatIds: FormatId[];
    streamerContext?: StreamerContext | undefined;
    field21?: OQa | undefined;
    field22?: number | undefined;
    field23?: number | undefined;
    field1000: Pqa[];
}
export interface Lo {
    formatId?: FormatId | undefined;
    Lj?: number | undefined;
    sequenceNumber?: number | undefined;
    field4?: Lo_Field4 | undefined;
    MZ?: number | undefined;
}
export interface Lo_Field4 {
    field1?: number | undefined;
    field2?: number | undefined;
    field3?: number | undefined;
}
export interface OQa {
    field1: string[];
    field2?: Uint8Array | undefined;
    field3?: string | undefined;
    field4?: number | undefined;
    field5?: number | undefined;
    field6?: string | undefined;
}
export interface Pqa {
    formats: FormatId[];
    ud: BufferedRange[];
    clipId?: string | undefined;
}
export declare const VideoPlaybackAbrRequest: MessageFns<VideoPlaybackAbrRequest>;
export declare const Lo: MessageFns<Lo>;
export declare const Lo_Field4: MessageFns<Lo_Field4>;
export declare const OQa: MessageFns<OQa>;
export declare const Pqa: MessageFns<Pqa>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

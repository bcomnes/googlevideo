import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FormatId } from "../misc/common.js";
import { TimeRange } from "./time_range.js";
export declare const protobufPackage = "video_streaming";
export interface BufferedRange {
    formatId: FormatId | undefined;
    startTimeMs: number;
    durationMs: number;
    startSegmentIndex: number;
    endSegmentIndex: number;
    timeRange?: TimeRange | undefined;
    field9?: Kob | undefined;
    field11?: YPa | undefined;
    field12?: YPa | undefined;
}
export interface Kob {
    EW: Kob_Pa[];
}
export interface Kob_Pa {
    videoId?: string | undefined;
    lmt?: number | undefined;
}
export interface YPa {
    field1?: number | undefined;
    field2?: number | undefined;
    field3?: number | undefined;
}
export declare const BufferedRange: MessageFns<BufferedRange>;
export declare const Kob: MessageFns<Kob>;
export declare const Kob_Pa: MessageFns<Kob_Pa>;
export declare const YPa: MessageFns<YPa>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
}

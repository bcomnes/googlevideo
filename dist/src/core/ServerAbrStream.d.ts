import { EventEmitterLike } from '../utils/index.js';
import type { InitOptions, ServerAbrResponse, ServerAbrStreamOptions } from '../utils/types.js';
export declare class ServerAbrStream extends EventEmitterLike {
    private fetchFunction;
    private serverAbrStreamingUrl;
    private videoPlaybackUstreamerConfig;
    private poToken?;
    private playbackCookie?;
    private totalDurationMs;
    private initializedFormats;
    private formatsByKey;
    private headerIdToFormatKeyMap;
    private previousSequences;
    constructor(args: ServerAbrStreamOptions);
    on(event: 'end', listener: (streamData: ServerAbrResponse) => void): void;
    on(event: 'data', listener: (streamData: ServerAbrResponse) => void): void;
    on(event: 'error', listener: (error: Error) => void): void;
    once(event: 'end', listener: (streamData: ServerAbrResponse) => void): void;
    once(event: 'data', listener: (streamData: ServerAbrResponse) => void): void;
    once(event: 'error', listener: (error: Error) => void): void;
    /**
     * Initializes the server ABR stream with the provided options.
     * @param args - The initialization options.
     */
    init(args: InitOptions): Promise<void>;
    private fetchMedia;
    /**
     * Parses the UMP response data and updates the initialized formats.
     * @param response - The UMP response data as a byte array.
     */
    parseUMPResponse(response: Uint8Array): Promise<ServerAbrResponse>;
    private processMediaHeader;
    private processMediaData;
    private processEndOfMedia;
    private processNextRequestPolicy;
    private processFormatInitialization;
    private processSabrRedirect;
    private registerFormat;
}

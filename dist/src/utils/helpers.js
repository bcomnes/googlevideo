var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomEvent_detail;
export var QUALITY;
(function (QUALITY) {
    QUALITY[QUALITY["AUTO"] = 0] = "AUTO";
    QUALITY[QUALITY["TINY"] = 144] = "TINY";
    QUALITY[QUALITY["SMALL"] = 240] = "SMALL";
    QUALITY[QUALITY["MEDIUM"] = 360] = "MEDIUM";
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    QUALITY[QUALITY["LIGHT"] = 144] = "LIGHT";
    QUALITY[QUALITY["LARGE"] = 480] = "LARGE";
    QUALITY[QUALITY["HD720"] = 720] = "HD720";
    QUALITY[QUALITY["HD1080"] = 1080] = "HD1080";
    QUALITY[QUALITY["HD1440"] = 1440] = "HD1440";
    QUALITY[QUALITY["HD2160"] = 2160] = "HD2160";
    QUALITY[QUALITY["HD2880"] = 2880] = "HD2880";
    QUALITY[QUALITY["HIGHRES"] = 4320] = "HIGHRES";
})(QUALITY || (QUALITY = {}));
export var PART;
(function (PART) {
    PART[PART["ONESIE_HEADER"] = 10] = "ONESIE_HEADER";
    PART[PART["ONESIE_DATA"] = 11] = "ONESIE_DATA";
    PART[PART["MEDIA_HEADER"] = 20] = "MEDIA_HEADER";
    PART[PART["MEDIA"] = 21] = "MEDIA";
    PART[PART["MEDIA_END"] = 22] = "MEDIA_END";
    PART[PART["LIVE_METADATA"] = 31] = "LIVE_METADATA";
    PART[PART["HOSTNAME_CHANGE_HINT"] = 32] = "HOSTNAME_CHANGE_HINT";
    PART[PART["LIVE_METADATA_PROMISE"] = 33] = "LIVE_METADATA_PROMISE";
    PART[PART["LIVE_METADATA_PROMISE_CANCELLATION"] = 34] = "LIVE_METADATA_PROMISE_CANCELLATION";
    PART[PART["NEXT_REQUEST_POLICY"] = 35] = "NEXT_REQUEST_POLICY";
    PART[PART["USTREAMER_VIDEO_AND_FORMAT_DATA"] = 36] = "USTREAMER_VIDEO_AND_FORMAT_DATA";
    PART[PART["FORMAT_SELECTION_CONFIG"] = 37] = "FORMAT_SELECTION_CONFIG";
    PART[PART["USTREAMER_SELECTED_MEDIA_STREAM"] = 38] = "USTREAMER_SELECTED_MEDIA_STREAM";
    PART[PART["FORMAT_INITIALIZATION_METADATA"] = 42] = "FORMAT_INITIALIZATION_METADATA";
    PART[PART["SABR_REDIRECT"] = 43] = "SABR_REDIRECT";
    PART[PART["SABR_ERROR"] = 44] = "SABR_ERROR";
    PART[PART["SABR_SEEK"] = 45] = "SABR_SEEK";
    PART[PART["RELOAD_PLAYER_RESPONSE"] = 46] = "RELOAD_PLAYER_RESPONSE";
    PART[PART["PLAYBACK_START_POLICY"] = 47] = "PLAYBACK_START_POLICY";
    PART[PART["ALLOWED_CACHED_FORMATS"] = 48] = "ALLOWED_CACHED_FORMATS";
    PART[PART["START_BW_SAMPLING_HINT"] = 49] = "START_BW_SAMPLING_HINT";
    PART[PART["PAUSE_BW_SAMPLING_HINT"] = 50] = "PAUSE_BW_SAMPLING_HINT";
    PART[PART["SELECTABLE_FORMATS"] = 51] = "SELECTABLE_FORMATS";
    PART[PART["REQUEST_IDENTIFIER"] = 52] = "REQUEST_IDENTIFIER";
    PART[PART["REQUEST_CANCELLATION_POLICY"] = 53] = "REQUEST_CANCELLATION_POLICY";
    PART[PART["ONESIE_PREFETCH_REJECTION"] = 54] = "ONESIE_PREFETCH_REJECTION";
    PART[PART["TIMELINE_CONTEXT"] = 55] = "TIMELINE_CONTEXT";
    PART[PART["REQUEST_PIPELINING"] = 56] = "REQUEST_PIPELINING";
    PART[PART["SABR_CONTEXT_UPDATE"] = 57] = "SABR_CONTEXT_UPDATE";
    PART[PART["STREAM_PROTECTION_STATUS"] = 58] = "STREAM_PROTECTION_STATUS";
    PART[PART["SABR_CONTEXT_SENDING_POLICY"] = 59] = "SABR_CONTEXT_SENDING_POLICY";
    PART[PART["LAWNMOWER_POLICY"] = 60] = "LAWNMOWER_POLICY";
    PART[PART["SABR_ACK"] = 61] = "SABR_ACK";
    PART[PART["END_OF_TRACK"] = 62] = "END_OF_TRACK";
    PART[PART["CACHE_LOAD_POLICY"] = 63] = "CACHE_LOAD_POLICY";
    PART[PART["LAWNMOWER_MESSAGING_POLICY"] = 64] = "LAWNMOWER_MESSAGING_POLICY";
    PART[PART["PREWARM_CONNECTION"] = 65] = "PREWARM_CONNECTION";
})(PART || (PART = {}));
export function u8ToBase64(u8) {
    return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
export function base64ToU8(base64) {
    const standard_base64 = base64.replace(/-/g, '+').replace(/_/g, '/');
    const padded_base64 = standard_base64.padEnd(standard_base64.length + (4 - standard_base64.length % 4) % 4, '=');
    return new Uint8Array(atob(padded_base64).split('').map((char) => char.charCodeAt(0)));
}
export function getFormatKey(formatId) {
    return `${formatId.itag};${formatId.lastModified};`;
}
export function concatenateChunks(chunks) {
    const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
    }
    return result;
}
// See https://github.com/nodejs/node/issues/40678#issuecomment-1126944677
export class CustomEvent extends Event {
    constructor(type, options) {
        super(type, options);
        _CustomEvent_detail.set(this, void 0);
        __classPrivateFieldSet(this, _CustomEvent_detail, options?.detail ?? null, "f");
    }
    get detail() {
        return __classPrivateFieldGet(this, _CustomEvent_detail, "f");
    }
}
_CustomEvent_detail = new WeakMap();

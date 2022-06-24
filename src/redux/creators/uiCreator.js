import { UPDATE_DARKMODE } from "../types/uiTypes";

export function updateDarkmode(value) {
    return { type: UPDATE_DARKMODE, payload : value}
}

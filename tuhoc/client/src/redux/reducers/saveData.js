import { INIT_STATE_DATA } from "../../constant";
import { getType, saveData } from "../actions";

export default function saveDataReducers(state = INIT_STATE_DATA.data, action) {
    switch (action.type) {
        case getType(saveData.saveData):
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

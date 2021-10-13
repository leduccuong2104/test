import { INIT_STATE_CLIENT } from "../../constant";
import { getType, actionClient } from "../actions";

export default function signUpReducers(state = INIT_STATE_CLIENT.data, action) {
    switch (action.type) {
        case getType(actionClient.createClient):
            return {
                ...state,
                data: action.payload,
            }
        case getType(actionClient.getDataClient):
            return {
                ...state,
            }
        case getType(actionClient.setDataClient):
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

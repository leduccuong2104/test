import { INIT_STATE_USER } from "../../constant";
import { getType, signIn } from "../actions";

export default function signInReducers(state = INIT_STATE_USER, action) {
    switch (action.type) {
        case getType(signIn.signIn):
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

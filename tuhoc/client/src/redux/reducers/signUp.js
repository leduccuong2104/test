import { INIT_STATE_USER } from "../../constant";
import { getType, signUp } from "../actions";

export default function signUpReducers(state = INIT_STATE_USER, action) {
    switch (action.type) {
        case getType(signUp.signUp):
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

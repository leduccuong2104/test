import { INIT_STATE } from "../../constant";
import { getType, add } from "../actions";

export default function addReducers(state = INIT_STATE.add, action) {
    switch (action.type) {
        case getType(add.openAdd):
            return {
                open: true,
            }
        case getType(add.closeAdd):
            return {
                open: false,
            }
        default:
            return state
    }
}

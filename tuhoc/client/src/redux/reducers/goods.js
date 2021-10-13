import { INIT_STATE_GOODS } from "../../constant";
import { getType, actionGoods } from "../actions";

export default function signUpReducers(state = INIT_STATE_GOODS.goods, action) {
    switch (action.type) {
        case getType(actionGoods.createGoods):
            return {
                ...state,
                data: action.payload,
            }
        case getType(actionGoods.getDataGoods):
            return {
                ...state,
            }
        case getType(actionGoods.setDataGoods):
            return {
                ...state,
                data: action.payload,
            }
        case getType(actionGoods.editDataGoods):
            return {
                ...state,
            }
        default:
            return state
    }
}

import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
})

export const signIn = createActions({
    signIn: (payload) => payload,
})

export const signUp = createActions({
    signUp: (payload) => payload,
})

export const actionGoods = createActions({
    createGoods: (payload) => payload,
    getDataGoods: (payload) => payload,
    setDataGoods: (payload) => payload,
    editDataGoods: (payload) => payload,
})

export const actionClients = createActions({
    createClients: (payload) => payload,
    getDataClients: (payload) => payload,
    setDataClients: (payload) => payload,
})

export const add = createActions({
    openAdd: undefined,
    closeAdd: undefined,
})

export const saveData = createActions({
    saveData: (payload) => payload,
})
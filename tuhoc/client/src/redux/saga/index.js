import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* signInSaga(action) {
    try {
        const posts = yield call(api.signIn, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function* signUpSaga(action) {
    try {
        const posts = yield call(api.signUp, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function* createGoods(action) {
    try {
        const posts = yield call(api.createGoods, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function* editDataGoods(action) {
    try {
        const data = yield call(api.editDataGoods, action.payload);
        yield put(actions.actionGoods.setDataGoods(data.data[0]));
    } catch (error) {
        console.log(error);
    }
}

function* getDataGoods() {
    try {
        const data = yield call(api.getDataGoods);
        yield put(actions.actionGoods.setDataGoods(data.data));
    } catch (error) {
        console.log(error);
    }
}

function* createClients(action) {
    try {
        const posts = yield call(api.createClients, action.payload);
    } catch (error) {
        console.log(error);
    }
}

function* getDataClients() {
    try {
        const data = yield call(api.getDataClients);
        yield put(actions.actionClients.setDataClients(data.data));
    } catch (error) {
        console.log(error);
    }
}

function* mySaga() {
    yield takeLatest(actions.signIn.signIn, signInSaga);
    yield takeLatest(actions.signUp.signUp, signUpSaga);
    yield takeLatest(actions.actionGoods.createGoods, createGoods);
    yield takeLatest(actions.actionGoods.getDataGoods, getDataGoods);
    yield takeLatest(actions.actionGoods.editDataGoods, editDataGoods);
    yield takeLatest(actions.actionClients.createClients, createClients);
    yield takeLatest(actions.actionClients.getDataClients, getDataClients);
}

export default mySaga;
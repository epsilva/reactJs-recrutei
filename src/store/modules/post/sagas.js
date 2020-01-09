import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    requestSucces,
    insertSucces,
    updateSucces,
    deleteSucces,
    postFailure,
} from './actions';
import api from '~/services/api';

export function* request() {
    try {
        const response = yield call(api.get, 'posts');

        const count = yield call(api.get, 'count');
        yield put(requestSucces(response.data, count.data));
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(postFailure(err));
    }
}

export function* insert({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.post, 'posts', data);

        const count = yield call(api.get, 'count');
        yield put(insertSucces(response.data, count.data));

        toast.success('Post inserido com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(postFailure(err));
    }
}

export function* update({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.put, 'posts', data);

        const count = yield call(api.get, 'count');
        yield put(updateSucces(response.data, count.data));

        toast.success('Post atualizado com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(postFailure());
    }
}

export function* remover({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.delete, `posts/${data.id}`);
        const count = yield call(api.get, 'count');

        yield put(deleteSucces(response.data, count.data));

        toast.success('Post removido com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(postFailure());
    }
}

export default all([
    takeLatest('@post/REQUEST', request),
    takeLatest('@post/INSERT_REQUEST', insert),
    takeLatest('@post/UPDATE_REQUEST', update),
    takeLatest('@post/DELETE_REQUEST', remover),
]);

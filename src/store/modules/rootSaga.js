import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import post from './post/sagas';

export default function* rootSaga() {
    return yield all([auth, user, post]);
}

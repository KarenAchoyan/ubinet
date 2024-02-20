import {all} from "redux-saga/effects";

import {contactSaga} from "store/about/saga";

function* rootSaga() {
    yield all([
        contactSaga(),
    ]);
}

export default rootSaga;

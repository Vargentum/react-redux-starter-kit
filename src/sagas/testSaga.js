import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSomething(action) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      const user = {foo: 'bar'}
      yield put({type: "COUNTER_INCREMENT_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "COUNTER_INCREMENT_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield* takeEvery("COUNTER_INCREMENT", fetchSomething);
}


export default mySaga;
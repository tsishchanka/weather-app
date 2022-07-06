import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import persistReducer from '../redux/reducers';

import rootSaga from '../redux/sagas';


const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();

export default store;

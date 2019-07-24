import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import saga from './sagas';
import reducers from './reducers';

const persistConfig = {
  whitelist: [ 'newsArr' ],
  // whitelist: [],
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
// const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default function configureStore() {
  // console.log('object', store.getState());
  sagaMiddleware.run(saga);
  return { store, persistor };
}

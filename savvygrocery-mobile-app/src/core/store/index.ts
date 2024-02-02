import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootReducer} from './RootReducer';
import {RootSaga} from './RootSaga';
import {StateKey} from '../constants/StateKey.constant';
import {AppState} from '../types';
import {setStore} from '../../utils/Store.utils';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default function configureStore() {
  /* istanbul ignore next */
  // Middleware: Redux Persist Config
  const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [StateKey.cookie],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
    transforms: [],
  };

  const composeEnhancers =
    (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  // Middleware: Redux Persist Persisted Reducer
  const persistedReducer = persistReducer(persistConfig, RootReducer);
  // Redux: Store
  const store: Store<AppState> = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  // Middleware: Redux Persist Persister
  const persistor = persistStore(store);
  // Run sagas
  sagaMiddleware.run(RootSaga);
  // set store in core module
  setStore(store);

  // Exports
  return {store, persistor};
}

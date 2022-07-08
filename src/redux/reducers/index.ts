import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weather from './weatherReducer';
import stormGlass from './stormGlassReducer';
import eventsReducer from './eventsReducer';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  weather,
  stormGlass,
  eventsReducer,
});

export default  persistReducer(persistConfig, rootReducer);

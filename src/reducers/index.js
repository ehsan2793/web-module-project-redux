import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';
const RootReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

export default RootReducer;

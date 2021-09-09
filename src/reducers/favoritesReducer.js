import {
  TOGGLE_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from './../actions/favoritesActions';

const initialState = {
  favorites: [{ title: 'movie', id: 1 }],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      return { ...state, displayFavorites: !state.displayFavorites };
    }
    case ADD_FAVORITES: {
      return {
        ...state,
        favorites: [state.favorites, action.payload],
      };
    }
    case REMOVE_FAVORITES: {
      return {
        ...state,
        favorites: state.filer((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default favoriteReducer;

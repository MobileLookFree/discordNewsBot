
import { ACTION_SET_ENGLISH, ACTION_SET_RUSSIAN} from './constants';

const initialState = {
  language: 0,
  languageSwitcherOpened: false
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ENGLISH:
      return { ...state, language: action.payload };
    case ACTION_SET_RUSSIAN:
    return { ...state, language: action.payload};
    default:
      return state;
  }
};


import { ACTION_SET_ENGLISH, ACTION_SET_RUSSIAN} from './constants';
 
export const setEnglish = () => ({
    type: ACTION_SET_ENGLISH,
    payload: 0
});

export const setRussian = () => ({
    type: ACTION_SET_RUSSIAN,
    payload: 1
})
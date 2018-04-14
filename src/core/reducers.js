import { combineReducers } from 'redux';
import { simonSaysReducer } from './simon-says/reducer';


export default combineReducers({
  simonSays: simonSaysReducer,
});

import _ from 'lodash';
import { simonSaysActions } from './actions';



export const initialState = {
  name: "Player",  
  score: 0,
  level: 1,
  delay: 400,
  gameOver: true,
  playSound: [],
  soundPattern: null,  // todo: generateSoundPattern(1, 4, 100),
  recordedPattern: [],
  leaderBoard: null,
  loadingLeaderBoard: false,
  loadingLeaderBoardError: false,
  savingLeaderBoard: false,  
  savingLeaderBoardError: false,
};

export function simonSaysReducer(state = initialState, { type, payload }) {
  switch (type) {
    /**
     * game actions
     */
    case simonSaysActions.START_GAME:
      return { ...state, ...initialState, soundPattern: null, gameOver: false, name: payload.name || state.name };
    case simonSaysActions.END_GAME:
      return { ...state, gameOver: true };
    case simonSaysActions.NEXT_LEVEL:
      return { ...state, level: state.level + 1, recordedPattern: [], score: null, }
    case simonSaysActions.RECORD_SOUND:
      return { ...state, recordedPattern: [...state.recordedPattern, payload.number] };

    /**
     * get leaderboard
     */
  
     // todo


    /**
     * post leaderboard
     */

    // todo

  
    default:
      return state;
  }
}

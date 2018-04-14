export const simonSaysActions = {
  START_GAME: 'START_GAME',
  END_GAME: 'END_GAME',
  NEXT_LEVEL: 'NEXT_LEVEL',
  RECORD_SOUND: 'RECORD_SOUND',

  POST_LEADERBOARD: 'POST_LEADERBOARD',
  GET_LEADERBOARD: 'GET_LEADERBOARD',

  GET_LEADERBOARD_FAILED: 'GET_LEADERBOARD_FAILED',
  GET_LEADERBOARD_FULFILLED: 'GET_LEADERBOARD_FULFILLED',
  GET_LEADERBOARD_PENDING: 'GET_LEADERBOARD_PENDING',

  POST_LEADERBOARD_FAILED: 'POST_LEADERBOARD_FAILED',
  POST_LEADERBOARD_FULFILLED: 'POST_LEADERBOARD_FULFILLED',
  POST_LEADERBOARD_PENDING: 'POST_LEADERBOARD_PENDING',
  

  /**
   * game actions
   */

  startGame: name => ({
    type: simonSaysActions.START_GAME,
    payload: {
      name
    }
  }),

  endGame: () => ({
    type: simonSaysActions.END_GAME
  }),

  nextLevel: () => ({
    type: simonSaysActions.NEXT_LEVEL
  }),

  recordSound: number => ({
    type: simonSaysActions.RECORD_SOUND,
    payload: {
      number
    }
  }),

  
  /**
   * load leaderboard 
   */

  getLeaderBoard: () => ({
    type: simonSaysActions.GET_LEADERBOARD
  }),

  getLeaderBoardFailed: error => ({
    type: simonSaysActions.GET_LEADERBOARD_FAILED,
    payload: error
  }),

  getLeaderBoardFulfilled: (id, data) => ({
    type: simonSaysActions.GET_LEADERBOARD_FULFILLED,
    payload: {
      data
    }
  }),

  getLeaderBoardPending: () => ({
    type: simonSaysActions.GET_LEADERBOARD_PENDING
  }),


  /**
   * post leaderboard 
   */

  postLeaderBoard: (name, score) => ({
    type: simonSaysActions.POST_LEADERBOARD,
    payload: {
      name,
      score
    }
  }),

  postLeaderBoardFailed: error => ({
    type: simonSaysActions.POST_LEADERBOARD_FAILED,
    payload: error
  }),

  postLeaderBoardFulfilled: data => ({
    type: simonSaysActions.POST_LEADERBOARD_FULFILLED,
    data
  }),

  postLeaderBoardPending: () => ({
    type: simonSaysActions.POST_LEADERBOARD_PENDING
  })
};

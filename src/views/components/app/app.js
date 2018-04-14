import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StartPage from '../../pages/start-page';
import SimonSaysPage from '../../pages/simon-says-page';


export function App({ gameOver }) {
  return (
   gameOver ? <StartPage /> : <SimonSaysPage />
  );
}

App.propTypes = {
  gameOver: PropTypes.bool.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = ({ simonSays }) => ({
  gameOver: simonSays.gameOver
});

export default connect(
  mapStateToProps
)(App);

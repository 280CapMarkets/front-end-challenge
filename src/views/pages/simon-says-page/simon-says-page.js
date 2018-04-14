import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import _ from 'lodash';
import { simonSaysActions } from '../../../core/simon-says/actions';

import InfoBar from '../../components/info-bar';


class SimonSaysPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.startLevelOne();
  }

  startLevelOne() {
    // todo
  }

  animateGlow(number) {
    // todo
  }

  startNextLevel(level) {
    // todo
  }

  render() {
    return (
      <div>Simon Says Game</div>
    );
  }
}

SimonSaysPage.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  score: PropTypes.number,
  delay: PropTypes.number,
  soundPattern: PropTypes.array,
  recordedPattern: PropTypes.array,
  endGame: PropTypes.func,
  nextLevel: PropTypes.func,
  recordSound: PropTypes.func,
  save: PropTypes.func
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = ({ simonSays }) => ({
  name: simonSays.name,
  level: simonSays.level,
  score: simonSays.score,
  delay: simonSays.delay,
  soundPattern: simonSays.soundPattern,
  recordedPattern: simonSays.recordedPattern
});

const mapDispatchToProps = {
  endGame: simonSaysActions.endGame,  
  nextLevel: simonSaysActions.nextLevel,  
  recordSound: simonSaysActions.recordSound,  
  save: simonSaysActions.postLeaderBoard
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SimonSaysPage);

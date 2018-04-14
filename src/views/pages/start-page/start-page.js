import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import JsonTable from 'react-json-table';
import _ from 'lodash';
import { simonSaysActions } from '../../../core/simon-says';
import { KEY_PRESS_ENTER } from '../../../core/constants';

import Button from '../../components/button';

import css from './start-page.scss';


class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getLeaderBoardData() {
    // todo
  }

  handleStartGame() {
    this.props.startGame(this.refs.name.value || "Player");
  }

  handleKeyDown(e) {
    if (e.which === KEY_PRESS_ENTER) {
      this.handleStartGame();
    }
  }

  renderLeaderBoard() {
    const { leaderBoard, loadingLeaderBoard } = this.props;
    let result = "No scores yet.";
    if (loadingLeaderBoard) {
      result = "Loading...";
    } 
    else if (_.isArray(leaderBoard)) {
      const arr = leaderBoard.map( item => ({ name: item.name, score: parseInt(item.score) }));
      const sorted = _.sortBy(arr, 'score').reverse();
      result = <JsonTable className={"leaderboard"} rows={sorted} />;
    }
    return (
      <div className="leaderboardContainer">
        {result}
      </div>
    );
  }

  render() {
    return (
      <div className="startPage">
        <div className="overlay">
          <h1>Simon Says</h1>
          <h4>I'll play a melody, and you play it back. Ready?</h4>
          <input type="text" onKeyDown={this.handleKeyDown} className="enterName" placeholder="Enter your name" ref="name" />  
          <Button label="Start!" onClick={this.handleStartGame} />
          <small>CONTROLS: TOUCH, CLICK, OR NUMERIC KEYS 1 – 4.</small>
          <div className="boardContainer">
            <h4>Leaderboard</h4>
            {this.renderLeaderBoard()}
          </div>
        </div>
      </div>
    );
  }
}

StartPage.propTypes = {
  leaderBoard: PropTypes.array,
  loadingLeaderBoard: PropTypes.bool,
  startGame: PropTypes.func,
  getLeaderBoard: PropTypes.func
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = ({ simonSays }) => ({
  leaderBoard: simonSays.leaderBoard,
  loadingLeaderBoard: simonSays.loadingLeaderBoard
});

const mapDispatchToProps = {
  startGame: simonSaysActions.startGame,
  getLeaderBoard: simonSaysActions.getLeaderBoard
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(StartPage);

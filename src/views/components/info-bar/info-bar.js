import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './info-bar.scss';


class InfoBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBonusLevel() {
    // todo
  }

  render() {
    const { level, score } = this.props;
    return <div className="infoBar">
        <div className="level">Level: {level}</div>
        <div className="score">Score: {score}</div>
        {this.renderBonusLevel()}
      </div>;
  }
}

InfoBar.propTypes = {
  level: PropTypes.number,
  score: PropTypes.number
};

export default InfoBar;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './button.scss';


export function Button({ className='btn-blue', label, onClick, type='button' }) {
  return (
    <button
      className={classNames(className)}
      onClick={onClick}
      type={type}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
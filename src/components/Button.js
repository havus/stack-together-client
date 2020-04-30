import React from 'react';
import classNames from 'classnames';
import './button.scss';

const Button = props => {
  const { children, className, color, onClick, shape, style } = props;
  const buttonClasses = classNames(
    'btn',
    color || 'blue',
    shape
  )

  return (
    <button
      className={ buttonClasses + ' ' + className }
      style={ style }
      onClick={ onClick }
    >
      { children }
    </button>
  );
};

export default Button;

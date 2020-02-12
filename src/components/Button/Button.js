import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './ButtonStyles';

export default function Button({
  className,
  text,
  onClick,
  isSubmit,
  noBackground,
}) {
  return (
    <Wrapper
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      noBackground={noBackground}
      onClick={onClick}
    >
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  noBackground: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  isSubmit: false,
  noBackground: false,
};

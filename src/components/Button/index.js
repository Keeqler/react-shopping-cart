import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({
  className,
  icon: Icon,
  text,
  onClick,
  isSubmit,
  noBackground,
}) {
  return (
    <Container
      className={className}
      type={isSubmit ? 'submit' : 'button'}
      noBackground={noBackground}
      onClick={onClick}
    >
      {Icon && <Icon size={16} color="var(--primary)" />}&nbsp; {text}
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSubmit: PropTypes.bool,
  noBackground: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  icon: null,
  onClick: () => {},
  isSubmit: false,
  noBackground: false,
};

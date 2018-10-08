import React from 'react';
import PropTypes from 'prop-types';

import { Button, Wrapper, Number } from './styles';

const Quantity = ({...props, children}) => {
  return(
    <Wrapper {...props}>
      <Button>-</Button>
      <Number>{children}</Number>
      <Button>+</Button>
    </Wrapper>
  );
}

Quantity.propTypes = {
  children: PropTypes.number.isRequired,
}

export default Quantity;

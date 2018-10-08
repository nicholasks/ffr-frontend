import React from 'react';
import PropTypes from 'prop-types';

import { Title, Wrapper, Image, Description, Combo } from './styles';

const Promotions = ({...props, title, foto, children }) => {
  return(
    <Wrapper {...props}>
      <Title>{title}</Title>
      <Combo>
        <Image src={foto}/>
        <Description>{children}</Description>
      </Combo>
    </Wrapper>
  );
}

export default Promotions;

Promotions.propTypes = {
  title: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

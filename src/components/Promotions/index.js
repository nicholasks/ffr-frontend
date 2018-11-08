import React from 'react';
import PropTypes from 'prop-types';

import { Title, Wrapper, Image, Description, Combo } from './styles';

export default function Promotions ({ title, foto, children, ...props }) {
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

Promotions.propTypes = {
  title: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
}

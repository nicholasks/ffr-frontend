import React, { Component } from 'react';

import { Wrapper, Valor, Text, Logo, Hr } from './styles';
import imgLogo from '@/Images/logo.png';

export default class Header extends Component {
  render() {
    return(
      <Wrapper>
        <Logo src={imgLogo} alt="Logo"></Logo>
        <Hr />
        <Text>Valor: </Text>
        <Valor>R$ 12,00</Valor>
      </Wrapper>
    );
  }
}

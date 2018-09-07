import React, { Component } from 'react';

import { Wrapper, Valor, Text, HrBottom } from './styles';

export default class Header extends Component {
  render() {
    return(
      <Wrapper>
        <Text>Valor: </Text>
        <Valor>R$ 12,00</Valor>
      </Wrapper>
    );
  }
}

import React, { Component } from 'react';

import { Wrapper, Option, OptionWrapper } from './styles';

export default class MenuLeft extends Component {
  render() {
    return(
      <Wrapper>
        <OptionWrapper>
          <Option>Hamburguer</Option>
          <Option>Bebidas</Option>
          <Option>Sorvetes</Option>
          <Option>Carrinho</Option>
          <Option>Finalizar pedido</Option>
        </OptionWrapper>
      </Wrapper>
    );
  }
}

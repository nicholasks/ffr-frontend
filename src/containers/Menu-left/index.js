import React, { Component } from 'react';

import { Wrapper, Option, OptionWrapper } from './styles';

export default class MenuLeft extends Component {
  render() {
    return(
      <Wrapper>
        <OptionWrapper>
          <Option to="hamburguer">Hamburguer</Option>
          <Option to="bebidas">Bebidas</Option>
          <Option to="doces">Doces</Option>
          <Option to="carrinho">Carrinho</Option>
          <Option to="finalizarPedido">Finalizar pedido</Option>
        </OptionWrapper>
      </Wrapper>
    );
  }
}

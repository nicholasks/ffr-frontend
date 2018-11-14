import React from 'react';

import { Wrapper, SuccessText, Finish } from './styles';

export default function Success({ direction, finish }) {
  return (
    <Wrapper>
      <SuccessText>{finish ? 'Sucesso em finalizar pedido!' : 'Succeso em adicionar no carrinho!'}</SuccessText>
      <Finish to={direction}>Ok</Finish>
    </Wrapper>
  );
}

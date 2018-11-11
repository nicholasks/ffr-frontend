import React from 'react';

import { Wrapper, SuccessText, Finish } from './styles';

export default function Success() {
  return (
    <Wrapper>
      <SuccessText>Succeso em adicionar no carrinho!</SuccessText>
      <Finish to="/">Ok</Finish>
    </Wrapper>
  );
}

import React, { PureComponent } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Success from '@/components/Success';

export default class FinalizarPedido extends PureComponent {
  constructor(props) {
    super(props)
    this.finishOrder();
  }

  finishOrder = () => {
    //TODO chamada de API para finalizar pedido
    console.log('entrou');
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Head title="FinalizarPedido" />
          <Success direction="/" finish={true} />
        </Wrapper>
      </Container>
    );
  }
}

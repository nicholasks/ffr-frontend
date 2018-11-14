import React, { PureComponent } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Success from '@/components/Success';

export default class FinalizarPedido extends PureComponent {
  async componentDidMount() {
    try {
      // TODO chamada de serviço finalizando pedidos
    } catch (error) {
      console.log(error);
    }
  }

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

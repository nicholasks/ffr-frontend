import React, { PureComponent, Fragment } from 'react';

import { Drinks } from '@/api/Product';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Success from '@/components/Success';
import { Content, Image, Quantity, SuccessWrapper, SuccessButton, Name, Value, Info, Description } from './styles';

const Range = [0,1,2,3,4,5];

export default class Bebidas extends PureComponent {
  state = {
    products: [],
    showListItens: true,
  }

  selectIngredients = () => {
    console.log('clicando');
  };

  successCart = () => {
    this.setState({ showListItens: false })
  };

  async componentDidMount() {
    try {
      const { data: { results } } = await Drinks();
      console.log(results);
      this.setState({ products: results });
    } catch (error) {
      console.log(error);
    }
  }

  listItens = () => {
    const { products } = this.state;

    return (
    <form onSubmit={this.successCart}>
        {products.map(value => {
        return (
          <Fragment key={value.name}>
            <Name>{value.name}</Name>
            <Content onClick={this.selectIngredients}>
              <Image src={value.image} alt="Foto Bebidas" />
              <Info>
                <Description>{value.description}</Description>
                <Value>Valor: R${value.price}</Value>
              </Info>
            </Content>
            <Quantity value={Range} />
            <hr />
          </Fragment>
        )
      })}
      <SuccessWrapper>
        <SuccessButton type="submit">Adicionar na comanda</SuccessButton>
      </SuccessWrapper>
    </form>
    );
  };

  render() {
    const { showListItens } = this.state;
    return (
      <Container>
        <Wrapper>
          <Head title="Hamburguer" />
          {showListItens && this.listItens()}
          {!showListItens && <Success direction="/" />}
        </Wrapper>
      </Container>
    );
  }
}

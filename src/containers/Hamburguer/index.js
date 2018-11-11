import React, { PureComponent } from 'react';

import { Product } from '@/api/Product';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Success from '@/components/Success';
import { Content, Image, Quantity, Description, SuccessWrapper, SuccessButton } from './styles';

const Range = [0,1,2,3,4,5];

export default class Hamburguer extends PureComponent {
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
      const { data: { results } } = await Product();
      this.setState({ products: results });
    } catch (error) {
      console.log(error);
    }
  }

  listItens = () => {
    const { products } = this.state;
    return (
    <div>
        {products.map(value => {
        return (
          <div>
            <Content onClick={this.selectIngredients}>
              <Image src={value.image} alt="Foto Hamburguer" />
              <Description>{value.description}</Description>
            </Content>
            <Quantity value={Range} />
          </div>
        )
      })}
      <SuccessWrapper>
        <SuccessButton onClick={this.successCart}>Adicionar na comanda</SuccessButton>
      </SuccessWrapper>
    </div>
    );
  };

  render() {
    const { showListItens } = this.state;
    return (
      <Container>
        <Wrapper>
          <Head title="Hamburguer" />
          {showListItens && this.listItens()}
          {!showListItens && <Success />}
        </Wrapper>
      </Container>
    );
  }
}

import React, { PureComponent } from 'react';

import { Product } from '@/api/Product';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import { Content, Image, Quantity, Description, SuccessWrapper, SuccessButton } from './styles';

const Range = [0,1,2,3,4,5];

export default class Hamburguer extends PureComponent {
  state = {
    products: [],
  }

  selectIngredients = () => {
    console.log('clicando');
  };

  successCart = () => {
    console.log('sucesso');
  };

  async componentDidMount() {
    const { data: { results } } = await Product();
    this.setState({ products: results });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <Wrapper>
          <Head title="Hamburguer" />
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
            <SuccessButton onClick={this.successCart}>Adicionar no carrinho</SuccessButton>
          </SuccessWrapper>
        </Wrapper>
      </Container>
    );
  }
}

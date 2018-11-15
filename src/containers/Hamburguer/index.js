import React, { PureComponent, Fragment } from 'react';

import { Product } from '@/api/Product';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Success from '@/components/Success';
import { Content, Image, Quantity, SuccessWrapper, SuccessButton, Name, Value, Info, Ingredients, Description } from './styles';

const Range = [0,1,2,3,4,5];

export default class Hamburguer extends PureComponent {
  state = {
    food: [],
    showListItens: true,
  }

  successCart = () => {
    this.setState({ showListItens: false })
  };

  async componentDidMount() {
    try {
      const { data: { results } } = await Product();
      this.setState({ food: results });
    } catch (error) {
      console.log(error);
    }
  }

  listItens = () => {
    const { food } = this.state;

    return (
    <form onSubmit={this.successCart}>
        {food.map(value => {
        return (
          <Fragment key={value.price}>
            <Name>{value.name}</Name>
            <Content>
              <Image src={value.image} alt="Foto Hamburguer" />
              <Info>
                <Description>{value.description}</Description>
                {value.ingredients.map(value => {
                  return (
                    <Ingredients key={value.name}>{value.name}, </Ingredients>
                  )
                })}
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
          {!showListItens && <Success direction="/home" />}
        </Wrapper>
      </Container>
    );
  }
}

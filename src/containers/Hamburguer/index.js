import React, { PureComponent } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import { Content, Image, Quantity, Description, SuccessWrapper, SuccessButton } from './styles';

import fotoHamburguer from '@/Images/background.jpg'

const Range = [0,1,2,3,4,5];

export default class Hamburguer extends PureComponent {
  selectIngredients = () => {
    console.log('clicando');
  };

  successCart = () => {
    console.log('sucesso');
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <Head title="Hamburguer" />
          <Content>
            <Image onClick={this.selectIngredients} src={fotoHamburguer} alt="Foto Hamburguer" />
            <Description>Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
            <br /><br /> Ingredientes: Pão, Carne, Bacon, Alface, Tomate.</Description>
          </Content>
          <Quantity value={Range} />
          <Content>
            <Image onClick={this.selectIngredients} src={fotoHamburguer} alt="Foto Hamburguer" />
            <Description>Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
            <br /><br /> Ingredientes: Pão, Carne, Bacon, Alface, Tomate.</Description>
          </Content>
          <Quantity value={Range} />
          <SuccessWrapper>
            <SuccessButton onClick={this.successCart}>Adicionar no carrinho</SuccessButton>
          </SuccessWrapper>
        </Wrapper>
      </Container>
    );
  }
}

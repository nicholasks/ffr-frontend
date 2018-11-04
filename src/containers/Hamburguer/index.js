import React, { Component } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Quantity from '@/components/Quantity';
import Description from '@/components/Description';
import { Content, Image } from './styles';

import fotoHamburguer from '@/Images/background.jpg'

export default class Hamburguer extends Component {
  state = {
    value: [0,1,2,3,4,5],
  }

  selectIngredients = () => {
    console.log('clicando');
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
          <Quantity value={this.state.value} />
        </Wrapper>
      </Container>
    );
  }
}

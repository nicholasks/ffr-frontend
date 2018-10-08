import React, { Component } from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Quantity from '@/components/Quantity';
import Description from '@/components/Description';
import { Content, Image } from './styles';

import fotoHamburguer from '../../Images/background.jpg'

export default class Hamburguer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Head title="Hamburguer" />
          <Content>
            <Image src={fotoHamburguer} alt="Foto Hamburguer" />
            <Description>asuhuhasuhasu</Description>
          </Content>
          <Quantity>5</Quantity>
        </Wrapper>
      </Container>
    );
  }
}

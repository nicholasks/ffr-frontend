import React from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Promotions from '@/components/Promotions';
import Hamburguer from '../../Images/background.jpg'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Head title="Home" />
        <Promotions title="Hamburguer + Coca" foto={Hamburguer}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes: Pão, Carne, Bacon, Alface, Tomate.
        </Promotions>
        <Promotions title="Hamburguer + Coca" foto={Hamburguer}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes:
        </Promotions>
        <Promotions title="Hamburguer + Coca" foto={Hamburguer}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes:
        </Promotions>
        <Promotions title="Hamburguer + Coca" foto={Hamburguer}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes:
        </Promotions>
        <Promotions title="Hamburguer + Coca" foto={Hamburguer}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes:
        </Promotions>
      </Wrapper>
    </Container>
  );
}

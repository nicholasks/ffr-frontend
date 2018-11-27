import React from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';
import Wrapper from '@/components/Wrapper';
import Promotions from '@/components/Promotions';
import HamburguerBatata from '@/Images/hamburguer-batatafrita.jpg'
import HamburguerCocacola from '@/Images/hamburguer-cocacola.jpg'
import HamburguerDois from '@/Images/hamburguer-dois.jpg'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Head title="Home" />
        <Promotions title="Hamburguer + Coca" foto={HamburguerCocacola}>
          Nós possuímos uma ótima promoção para quem quer comer um delicioso hamburguer com aquela coca bem gelada.
          <br /><br /> Ingredientes: Pão, Carne, Bacon, Alface, Tomate.
        </Promotions>
        <Promotions title="Hamburguer + Batata frita" foto={HamburguerBatata}>
          Um hamburguer delicioso acompanhado com batatas fritas.
          <br /><br /> Ingredientes: Carne, Pão 150g, Alface, Queijo, Pepino, Batata frita.
        </Promotions>
        <Promotions title="Hamburguer + Coca" foto={HamburguerDois}>
          2 deliciosos hamburgueres para quem está com aquela fome tremenda.
          <br /><br /> Ingredientes: Carne, Pão, Queijo, Alface, Bacon, Molho especial.
        </Promotions>
      </Wrapper>
    </Container>
  );
}

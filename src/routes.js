import React from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: () => 'Loading...',
});

const Hamburguer = Loadable({
  loader: () => import('./containers/Hamburguer'),
  loading: () => 'Loading...',
});

const Finalizar = Loadable({
  loader: () => import('./containers/FinalizarPedido'),
  loading: () => 'Loading...',
});

const Bebidas = Loadable({
  loader: () => import('./containers/Bebidas'),
  loading: () => 'Loading...',
});

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Hamburguer path="/hamburguer" />
      <Finalizar path="/finalizarPedido" />
      <Bebidas path="/bebidas" />
    </Router>
  );
}

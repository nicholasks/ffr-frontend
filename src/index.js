import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { Wrapper, Logo } from './styles';
import imgLogo from '@/Images/logo.jpg';

import Menuleft from '@/containers/Menu-left';
import Header from '@/containers/Header';
import App from './containers/App';
import Routes from './routes';
import createStore from './createStore';
import registerServiceWorker from './registerServiceWorker';
import { theme } from './globalStyles';

export const { store, dispatch } = createStore();

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <App>
              <Header />
              <Wrapper>
                <Logo src={imgLogo} alt="Logo"></Logo>
              </Wrapper>
              <Menuleft />
              <Routes />
            </App>
          </HelmetProvider>
        </ThemeProvider>
      </AppContainer>
    </Provider>,
    MOUNT_NODE
  );
}

registerServiceWorker();

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

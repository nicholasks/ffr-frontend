import React, { PureComponent } from 'react';
import jsQR from 'jsqr';

import { Wrapper } from './styles';

const Code = jsQR(ImageData);

export default class QRCode extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Code />
      </Wrapper>
    );
  }
}

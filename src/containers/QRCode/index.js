import React, { PureComponent } from 'react';
import QrReader from 'react-qr-scanner';

import { Wrapper, BorderLeft, BorderRight } from './styles';

export default class QRCode extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      result: '',
    }
  }

  handleScan = data => {
    this.setState({
      result: data,
    })
  };

  handleError = err => {
    console.log(err);
  };

  render() {
    const { delay, result } = this.state;

    return (
      <Wrapper>
        <BorderLeft />
        <QrReader
          delay={delay}
          style={{ width: 450 }}
          onScan={this.handleScan}
          onError={this.handleError}
        />
        <BorderRight />
      </Wrapper>
    );
  }
}

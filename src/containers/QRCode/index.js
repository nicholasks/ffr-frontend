import React, { PureComponent } from 'react';
import QrReader from 'react-qr-scanner';
import { navigate  } from "@reach/router"

import { QRCodeScanner } from '@/api/QRCode'

import { Wrapper, BorderLeft, BorderRight } from './styles';

export default class QRCode extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      delay: 500,
    }
  }

  handleScan = async value => {
    if (!value) return null;

    try {
      const { data : { count }} = await QRCodeScanner(value);

      if (count === 1) navigate ('/home');
    } catch (error) {
      console.log(error);
    }
  };

  handleError = err => {
    console.log(err);
  };

  render() {
    const { delay } = this.state;

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

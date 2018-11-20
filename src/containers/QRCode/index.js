import React, { PureComponent } from 'react';
import QrReader from 'react-qr-scanner';

import { Wrapper } from './styles';

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

    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <Wrapper>
        <QrReader
          delay={delay}
          style={previewStyle}
          onScan={this.handleScan}
          onError={this.handleError} />
      </Wrapper>
    );
  }
}

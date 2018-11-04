import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Select, Option } from './styles';

export default function Quantity ({...props}) {
  return(
    <Wrapper {...props}>
      <Select name="quantidade">
        <Option value="0">0</Option>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
      </Select>
    </Wrapper>
  );
}

Quantity.propTypes = {
  children: PropTypes.number.isRequired,
}

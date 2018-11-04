import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Select, Option } from './styles';

export default function Quantity ({value, ...props}) {
  return(
    <Wrapper {...props}>
      <Select name="quantidade">
        {value.map(value => {
          return <Option key={value} value={value}>{value}</Option>
        })}
      </Select>
    </Wrapper>
  );
}

Quantity.propTypes = {
  value: PropTypes.array.isRequired,
}

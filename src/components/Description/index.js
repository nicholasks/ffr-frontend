import React from 'react';
import PropTypes from 'prop-types';

const Description = ({...props, title, children}) => {
  return (
    <div>{children}</div>
  );
}

export default Description;

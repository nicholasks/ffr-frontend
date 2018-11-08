import React from 'react';

const Description = ({...props, children}) => {
  return (
    <div {...props}>{children}</div>
  );
}

export default Description;

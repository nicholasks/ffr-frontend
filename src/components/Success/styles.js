import styled from 'styled-components';

import { Link } from '@reach/router';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SuccessText = styled.p`
  margin: 0;
  font-size: 35px;
`;

export const Finish = styled(Link)`
  color: #fff;
  outline: none;
  padding: 15px 60px;
  background: #3d558e;
  border-radius: 30px;
  text-decoration: none;
`;

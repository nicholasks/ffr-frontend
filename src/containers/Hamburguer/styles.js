import styled from 'styled-components';

import QuantityComponent from '@/components/Quantity';
import DescriptionComponent from '@/components/Description';

export const Quantity = styled(QuantityComponent)`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SuccessButton = styled.button`
  border: 0;
  color: #fff;
  padding: 15px;
  outline: none;
  background: #3d558e;
  border-radius: 30px;
`;

export const Description = styled(DescriptionComponent)`
  margin: 20px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 210px;
  height: 180px;
`;

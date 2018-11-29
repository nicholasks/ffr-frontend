import styled from 'styled-components';

import QuantityComponent from '@/components/Quantity';
import DescriptionComponent from '@/components/Description';

export const Quantity = styled(QuantityComponent)`
  margin-top: 20px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SuccessWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Name = styled.p`
  display: flex;
  margin-top: 0;
  font-size: 25px;
  justify-content: center;
`;

export const Value = styled.p`
  font-size: 24px;
`;

export const Ingredients = styled.span``;

export const Info = styled.div`
  margin: 20px;
`;

export const SuccessButton = styled.button`
  border: 0;
  color: #fff;
  padding: 15px;
  outline: none;
  margin-top: 40px;
  background: #3d558e;
  border-radius: 30px;
`;

export const Description = styled(DescriptionComponent)`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 210px;
  height: 180px;
`;

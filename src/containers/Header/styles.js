import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 770px;
  float: right;
  height: 112px;
  display: flex;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.menuLeft.default};
  border-bottom: 1px solid ${({ theme }) => theme.menuLeft.default};
`;

export const Text = styled.span`
  font-size: 50px;
  padding-left: 40px;

  &:last-child {
    padding-left: 10px;
  }
`;

export const Valor = styled(Text)`
  font-weight: 700;
`;

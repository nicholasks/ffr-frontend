import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  float: right;
  height: 131px;
  display: flex;
  position: fixed;
  align-items: center;
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

export const Logo = styled.img`
  width: 170px;
  margin-left: 50px;
`;

export const Hr = styled.div`
  width: 1px;
  height: 100%;
  padding-left: 34px;
  border-right: 2px solid ${({ theme }) => theme.menuLeft.default};
`;

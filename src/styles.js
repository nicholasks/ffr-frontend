import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  height: 132px;
  position: fixed;
  padding: 20px 42px 0 42px;
  border-right: 2px solid ${({ theme }) => theme.menuLeft.default};
`;

export const Logo = styled.img`
  width: 170px;
`;

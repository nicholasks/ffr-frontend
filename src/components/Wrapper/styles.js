import styled from 'styled-components';

export const Container = styled.div`
  padding: 164px 0 0 340px;
  width: 100%;
`;

export const Hr = styled.div`
  top: -52px;
  width: 1px;
  left: -86px;
  height: 57px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.menuLeft.default};
`;

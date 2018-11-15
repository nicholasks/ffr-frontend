import styled from 'styled-components';

export const Wrapper = styled.div`
  opacity: 0.45;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.qrcode.default };
`;

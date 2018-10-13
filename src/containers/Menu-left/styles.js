import styled from 'styled-components';
import { Link } from '@reach/router';

export const Wrapper = styled.div`
  top: 130px;
  float: left;
  width: 256px;
  height: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.menuLeft.default};
`;

export const Option = styled(Link)`
  padding: 0;
  border: none;
  opacity: 0.6;
  font-size: 28px;
  text-decoration: none;
  color: ${({ theme }) => theme.menuLeft.white};
  background: ${({ theme }) => theme.menuLeft.default};

  &:focus {
    opacity: 1;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  padding: 30px 0 0 35px;
  flex-direction: column;
  align-items: flex-start;
`;

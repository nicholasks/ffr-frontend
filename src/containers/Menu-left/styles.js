import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 254px;
  height: 600px;
  background-color: ${({ theme }) => theme.menuLeft.default};
`;

export const Option = styled.button`
  padding: 0;
  border: none;
  opacity: 0.6;
  outline: none;
  font-size: 28px;
  color: ${({ theme }) => theme.menuLeft.white};
  background: ${({ theme }) => theme.menuLeft.default};

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  padding: 30px 0 0 52px;
  flex-direction: column;
  align-items: flex-start;
`;

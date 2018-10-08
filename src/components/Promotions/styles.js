import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    padding-bottom: 20px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
`;

export const Image = styled.img`
  height: 170px;
  margin: 10px 0 0 14px;
`;

export const Description = styled.span`
  font-size: 20px;
  margin: 10px 0 0 32px;
`;

export const Combo = styled.div`
  display: flex;
`;

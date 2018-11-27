import styled from 'styled-components';
import WrapperComponent from '@/components/Wrapper';

export const Wrapper = styled(WrapperComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

export const BorderLeft = styled.div`
  height: 310px;
  position: relative;
  padding-right: 20px;
  border-left: 2px solid #cc1717;

  &:after {
    width: 25px;
    content: "";
    color: #cc1717;
    border: 1px solid;
    position: absolute;
  }

  &:before {
    bottom: 0;
    width: 25px;
    content: "";
    color: #cc1717;
    border: 1px solid;
    position: absolute;
  }
`;

export const BorderRight = styled.div`
  height: 310px;
  padding-left: 20px;
  position: relative;
  border-right: 2px solid #cc1717;

  &:after {
    right: 0;
    width: 25px;
    content: "";
    color: #cc1717;
    border: 1px solid;
    position: absolute;
  }

  &:before {
    right: 0;
    bottom: 0;
    width: 25px;
    content: "";
    color: #cc1717;
    border: 1px solid;
    position: absolute;
  }
`

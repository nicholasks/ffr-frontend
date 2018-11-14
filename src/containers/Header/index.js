import React, { Component } from 'react';
import { TabTotalPrice } from '@/api/Tab';


import { Wrapper, Valor, Text, Logo, Hr } from './styles';
import imgLogo from '@/Images/logo.png';

export default class Header extends Component {
  state = {
    tabs: []
  }

  async componentDidMount() {
    try {
      const { data: { results } } = await TabTotalPrice(7890);
      this.setState({ tabs: results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { tabs } = this.state;
    return(
      <Wrapper>
        <Logo src={imgLogo} alt="Logo"></Logo>
        <Hr />
        <Text>Valor: </Text>
        <Valor>R${tabs[0] && tabs[0].total}</Valor>
      </Wrapper>
    );
  }
}

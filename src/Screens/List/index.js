import React from 'react';
import styled from 'styled-components';
import { View, Text, Button } from 'react-native';

import ToolBar from './Components/ToolBar';

export default class ListScreen extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <Container>
        <ToolBar />
      </Container>
    );
  }
}

const Container = styled.View``;
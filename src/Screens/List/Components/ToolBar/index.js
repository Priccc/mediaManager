import React from 'react';
import styled from 'styled-components';
import { autobind } from 'core-decorators';
import { View, Text, Image, TouchableOpacity, NativeModules } from 'react-native';

import images from './assets';

const ImagePicker = NativeModules.ImageCropPicker;

export default class ListScreen extends React.Component {
  @autobind
  onPicker() {
    ImagePicker.openPicker({
      multiple: true,
    }).then(image => {
      console.log(image);
    });
  }

  render() {
    return (
      <Container>
        <TouchableOpacity
          onPress={this.onPicker}
        >
          <Image style={{ height: 25, width: 25 }} source={images.import} />
        </TouchableOpacity>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 40;
  padding: 0 10px;
  background: #ddd;
  flex-direction: row;
  align-items: center;
`;
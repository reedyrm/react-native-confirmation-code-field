import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import ActiveColorDemo from './propsDemos/ActiveColor';
import CanPasteCode from './propsDemos/CanPasteCode';
import CellBorderWidthDemo from './propsDemos/CellBorderWidth';
import InactiveColorDemo from './propsDemos/InactiveColor';
import MaskSymbol from './propsDemos/MaskSymbol';
import PositionDemo from './propsDemos/InputPosition';
import SizeDemo from './propsDemos/Size';
import SpaceDemo from './propsDemos/Space';
import VariantDemo from './propsDemos/Variant';

import DarkExample from './realDemo/DarkExample';
import RedExample from './realDemo/RedExample';

import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <RedExample />
          <DarkExample />

          <CanPasteCode />
          <MaskSymbol />
          <ActiveColorDemo />
          <InactiveColorDemo />
          <CellBorderWidthDemo />
          <SpaceDemo />
          <SizeDemo />
          <PositionDemo />
          <VariantDemo />
        </ScrollView>
      </View>
    );
  }
}

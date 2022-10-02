import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('screen');

const LoaderScreen = props => {
  return (
    <View style={[styles.containerLoader, styles.horizontal]}>
      <ActivityIndicator size="large" color={COLOR.DRAKORANGE} />
    </View>
  );
};
export default LoaderScreen;

const styles = StyleSheet.create({
  containerLoader: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: "#000000",
  },
  horizontal: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    padding: 10,
    //  backgroundColor: "#000000",
  },
});

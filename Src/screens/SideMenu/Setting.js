import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../utils/FontFamily';


const Setting = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: FONTS.PoppinsRegular,
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 41,
        }}>
        Setting
      </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});

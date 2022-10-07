import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../utils/FontFamily';

const AboutUs = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: FONTS.PoppinsRegular,
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 41,
        }}>
        AboutUs
      </Text>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({});

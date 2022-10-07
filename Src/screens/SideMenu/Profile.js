import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../utils/FontFamily';

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: FONTS.PoppinsRegular,
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 41,
        }}>
        Profile
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

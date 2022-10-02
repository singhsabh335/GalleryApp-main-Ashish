import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import WalletHeader from '../../components/Header/WalletHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
import {COLOR} from '../../utils/Colors';
import TextTicker from 'react-native-text-ticker';
const {height, width} = Dimensions.get('screen');

const Live = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#E5E5E5',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: height * 0.1,
          width: width * 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLOR.ORANGE,
        }}>
        <TextTicker
          style={{fontSize: 14, color: COLOR.BLACK, paddingHorizontal: 20}}
          duration={6000}
          loop
          bounce
          repeatSpacer={60}
          marqueeDelay={2000}>
          For Going live and connecte with video call chat please stay connected
          with Live Chat is Comming soon........Thank you
        </TextTicker>
      </View>
    </SafeAreaView>
  );
};
export default Live;
const styles = StyleSheet.create({});

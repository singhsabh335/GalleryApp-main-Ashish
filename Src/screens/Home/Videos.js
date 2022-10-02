import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('window');
import {ImagePath} from '../../utils/ImagePath';

const Videos = props => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.YOUTUBE}
              resizeMode="contain"
              style={{height: 40, width: 40, borderRadius: 12}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text
            style={{
              fontSize: height / 43,
              color: COLOR.WHITE,
              fontWeight: 'bold',
            }}>
            Videos
          </Text>
        </View>
        <View style={styles.more}></View>
      </View>
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  header: {
    height: height * 0.08,
    width: width * 1,
    backgroundColor: COLOR.ORANGE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    height: height * 0.08,
    width: width * 0.2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tital: {
    height: height * 0.08,
    width: width * 0.4,
    // backgroundColor: 'green',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  more: {
    height: height * 0.08,
    width: width * 0.4,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

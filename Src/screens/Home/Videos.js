import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('window');
import {ImagePath} from '../../utils/ImagePath';
import Swiper from 'react-native-swiper';

import {CountryCode} from '../../utils/CountryCode';

const Videos = props => {


  const [banners, setBanners] = useState([]);

  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@bannners', CountryCode);
  const [loader, setLoader] = useState(false);

  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.IND}
              resizeMode="contain"
              style={{height: 38, width: 40, borderRadius: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text
            style={{
              fontSize: height / 40,
              color: COLOR.WHITE,
              fontWeight: 'bold',
            }}>
            India
          </Text>
        </View>
        <View style={styles.more}></View>
      </View>

      <ScrollView>
        {visible ? (
          <Swiper loop={false} index={selectedIndex}>
            {CountryCode.map((item, index) => (
              <View
                key={item.id}
                style={{
                  flex: 1,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#333',
                  // marginTop:height*0.15
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(false);
                  }}
                  style={{
                    height: 25,
                    width: 60,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    borderRadius: 10,
                    margin: 10,
                  }}>
                  <Text style={{color: 'white'}}> Close</Text>
                </TouchableOpacity>

                <Image
                  source={item.icon}
                  style={{
                    // borderRadius: 8,
                    // flex: 1,
                    height: '50%',
                    width: '100%',
                    marginTop: height * 0.15,
                  }}
                  resizeMode="stretch"
                />

                <Text
                  style={{
                    color: 'white',
                    marginTop: 4,
                  }}>
                  {item.label} [ {item.value} ]
                </Text>
              </View>
            ))}
          </Swiper>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {CountryCode.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                  setSelectedIndex(index);
                }}
                key={item.id}
                style={{
                  margin: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.icon}
                  style={{
                    height: height * 0.2,
                    width: width * 0.32,
                    borderRadius: 8,
                    // flex: 1,
                    // height: 100,
                    // width: 200,
                  }}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
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

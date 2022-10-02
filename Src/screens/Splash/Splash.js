import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
import {COLOR} from '../../utils/Colors';
ImagePath;

const {height, width} = Dimensions.get('window');

const Splash = props => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      // alert('This is Splash Screen');
      props.navigation.navigate('Home');
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.main} resizeMode="cover">
      <View
        style={{
          height: height * 0.15,
          width: width * 1,
          // borderWidth: 1,
          justifyContent: 'center',
          // backgroundColor:'red'
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: height / 25,
            color: COLOR.RED,
            fontWeight: 'bold',
          }}>
          Welcome
        </Text>
      </View>

      <View style={styles.image}>
        <Text
          style={{
            fontSize: height / 25,
            color: COLOR.RED,
            fontWeight: 'bold',
          }}>
          Mobile Gallery App
        </Text>
      </View>
      <View
        style={{
          height: height * 0.2,
          width: width * 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <Image source={ImagePath.IND}

            style={{height:100,width:100}}
          />
        </View>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFD4AA',
  },
  BaseReward: {
    height: height * 0.3,
    width: width * 1,
    backgroundColor: 'pink',
    // justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
  },
  image: {
    height: height * 0.4,
    width: width * 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imag: {
    height: height * 0.18,
    width: width * 1,
    // backgroundColor: "yellow",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

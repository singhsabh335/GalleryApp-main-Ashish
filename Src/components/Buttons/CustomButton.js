import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
const CustomButton = props => {
  const {title, btnMainView, ButtonPress, disabled} = props;
  return (
    <TouchableOpacity
      onPress={ButtonPress}
      disabled={disabled}
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: height * 0.05,
        width: width * 0.76,
        borderRadius: 10,
        backgroundColor: 'limegreen',
      }}>
      <Text
        style={{
          fontFamily: FONTS.PoppinsBold,
          fontSize: height / 50,
          color: '#FFFFFF',
          fontWeight:'600'
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

{
  /**

 <LinearGradient
        colors={['rgba(28, 111, 254, 1)', 'rgba(138, 29, 221, 1)']}
 </LinearGradient>


*/
}

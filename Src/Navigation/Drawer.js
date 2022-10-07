import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  Share,
} from 'react-native';
import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import {ImagePath} from '../utils/ImagePath';
import {FONTS} from '../utils/FontFamily';
import Home from '../screens/Home/Home';
import {COLOR} from '../utils/Colors';

const {height, width} = Dimensions.get('window');

const Draw = createDrawerNavigator();

const Drawer = props => {
  const [modalVisible, setModalVisible] = useState(false);

  function CustomDrawerContent({navigation}) {
    return (
      <View style={{flex: 1, backgroundColor: COLOR.WHITE}}>
        <View style={styles.profile}>
          <View style={styles.logo}>
            <Image
              source={ImagePath.APP_ICONE}
              resizeMode="contain"
              style={{height: 80, width: 80}}
            />
          </View>
          <View style={styles.profiletext}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsRegular,
                fontSize: height / 55,
                color: COLOR.BLACK,
              }}>
              Ashish Kumar
            </Text>
            <Text
              style={{
                fontFamily: FONTS.PoppinsRegular,
                fontSize: height / 55,
                color: COLOR.BLACK,
              }}>
              6396515715
            </Text>
            <Text
              style={{
                fontFamily: FONTS.PoppinsRegular,
                fontSize: height / 55,
                color: COLOR.BLACK,
              }}>
              mrviku335@gmail.com
            </Text>
            <Text
              style={{
                fontFamily: FONTS.PoppinsRegular,
                fontSize: height / 55,
                color: 'skyblue',
              }}>
              singhsabh336@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            height: height * 0.67,
            width: width * 0.85,
            backgroundColor: COLOR.POST_TXT,
            // borderEndWidth:1
          }}>
          <TouchableOpacity
            style={styles.bTn}
            onPress={() => props.navigation.navigate('Profile')}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 45,
                color: COLOR.BLACK,
              }}>
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Setting')}
            style={styles.bTn}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 45,
                color: COLOR.BLACK,
              }}>
              Setting
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('AboutUs')}
            style={styles.bTn}>
            <Text
              style={{
                fontFamily: FONTS.PoppinsSemiBold,
                fontSize: height / 45,
                color: COLOR.BLACK,
              }}>
              AboutUs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Draw.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: '86%',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Draw.Screen name="Home" component={Home} {...props} />
    </Draw.Navigator>
  );
};
export default Drawer;
const styles = StyleSheet.create({
  text_id: {
    color: '#FFFFFF',
    fontFamily: FONTS.PoppinsRegular,
    fontSize: height / 55,
  },
  profile: {
    justifyContent: 'center',
    height: height * 0.27,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  logo: {
    height: height * 0.12,
    width: width * 0.6,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiletext: {
    height: height * 0.12,
    width: width * 0.6,
    // borderWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // ===========
  RateUs: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.8,
    // backgroundColor: 'white',
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  bottomV: {
    height: height * 0.28,
    width: width * 0.85,
    // backgroundColor: 'skyblue',
  },
  Touchab: {
    height: height * 0.06,
    width: width * 0.11,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //=================================
  comnCont: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.85,
    // borderWidth: 1,
  },
  TouchNav: {
    height: height * 0.05,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  //================================modal===========================
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    height: height * 0.2,
    width: width * 0.86,
    backgroundColor: 'white',
  },
  bTn: {
    height: height * 0.067,
    width: width * 0.75,
    alignSelf: 'center',
    // backgroundColor: 'red',
    // alignItems:'center'
    justifyContent: 'center',
  },
});

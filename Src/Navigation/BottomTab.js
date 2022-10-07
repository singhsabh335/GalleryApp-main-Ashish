import * as React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import DashBoard from '../Screens/DashBoard/DashBoard';
import {ImagePath} from '../utils/ImagePath';
import Home from '../screens/Home/Home';
import Videos from '../screens/Home/Videos';
import {COLOR} from '../utils/Colors';
import Drawer from './Drawer';

const {height, width} = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarShowLabel: false,
      }}
      initialRouteName="Portfolio"
      // activeColor="#244273"
      // inactiveColor="#3e2465"
      barStyle={{
        paddingBottom: 48,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
      }}
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: COLOR.TEXTINPUT_BG,
          height: height * 0.067,
          borderTopWidth: 0,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 20,
        },
        tabBarLabel: {
          fontSize: height / 65,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Drawer}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'DashBoard',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.HOME_ICON}
                  style={{
                    height: height * 0.04,
                    width: width * 0.05,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 78,
                    color: 'red',
                    fontWeight: '700',
                  }}>
                  Gallery
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.HOME_ICON}
                  style={{
                    height: height * 0.04,
                    width: width * 0.05,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 78,
                    color: 'black',
                    fontWeight: '700',
                  }}>
                  Gallery
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'Redemptions',
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.IND}
                  style={{
                    height: height * 0.045,
                    width: width * 0.06,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'red',
                    fontWeight: '700',
                  }}>
                  Country list
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: height * 0.06,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  width: width * 0.2,
                }}>
                <Image
                  source={ImagePath.IND}
                  style={{
                    height: height * 0.045,
                    width: width * 0.06,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Lato-Regular',
                    fontSize: height / 75,
                    color: 'black',
                    fontWeight: '700',
                  }}>
                   Country list
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

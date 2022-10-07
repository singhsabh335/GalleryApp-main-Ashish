import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash/Splash';
import Videos from '../screens/Home/Videos';
import BottomTab from './BottomTab';
import Drawer from './Drawer';
import Setting from '../screens/SideMenu/Setting';
import AboutUs from '../screens/SideMenu/AboutUs';
import Profile from '../screens/SideMenu/Profile';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Videos" component={Videos} />
        {/**  //======================== side menu screen ========================== */}
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});

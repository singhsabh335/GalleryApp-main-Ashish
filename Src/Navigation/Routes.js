import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash/Splash';
import Live from '../screens/Home/Live';
import Read from '../screens/Home/Read';
import Videos from '../screens/Home/Videos';
import AstroloserList from '../screens/Home/AstroloserList';
import BottomTab from './BottomTab';
import Drawer from './Drawer';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Live" component={Live} />
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="AstroloserList" component={AstroloserList} />
        {/**  //======================== side menu screen ========================== */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});

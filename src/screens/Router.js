import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from 'react-navigation';
import React from 'react';

import Login from 'JupViec/src/screens/LoginScreen';

export const RouterStack = StackNavigator({
	ManHinh_Login: {
		screen: Login
	}
})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import ForgotPassword from './src/screens/ForgotPassword'
import MainStackNavigator from './src/screens/MainStackNavigator'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//const Tab = createBottomTabNavigator();

export default function App(){
  return <MainStackNavigator />
};

// const App = () =>{
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: '#157cdb',
//           inactiveTintColor: '#262626',
//         }}>
//         <Tab.Screen
//           name="Home"
//           component={MainStackNavigator}
//           options={{
//             tabBarLabel: 'Trang chủ',
//             tabBarIcon: ({color}) => (
//               <MaterialIcons name="home" size={26} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ForgotPassword}
//           options={{
//             tabBarLabel: 'Cá nhân',
//             tabBarIcon: ({color}) => (
//               <MaterialIcons name="person" size={26} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App

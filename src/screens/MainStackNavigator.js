import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import DangNhap from '../screens/DangNhap'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ForgotPassword from '../screens/ForgotPassword'
import DangKy from '../screens/DangKy'
import DichVu from '../screens/DichVu'
import DichVuScreen from '../screens/DichVuScreen'
import DVDungLeScreen from '../screens/DVDungLeScreen'
import DVDungDinhKyScreen from '../screens/DVDungDinhKyScreen'
import DVJupSofaScreen from '../screens/DVJupSofaScreen'
import DVTongVeSinhScreen from '../screens/DVTongVeSinhScreen'
import XacNhanDLScreen from '../screens/XacNhanDLScreen'
import XacNhanDKScreen from '../screens/XacNhanDKScreen'
import XacNhanSFScreen from '../screens/XacNhanSFScreen'
import KhaoSatScreen from '../screens/KhaoSatScreen'

import CapNhatTaiKhoan from '../screens/CapNhatTaiKhoan'
import HoSo from '../screens/HoSo'
import LichSu from '../screens/LichSu'
import ChiTiet from '../screens/ChiTiet'

import DungLe from '../screens/DungLe'

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
      	<Stack.Screen
          name='WelcomeScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={WelcomeScreen}
          options={{ title: 'JupViec v.1.7.9' }}
        />

 		    <Stack.Screen
          name='LoginScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={LoginScreen}
          options={{ title: 'Đăng nhập' }}
        />
        <Stack.Screen
          name='Login'
          screenOptions={{
          gestureEnabled: true}}
          component={Login}
          options={{ title: 'Đăng nhập tài khoản' }}
        />

        <Stack.Screen
          name='Register'
          screenOptions={{
          gestureEnabled: true}}
          component={Register}
          options={{ title: 'Đăng ký tài khoản' }}
        />

        <Stack.Screen
          name='DangKy'
          screenOptions={{
          gestureEnabled: true}}
          component={DangKy}
          options={{ title: 'Đăng ký' }}
        />

        <Stack.Screen
          name='ForgotPassword'
          screenOptions={{
          gestureEnabled: true}}
          component={ForgotPassword}
          options={{ title: 'Quên mật khẩu' }}
        />

        <Stack.Screen
          name='DangNhap'
          screenOptions={{
          gestureEnabled: true}}
          component={DangNhap}
          options={{ title: 'Đăng nhập' }}
        />

        <Stack.Screen
          name='DichVu'
          screenOptions={{
          gestureEnabled: true}}
          component={DichVu}
          options={{ title: 'Dịch vụ' }}
        />

      	<Stack.Screen
          name='DichVuScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DichVuScreen}
          options={{ title: 'Dịch vụ' }}
        />
        
        <Stack.Screen
          name='DVDungLeScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVDungLeScreen}
          options={{ title: 'Giúp việc dùng lẻ' }}
        />

        <Stack.Screen
          name='DVDungDinhKyScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVDungDinhKyScreen}
          options={{ title: 'Giúp việc dùng định kỳ' }}
        />

        <Stack.Screen
          name='DVJupSofaScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVJupSofaScreen}
          options={{ title: 'Giặt Sofa' }}
        />

        <Stack.Screen
          name='DVTongVeSinhScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={DVTongVeSinhScreen}
          options={{ title: 'Giúp việc tổng vệ sinh' }}
        />

        <Stack.Screen
          name='XacNhanDLScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={XacNhanDLScreen}
          options={{ title: 'Xác nhận thông tin' }}
        />

        <Stack.Screen
          name='XacNhanDKScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={XacNhanDKScreen}
          options={{ title: 'Xác nhận thông tin' }}
        />

        <Stack.Screen
          name='XacNhanSFScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={XacNhanSFScreen}
          options={{ title: 'Xác nhận thông tin' }}
        />

        <Stack.Screen
          name='KhaoSatScreen'
          screenOptions={{
          gestureEnabled: true}}
          component={KhaoSatScreen}
          options={{ title: 'Khảo sát tổng vệ sinh' }}
        />

        <Stack.Screen
          name='CapNhatTaiKhoan'
          screenOptions={{
          gestureEnabled: true}}
          component={CapNhatTaiKhoan}
          options={{ title: 'Cập nhật thông tin khách hàng' }}
        />

        <Stack.Screen
          name='HoSo'
          screenOptions={{
          gestureEnabled: true}}
          component={HoSo}
          options={{ title: 'Thông tin khách hàng' }}
        />

        <Stack.Screen
          name='LichSu'
          screenOptions={{
          gestureEnabled: true}}
          component={LichSu}
          options={{ title: 'Lịch sử' }}
        />

        <Stack.Screen
          name='ChiTiet'
          screenOptions={{
          gestureEnabled: true}}
          component={ChiTiet}
          options={{ title: 'Chi tiết đơn hàng' }}
        />

        <Stack.Screen
          name='DungLe'
          screenOptions={{
          gestureEnabled: true}}
          component={DungLe}
          options={{ title: 'Xác nhận dùng lẻ' }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity, } from 'react-native'

function DVDungDinhKyScreen (props) {
  const { navigation } = props
  return (
    <View style={styles.container,{
                     flex: 1,
                     justifyContent: 'center',
                     alignItems: 'center',
                     backgroundColor: '#006600',
               }}>
      <Text style={{
                     fontSize: 15,
                     textAlign: 'center',
                     margin: 20,
                     color: 'white',
             }}>Giúp việc nhà sáng đến tối về làm việc 8 - 9 tiếng tại nhà Khách hàng (không ở lại) vào những ngày và khung giờ Khách hàng đăng ký. Công việc gồm: Dọn nhà, nấu ăn, rửa bát, chăm sóc trẻ và một số yêu cầu khác nếu phát sinh.</Text>
      <Image style={{
                      width: 360, height: 240,
                      marginBottom:20,
                      borderTopLeftRadius:10,
                      borderTopRightRadius:10,
                      borderBottomLeftRadius:10,
                      borderBottomRightRadius:10
      }}
             source={require('JupViec/src/assets/dungdk_intro.png')}>
      </Image>
      <Button
        title ='ĐẶT NGAY'
        onPress={() => {
            navigation.navigate('XacNhanDKScreen');
        }}
      />     
    </View>
  );
};

export default DVDungDinhKyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 15,
    color: 'white'
  }
})

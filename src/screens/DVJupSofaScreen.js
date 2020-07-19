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

function DVJupSofaScreen (props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cùng JupSofa mang tới dịch vụ vệ sinh tiện ích cho ngôi nhà của bạn. Có các lựa chọn gồm: vệ sinh nệm, vệ sinh sofa, vệ sinh thảm và vệ sinh rèm cửa</Text>
      <Image style={styles.image}
        source={require('JupViec/src/assets/banggia.png')}>
      </Image>
      <Button
        title ='ĐẶT NGAY'
        onPress={() => {
            navigation.navigate('XacNhanSFScreen');
        }}
      />     
    </View>
  );
};

export default DVJupSofaScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006600'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: 'white',
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
  },
  image :{
    width: 360, height: 400,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  }
})

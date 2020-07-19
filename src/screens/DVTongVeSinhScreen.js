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

function DVTongVeSinhScreen (props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dịch vụ Tổng vệ sinh và khử khuẩn nhà cửa bằng Clorin được sử dụng trong y tế, giúp môi trường sống và làm việc sạch sẽ, thông thoáng, đẩy lùi dịch bệnh COVID-19 ở mức tối đa. Dịch vụ độc quyền tại JupViec.vn chỉ từ 529k/gói</Text>
      <Image style={styles.image}
        source={require('JupViec/src/assets/tongvs_intro.png')}>
      </Image>
      <Button
        title ='ĐẶT NGAY'
        onPress={() => {
            navigation.navigate('KhaoSatScreen');
        }}
      />     
    </View>
  );
};

export default DVTongVeSinhScreen;

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
    width: 360, height: 240,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  }
})

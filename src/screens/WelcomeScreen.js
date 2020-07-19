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

function Welcome(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.welcometextStyle}>Chào mừng bạn đến với dịch vụ JupViec!</Text>
      <Image style={styles.imageStyle}
        source={require('JupViec/src/assets/jv.png')}>
      </Image>
      <Button
        title ='ĐĂNG NHẬP'
        onPress={() => {
            //navigation.navigate('DichVu');
            navigation.navigate('Login');
            //navigation.navigate('DungLe');
        }}
      />     
    </View>
    );
};

export default Welcome

/*-------------------- THIẾT KẾ ---------------------*/
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006600',
  },

  headerContainer:{
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: '#006600'
  },

  bannerContainer:{
    paddingTop: 5,
    backgroundColor: '#6699CC'
  },

  inputContainer:{
    backgroundColor: '#006600',
    color: '#006600',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginBottom: 5,
  },

  bodyContainer:{
    backgroundColor: '#EEEEEE',
  },

  sectionContainer:{
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },

  listItemContainer:{
    flexDirection: 'row',
  },

  itemContainer: {
    width: 150,
    marginRight: 30,
    marginTop: 10,
  },
/**/
  imageStyle:{
    width: 350, height: 210,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  imagebannerStyle:{
    width: 340, height: 100,
    marginBottom:5,
    marginLeft: 10,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  itemImage: {
    width: 70,
    height: 70,
    marginLeft: 50,
  },

  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 30,

  },

  welcometextStyle:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: 'yellow',
  }
})
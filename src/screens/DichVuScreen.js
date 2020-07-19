import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage,
  FlatList
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const ServiceItem = ({image, name}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} >
      {name}
    </Text>
  </View>
);

const BottomItem = ({icon, namebottom}) => (
  <View style={styles.bottomContainer}>
    <Icon name={icon} size={25} color="#484848"/>
    <Text style={styles.bottomText}>{namebottom}</Text>
  </View>
);


function DichVuScreen (props) {
  const { navigation } = props
  
  return (
    <View>      
      <View style={styles.headerContainer}>
        <View style={styles.containerStyle}>
          <Image style={styles.imageStyle}
            source={require('JupViec/user-circle-icon-vector.jpg')}>
          </Image>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.welcometextStyle}>Chào ĐCĐ. Chúc bạn một ngày vui vẻ!</Text>
        </View>
      </View>

      <View style={styles.bannerContainer}>
        <Image style={styles.imagebannerStyle}
          source={require('JupViec/src/assets/banner.png')}>
        </Image>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.listItemContainer}>
          <View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVDungLeScreen');
              }}>
              <ServiceItem
                name="Giúp việc dùng lẻ"
                image={require('JupViec/src/assets/dungle.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVJupSofaScreen');
              }}>
              <ServiceItem
                name="Giúp việc giặt Sofa"
                image={require('JupViec/src/assets/giatsofa.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVDungDinhKyScreen');
              }}>
              <ServiceItem
                name="Giúp việc định kỳ"
                image={require('JupViec/src/assets/dungdk.png')}
                
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('DVTongVeSinhScreen');
              }}>
              <ServiceItem
                name="Tổng vệ sinh"
                image={require('JupViec/src/assets/tongvs.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer1}>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate('TaiKhoan');
            navigation.navigate('HoSo');
          }}>
          <View style = {{flexDirection: 'row', marginTop: 7, marginLeft: 30}}>
            <Icon name="user" size={25} color="#006666"/>
            <Text style={{marginLeft: 5,
              fontSize: 15,
              fontWeight: 'bold',
              color: '#006666',
              marginVertical: 7,
              marginRight: 18,}}>Tài khoản</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate('DangNhap');
            navigation.navigate('Login');
          }}>
          <View style = {{flexDirection: 'row', marginTop: 7, marginLeft: 20}}>
            <Icon name="bell" size={25} color="#770000"/>
            <Text style={{marginLeft: 5,
              fontSize: 15,
              fontWeight: 'bold',
              color: '#770000',
              marginVertical: 7,
              marginRight: 18,}}>Thông báo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LichSu');
          }}>
          <View style = {{flexDirection: 'row', marginTop: 7, marginLeft: 20}}>
            <Icon name="history" size={25} color="blue"/>
           <Text style={{marginLeft: 5,
              fontSize: 15,
              fontWeight: 'bold',
              color: 'blue',
              marginVertical: 7,
              marginRight: 18,}}>Lịch sử</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DichVuScreen;

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: '#006600'
  },

  bannerContainer:{
    paddingTop: 15,
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

  bottomContainer:{
    flexDirection: 'row',
    paddingTop: 2,
    backgroundColor: '#99FF99',
    marginTop:0,
    height: 100,
  },

  bottomContainer1:{
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: '#EEEEEE',
  },

  bottomText:{
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginRight: 18,
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
    width: 30, height: 30,
    marginBottom:5,
    marginLeft: 10,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  imagebannerStyle:{
    width: 370, height: 150,
    marginBottom:15,
    marginLeft: 20,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  itemImage: {
    width: 90,
    height: 90,
    marginLeft: 70,
    marginTop:5,
  },

  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#004400',
    marginVertical: 7,
    marginLeft: 70,
    textAlign:'center',

  },

  welcometextStyle:{
    color:'#FFFFFF',
    fontSize:12,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  },

  

})



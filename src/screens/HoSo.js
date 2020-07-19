import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ScrollView,
  FlatList
} from 'react-native';

//man hinh thong tin khach hang
const HoSo = ({navigation}) => {
  const [colorid, setColorID] = useState('');
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [listdata, setlistdata] = useState([]);
  const changeColor = (id, val, val1) => {
    setColorID(id);
    setText(val);
    setText1(val1);
  };
  async function deleteData() {
    AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate('Login');
  }
  useEffect(() => {
    console.disableYellowBox = true;
    AsyncStorage.getItem('SoDienThoai').then((value) => {
      loadData(value);
    });
  });
  async function loadData(value) {
    firebaseApp
      .database()
      .ref('KhachHang/'+value)
      .on('value', (snapshot) => {
        setlistdata(snapshot.val());
      });
  }
  const capnhat = async () => {
    await AsyncStorage.setItem('Email', listdata.Email);
    await AsyncStorage.setItem('DiaChi', listdata.DiaChi);
    navigation.navigate('CapNhatTaiKhoan');
  }
  const logout= async () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có muốn thoát ứng dụng ?',
      [
        {text: 'Hủy', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Đồng ý', onPress: () => navigation.navigate('WelcomeScreen')},
      ],
      { cancelable: false }
    );
  }
  const chooseFile= async () => {
    Alert.alert(
            'Lỗi',
            'Chức năng này đang xây dựng. Vui lòng thử lại sau!',
        );
  }
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds

function checkTime(i)
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

return (
  <View>
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.banner}
          source={require('JupViec/src/assets/jupviec.png')}
        />
      </View>
      <View style={{flexDirection: 'row', marginLeft: '32%'}}>
        <Image
          style={styles.avatar}
          source={require('JupViec/src/assets/Kaito.jpg')}
        />
      </View>
      <View style={{marginLeft: 214, marginTop: 35}}>
        <TouchableOpacity onPress={() => chooseFile()}>
          <Icon name="camera" style={({fontSize: 15})}/>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={[styles.txtfooter, {marginTop: 10}]}>Họ Tên</Text>
        <View style={styles.action}>
          <Icon
            name="user"
            style={({fontSize: 24}, {color: '#239237', marginTop: 2})}
          />
          <Text style={styles.txtInput}>
            //{listdata.HoTen}
              {hours}:{checkTime(min)}:{checkTime(sec)}
          </Text>
        </View>
        <Text style={[styles.txtfooter, {marginTop: 10}]}>Địa chỉ</Text>
        <View style={styles.action}>
          <Icon
            name="home"
            style={({fontSize: 24}, {color: '#239237', marginTop: 2})}
          />
          <Text style={styles.txtInput}>
            {listdata.DiaChi}
          </Text>
        </View>
        <Text style={[styles.txtfooter, {marginTop: 10}]}>Số điện thoại</Text>
        <View style={styles.action}>
          <Icon
            name="phone"
            style={({fontSize: 24}, {color: '#239237', marginTop: 2})}
          />
          <Text style={styles.txtInput}>
            {listdata.SoDienThoai}
          </Text>
        </View>
        <Text style={[styles.txtfooter, {marginTop: 10}]}>Email</Text>
        <View style={styles.action}>
          <Icon
            name="envelope"
            style={({fontSize: 24}, {color: '#239237', marginTop: 2})}
          />
          <Text style={styles.txtInput}>
            {listdata.Email}
          </Text>
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row', width: 420, height: 90}}>
          <TouchableOpacity
            style={styles.UpdateStyle}
            activeOpacity={0.5}
            onPress={() => capnhat()}>
            <Image
              source={require('JupViec/src/assets/Change-icon.png')}
              style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}> Cập nhật thông tin </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.LogoutStyle}
            activeOpacity={0.5}
            onPress={() => logout()}>
            <Image
              source={require('JupViec/src/assets/Logout-icon.png')}
              style={styles.ImageIconStyle}
            />
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}> Đăng Xuất </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

export default HoSo;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#99CCFF',
    height: 130,
  },
  banner: {
    height: 160,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 30,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  txtfooter: {
    color: '#239237',
    fontSize: 18,
    marginLeft: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E7A4A4',
    paddingBottom: 5,
    marginLeft: 10,
  },
  txtInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontSize: 15,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  UpdateStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006600',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 200,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 25,
  },
  LogoutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#00CCCC',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 145,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 20,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 17,
  },
});

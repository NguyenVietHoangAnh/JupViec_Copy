import React, {useState}  from 'react';
import {
  AppRegistry,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Button, 
  TextInput, 
  Alert, FlatList , AsyncStorage } from 'react-native';

import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, gs} from 'JupViec/src/components/styles';


export default function Login({navigation}) {
  const [data, setdata] = useState({check_textInputChange: false});
  const [value, onChangeText] = useState('');
  const [check, setcheck] = useState({secureTextEntry: true});
  const [phonenumber1, setPhonenumber] = useState('');
  const [password1, setPassWord] = useState('');
  const changeHandlerUser = (valphone) => {
    if (valphone.length !== 0) {
      setPhonenumber(valphone);
      setdata({check_textInputChange: true});
    } else {
      setdata({check_textInputChange: false});
    }
  };
  const changeHandlerPassword = (valpass) => {
    setPassWord(valpass);
  };
  const login = async () => {
    console.disableYellowBox = true;
    firebaseApp
      .database()
      .ref('/KhachHang/' + phonenumber1)
      .once('value', (snapshot) => {
        const userObj = snapshot.val();
        if (userObj !== null) {
          if (userObj.MatKhau === password1) {
            AsyncStorage.setItem('isLoggedIn', '1');
            AsyncStorage.setItem('SoDienThoai', phonenumber1);
            //navigation.navigate('DichVuScreen');
            navigation.navigate('DichVu');
          } else {
            Alert.alert('Lỗi','Mật khẩu không đúng');
          }
        } else {
          Alert.alert('Lỗi','Tài khoản không tồn tại');
        }
      });
  };
  const secureTextEntry = () => {
    setcheck({secureTextEntry: !check.secureTextEntry});
  };

  //QUÊN MẬT KHẨU
  const goToForgotPassword = () => navigation.navigate('ForgotPassword')

  return(
    <View style={styles.container}>
      <View style={{flexDirection: 'row',}}>
        <Icon name="phone" size={25} color="orange"/>
        <TextInput
          placeholder='Nhập số điện thoại'
          keyboardType="numeric"
          style={styles.inputStyle}
          onChangeText={changeHandlerUser}>
        </TextInput>
        {data.check_textInputChange ? (
          <View animation="bounceIn">
            <Icon
              name="check-circle"
              style={[gs.icon, {color: colors.icon}]}
            />
          </View>
        ) : null}
      </View>
      <View style={{flexDirection: 'row',}}>
        <Icon name="key" size={25} color="orange"/>
        {check.secureTextEntry ? (
          <TextInput
            placeholder="Nhập mật khẩu"
            keyboardType="numeric"
            style={styles.inputStyle}
            onChangeText={changeHandlerPassword}
            secureTextEntry={true}
          />
          ) : (
          <TextInput
            placeholder="Nhập mật khẩu"
            style={styles.inputStyle}
            onChangeText={changeHandlerPassword}
          />
         )}
        <TouchableOpacity onPress={() => secureTextEntry()}>
          {check.secureTextEntry ? (
            <Icon
              name="eye-slash"
              style={[gs.icon, {color: colors.icon}]}
            />
          ) : (
            <Icon
              name="eye"
              style={[gs.icon, {color: colors.icon}]}
            />
          )}
        </TouchableOpacity>
      </View>
        
      <TouchableOpacity 
         style={styles.buttonContainer}
         onPress={() => login()}>
        <Text style={styles.btnText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.btnTextSignUp}>Chưa có tài khoản?   Đăng ký ngay</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> goToForgotPassword()}>
        <Text style={styles.btnTextForgotPass}>Quên mật khẩu?</Text>
      </TouchableOpacity>
    </View>
  )
}


/******************** THIẾT KẾ **********************/
const styles = StyleSheet.create({
	container: {
    backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 18,
    paddingLeft: 15,
    height: 40,
    width: 320,
  },
  btnText: {
    fontSize: 15,
    color: 'white'
  },
  btnTextSignUp: {
    fontSize: 16,
    color: '#fff',
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnTextForgotPass: {
    fontSize: 16,
    color: '#fff',
    marginTop: 30,
    textAlign: 'center'
  },
  error: {
    borderWidth: 2,
    borderColor: 'red'
  },
  buttonContainer: {
      alignItems: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
      padding: 10,
      margin: 20
  },
});


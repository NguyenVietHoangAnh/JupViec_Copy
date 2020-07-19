import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';
import {colors, gs} from 'JupViec/src/components/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function LoginScreen({navigation}) {
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
      .ref('/NhanVien/' + phonenumber1)
      .once('value', (snapshot) => {
        const userObj = snapshot.val();
        if (userObj !== null) {
          if (userObj.MatKhau === password1) {
            AsyncStorage.setItem('isLoggedIn', '1');
            AsyncStorage.setItem('SoDienThoai', phonenumber1);
            navigation.navigate('DichVuScreen');
          } else {
            Alert.alert('Mật khẩu không đúng');
          }
        } else {
          Alert.alert('Tài khoản không tồn tại');
        }
      });
  };
  const secureTextEntry = () => {
    setcheck({secureTextEntry: !check.secureTextEntry});
  };
  return (
    <View style={gs.loginContainer}>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Đăng Nhập Tài Khoản</Text>
      </View>
      <View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.txtfooter}>Số điện thoại</Text>
        <View style={styles.action}>
          <Icon
            name="mobile1"
            style={(gs.icon, {color: colors.icon, marginTop: 4})}
          />
          <TextInput
            placeholder="Số điện thoại"
            style={styles.txtInput}
            keyboardType="numeric"
            onChangeText={changeHandlerUser}
          />
          {data.check_textInputChange ? (
            <View animation="bounceIn">
              <Icon
                name="check-circle"
                style={[gs.icon, {color: colors.icon}]}
              />
            </View>
          ) : null}
        </View>
        <Text style={[styles.txtfooter, {marginTop: 35}]}>Mật Khẩu</Text>
        <View style={styles.action}>
          <Icon
            name="lock"
            style={(gs.icon, {color: colors.icon, marginTop: 4})}
          />
          {check.secureTextEntry ? (
            <TextInput
              placeholder="Mật Khẩu"
              style={styles.txtInput}
              onChangeText={changeHandlerPassword}
              secureTextEntry={true}
            />
          ) : (
            <TextInput
              placeholder="Mật Khẩu"
              style={styles.txtInput}
              onChangeText={changeHandlerPassword}
            />
          )}
          <TouchableOpacity onPress={() => secureTextEntry()}>
            {check.secureTextEntry ? (
              <Icon
                name="eye-off"
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
        <Text style={{color: '#009bd1', marginTop: 15}} />
        <View style={styles.button}>
          <TouchableOpacity onPress={() => login()}
          style={[styles.signin, styles.customTou]}>
            
              <Text style={[styles.txtSignin, {color: '#4dc2f8'}]}>
                Đăng Nhập
              </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.signin, styles.customTou]}>
            <Text style={[styles.txtSignin, {color: '#4dc2f8'}]}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  txtheader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  txtfooter: {
    color: colors.icon,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  txtInput: {
    flex: 1,
    paddingLeft: 10,
    color: colors.icon,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signin: {
    width: 370,
    height: 50,
    ...gs.center,
    borderRadius: 10,
  },
  txtSignin: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customTou: {
    borderColor: '#4dc2f8',
    borderWidth: 1,
    marginTop: 15,
    width: 370,
  },
});

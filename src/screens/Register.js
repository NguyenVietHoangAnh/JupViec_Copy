import React, {useState}  from 'react';
import {
  AppRegistry,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Button, 
  TextInput, 
  Alert, FlatList , AsyncStorage,ScrollView } from 'react-native';

import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, gs} from 'JupViec/src/components/styles';

export default function Register({navigation}) {
  const [phone, setphone] = useState('');
  const [hoten, sethoten] = useState('');
  const [data, setdata] = useState({check_textInputChange: false});
  const [matkhau, onChangeText] = useState('');
  const [nlmatkhau, onChangeText1] = useState('');
  const [check, setcheck] = useState({secureTextEntry: true});
  const [check1, setcheck1] = useState({secureTextEntry1: true});

  const changeHandlerUser = (valphone) => {
    if (valphone.length !== 0) {
      setphone(valphone);
      setdata({check_textInputChange: true});
    } else {
      setdata({check_textInputChange: false});
    }
  };

  const pushData = (valphone, valhoten, valmatkhau, valnlmatkhau) => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if ( valphone.length !== 0 && vnf_regex.test(valphone) == false)
    {
      Alert.alert('Lỗi','Số điện thoại không đúng định dạng.');
    }
    else {
      if (
      valphone === '' ||
      valhoten === '' ||
      valmatkhau === '' ||
      valnlmatkhau === ''
    ) {
      Alert.alert('Lỗi','Vui lòng nhập đầy đủ thông tin');
    } else {
      if (valmatkhau !== valnlmatkhau) {
        Alert.alert('Lỗi','Mật khẩu không trùng khớp');
      } else {
        firebaseApp
          .database()
          .ref('/KhachHang/' + valphone)
          .once('value', (snapshot) => {
            const userObj = snapshot.val();
            if (userObj === null) {
              firebaseApp
                .database()
                .ref('KhachHang/' + valphone)
                .set({
                  SoDienThoai: valphone,
                  HoTen: valhoten,
                  MatKhau: valmatkhau,
                  DiaChi: '',
                  Email:'',
                  DiemTB: 0,
                })
                .then(() => {
                  Alert.alert('Thông báo','Tài khoản đã được tạo thành công');
                  navigation.navigate('Login');
                })
                .catch(() => {
                  Alert.alert('Lỗi','Tạo tài khoản không thành công. Vui lòng liên hệ Hotline 1900 6082 để được hỗ trợ.');
                });
            } else {
              Alert.alert('Lỗi','Số điện thoại đã được sử dụng. Vui lòng đăng ký số khác hoặc liên hệ Hotline 1900 6082 để được hỗ trợ.');
            }
          });
        }
      }
    }
  };

  const textInputChange = (value) => {
    if (value.length !== 0) {
      setdata({check_textInputChange: true});
    } else {
      setdata({check_textInputChange: false});
    }
  };
  const secureTextEntry = () => {
    setcheck({secureTextEntry: !check.secureTextEntry});
  };
  const secureTextEntry1 = () => {
    setcheck1({secureTextEntry1: !check1.secureTextEntry1});
  };

  return(
    <View style={styles.container}>
      <Text style={styles.txtheader}>Đăng Ký Tài Khoản</Text>
      <View style={{flexDirection: 'row',}}>
        <Icon name="user" size={28} color="orange"/>
        <TextInput
          placeholder="Nhập họ tên"
          style={styles.inputStyle}
          value={hoten}
          onChangeText={(text) => sethoten(text)}>
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
        <Icon name="phone" size={25} color="orange"/>
        <TextInput
          placeholder="Số điện thoại"
          style={styles.inputStyle}
          keyboardType="numeric"
          value={phone}
          onChangeText={(text) => setphone(text)}>
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
              placeholder="Mật khẩu"
              style={styles.inputStyle}
              value={matkhau}
              onChangeText={(text) => onChangeText(text)}
              secureTextEntry={true}
            />
          ) : (
            <TextInput
              placeholder="Mật khẩu"
              style={styles.inputStyle}
              value={matkhau}
              onChangeText={(text) => onChangeText(text)}
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
      <View style={{flexDirection: 'row',}}>
        <Icon name="key" size={25} color="orange"/>
        {check1.secureTextEntry1 ? (
          <TextInput
            placeholder="Nhập lại mật khẩu"
            style={styles.inputStyle}
            value={nlmatkhau}
            onChangeText={(text) => onChangeText1(text)}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder="Nhập lại mật khẩu"
            style={styles.inputStyle}
            value={nlmatkhau}
            onChangeText={(text) => onChangeText1(text)}
          />
        )}

        <TouchableOpacity onPress={() => secureTextEntry1()}>
          {check1.secureTextEntry1 ? (
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
        onPress={() => pushData(phone, hoten, matkhau, nlmatkhau)}>
        <Text style={styles.btnText}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
        <Text style={styles.btnTextSignUp}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  txtheader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
    marginLeft:30,
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

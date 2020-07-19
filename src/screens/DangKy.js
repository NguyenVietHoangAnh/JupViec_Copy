import React from 'react'
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert, Image} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import {EMAIL, PASSWORD} from './Regexs';
import Icon from 'react-native-vector-icons/FontAwesome5'

class DangKy extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      emailValid: true,
      passwordValid: true
    }
  }

  validate(type, value){
    if(type == "email"){
      this.setState({email: value})
      if(value == '' ){
        this.setState({emailValid: true})
      } else {
        this.setState({emailValid: false})
      }
    } else if(type == "password"){
      this.setState({password: value})
      if(value == '' ){
        this.setState({passwordValid: true})
      } else {
        this.setState({passwordValid: false})
      }
    }
  }

  goLogin(){
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    navigation.navigate('DangNhap');
  }

  _register(){
    if(/*this.state.emailValid && this.state.passwordValid && */this.state.email != '' && this.state.password != ''){
      firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
          Alert.alert(
            'Đăng ký thành công',
            'Nhấn OK để tiếp tục',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.goLogin()},
            ],
            { cancelable: false }
          )
          this.setState({
            email: '',
            password: ''
          })
        })
        .catch(function(error){
          Alert.alert(
            'Lỗi',
            'Đăng ký không thành công. Vui lòng nhập email hợp lệ. Ví dụ: vidu@gmail.com',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false}
          )
        });
    } else {
      if(this.state.email == '' || this.state.password == ''){
        Alert.alert(
          'Lỗi',
          'Email và Password không được trống!',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )
      }
    }
  }

  render() {
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row',}}>
          <Icon name="envelope" size={25} color="orange"/>
          <TextInput
            style={[styles.inputStyle, !this.state.emailValid? styles.error:null]}
            placeholder='Nhập email'
            onChangeText={(email) => {this.validate("email", email)}}
            value={this.state.email}
           />
        </View>
        <View style={{flexDirection: 'row',}}>
          <Icon name="key" size={25} color="orange"/>
          <TextInput
             style={[styles.inputStyle, !this.state.passwordValid? styles.error:null]}
             placeholder='Nhập mật khẩu'
             secureTextEntry={true}
             keyboardType="numeric"
             onChangeText={(password) => {this.validate("password", password)}}
             value={this.state.password}
            />
        </View>
        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => {this._register()}}>
          <Text style={styles.btnText}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
          <Text style={styles.btnTextSignUp}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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

export default DangKy
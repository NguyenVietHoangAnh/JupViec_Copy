import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Alert} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import {EMAIL, PASSWORD} from './Regexs';

class ForgotPassword extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      email: '',
      emailValid: true,
    }
  }

  validate(type, value){
    if(type == "email"){
      this.setState({email: value})
      if(value == ''/* || EMAIL.test(value)*/){
        this.setState({emailValid: true})
      } else {
        this.setState({emailValid: false})
      }
    } 
  }

  goDangNhapScreen(){
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    navigation.navigate('DangNhap');
  }

  _forgot(){
    if(/*this.state.emailValid && this.state.passwordValid && */this.state.email != '' ){
        firebaseApp.auth().sendPasswordResetEmail(this.state.email)
        Alert.alert(
            'Gửi mật khẩu thành công',
            'Truy cập email và thực hiện đổi lại mật khẩu đăng nhập ',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.goDangNhapScreen()},
            ],
            { cancelable: false }
        );
    } else {
      if(this.state.email == '' ){
        Alert.alert(
          'Lỗi',
          'Vui lòng nhập email đã đăng ký!',
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
         <Text style={styles.text}> Quên mật khẩu ?
         </Text>
         <TextInput
           style={[styles.inputStyle, !this.state.emailValid? styles.error:null]}
           placeholder='Nhập email đã đăng ký'
           onChangeText={(email) => {this.validate("email", email)}}
           value={this.state.email}
          />
        <TouchableOpacity onPress={() => {this._forgot()}}>
          <Text style={styles.btnText}>Gửi mật khẩu qua email</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ForgotPassword

/******************** THIẾT KẾ **********************/
const styles = StyleSheet.create({
	container: {
    backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  text:{
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 18,
    paddingLeft: 15,
    height: 40
  },
  btnText: {
    backgroundColor: 'green',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
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
  }
});


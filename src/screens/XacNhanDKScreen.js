import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements'


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
  TextInput,
  Stack,
  Alert,
  AsyncStorage
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function checkTime(i)
{
      if (i < 10) {
          i = "0" + i;
      }
      return i;
 }

var today = new Date();
var day = today.getDate();
var mon = today.getMonth()+1;
var year = today.getFullYear();

var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds

var tgdat = checkTime(hours)+':'+checkTime(min)+':'+checkTime(sec);
var ngay = checkTime(day)+'/'+checkTime(mon)+'/'+year;

//var ngay = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

class XacNhanDKScreen extends React.Component {
  static navigationOptions = {header: null}

  constructor(props){
    super(props);
    this.state = {
      sonha: '',
      filePath: {},
      date: 0,
      thoigian:'',
      ghichu: '',
      ghichu: null,
      sotien: null,
      loaidv:'JV-Dùng định kỳ',
      trangthai:'Chưa xác nhận',

      quan: '',
      dist: '',
      dists: [],

      buoi: '',
      ca: '',
      dsca: [],

      sothang:'',
      lich:'',
      
      thoigiandat: tgdat,
      ngaydat: ngay,
      
    }

    database = firebaseApp.database();
    donhang = database.ref('DonHang/0983362357');
  }



  changeDist(item) {

        let dist = null;
        let dists;
        switch (item.value) {
            case 'Quận Tân Phú':
                dists = [
                    {label: 'Phường Tân Sơn Nhì', value: 'Phường Tân Sơn Nhì'},
                    {label: 'Phường Tây Thạnh', value: 'Phường Tây Thạnh'},
                    {label: 'Phường Sơn Kỳ', value: 'Phường Sơn Kỳ'},
                    {label: 'Phường Tân Quý', value: 'Phường Tân Quý'},
                    {label: 'Phường Tân Thành', value: 'Phường Tân Thành'},
                    {label: 'Phường Phú Thọ Hoà', value: 'Phường Phú Thọ Hoà'},
                    {label: 'Phường Phú Thạnh', value: 'Phường Phú Thạnh'},
                    {label: 'Phường Phú Trung', value: 'Phường Phú Trung'},
                    {label: 'Phường Hoà Thạnh', value: 'Phường Hoà Thạnh'},
                    {label: 'Phường Hiệp Tân', value: 'Phường Hiệp Tân'},
                    {label: 'Phường Tân Thới Hoà', value: 'Phường Tân Thới Hoà'},
                ];
                this.setState({
              quan: item.value
          });
            break;
            case 'Quận Phú Nhuận':
                dists = [
                    {label: 'Phường 01', value: 'Phường 01'},
                    {label: 'Phường 02', value: 'Phường 02'},
                    {label: 'Phường 03', value: 'Phường 03'},
                    {label: 'Phường 04', value: 'Phường 04'},
                    {label: 'Phường 05', value: 'Phường 05'},
                    {label: 'Phường 07', value: 'Phường 07'},
                    {label: 'Phường 08', value: 'Phường 08'},
                    {label: 'Phường 09', value: 'Phường 09'},
                    {label: 'Phường 10', value: 'Phường 10'},
                    {label: 'Phường 11', value: 'Phường 11'},
                    {label: 'Phường 12', value: 'Phường 12'},
                    {label: 'Phường 13', value: 'Phường 13'},
                    {label: 'Phường 14', value: 'Phường 14'},
                    {label: 'Phường 15', value: 'Phường 15'},
                    {label: 'Phường 17', value: 'Phường 17'},
                ];
                this.setState({
              quan: item.value
          });
            case 'Quận Gò Vấp':
                dists = [
                    {label: 'Phường 01', value: 'Phường 01'},
                    {label: 'Phường 03', value: 'Phường 03'},
                    {label: 'Phường 04', value: 'Phường 04'},
                    {label: 'Phường 05', value: 'Phường 05'},
                    {label: 'Phường 07', value: 'Phường 07'},
                    {label: 'Phường 08', value: 'Phường 08'},
                    {label: 'Phường 09', value: 'Phường 09'},
                    {label: 'Phường 10', value: 'Phường 10'},
                    {label: 'Phường 11', value: 'Phường 11'},
                    {label: 'Phường 12', value: 'Phường 12'},
                    {label: 'Phường 13', value: 'Phường 13'},
                    {label: 'Phường 14', value: 'Phường 14'},
                    {label: 'Phường 15', value: 'Phường 15'},
                    {label: 'Phường 16', value: 'Phường 16'},                    
                    {label: 'Phường 17', value: 'Phường 17'},
                ];
                this.setState({
              quan: item.value
          });
            break;
        }

        this.setState({
            dist,
            dists
        });
    }

  changeWard(item) {
    this.setState({
        dist: item.value
    });
  }

  changeBuoi(item) {

        let ca = null;
        let dsca;
        switch (item.value) {
            case 'Buổi sáng':
                dsca = [
                    //{label: '06:00 - 09:30', value: '06:00 - 09:30'},
                    {label: '08:00 - 11:30', value: '08:00 - 11:30'},
                ];
                this.setState({
                buoi: item.value
            });
            break;
            case 'Buổi chiều':
                dsca = [
                    //{label: '13:00 - 16:30', value: '13:00 - 16:30'},
                    {label: '15:00 - 18:30', value: '15:00 - 18:30'},
                ];
                this.setState({
                buoi: item.value
            });
            break;
            case 'Buổi tối':
                dsca = [
                    {label: '18:00 - 21:30', value: '18:00 - 21:30'},
                ];
                this.setState({
                buoi: item.value
            });
            break;
        }

        this.setState({
            ca,
            dsca
        });
    }

  changeTG(item) {
    this.setState({
        ca: item.value
    });
  }

  changeThang(item){
    //let sothang = null;
    //let sotien=null;
    switch (item.value) {
      case '1': this.setState({sotien: 1889000, sothang: item.value}); break;
      case '3': this.setState({sotien: 5367000, sothang: item.value}); break;
      case '6': this.setState({sotien: 9534000, sothang: item.value}); break;
    }
  }

  goDichVuScreen(){
    //const {navigate} = this.props.navigation;
    const { navigation } = this.props
    navigation.navigate('DichVu');
  }

  _submit(){
  	if(this.state.quan == '' || this.state.dist == '' || this.state.sonha == '' || this.state.sothang == '' || this.state.lich == '' || this.state.date =='' || this.state.buoi == '' || this.state.ca == ''){
  		Alert.alert(
          'Lỗi',
          'Phải nhập đầy đủ thông tin',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )

  	}
    // else if(this.state.buoi=='Buổi sáng' && new Date().getHours() >=7 || this.state.buoi=='Buổi chiều' && new Date().getHours() >=14 || this.state.buoi=='Buổi tối' && new Date().getHours() >=18)
    // {
    //   Alert.alert(
    //       'Thông báo',
    //       'Buổi mà bạn chọn thuộc về quá khứ hoặc đã bắt đầu vào ca làm việc này. Vui lòng chọn buổi khác!',
    //       [
    //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
    //       ],
    //       {cancelable: false}
    //     )
    // }
    else if(this.state.quan != '' && this.state.dist != '' && this.state.sonha != '' && this.state.sothang != '' && this.state.lich != '' && this.state.date !='' && this.state.buoi != '' && this.state.ca != ''){
  		donhang.push({
    		Quan:this.state.quan,
        Phuong:this.state.dist,
        SoNha:this.state.sonha,
        SoThang:this.state.sothang,
        LichLamViec:this.state.lich,
        Ngay:this.state.date,
        Buoi:this.state.buoi,
        ThoiGian:this.state.ca,
        GhiChu:this.state.ghichu,
        SoTien:this.state.sotien,
        LoaiDV:this.state.loaidv,
        TrangThai:this.state.trangthai,
        ThoiGianDat: this.state.thoigiandat,
        NgayDat:this.state.ngaydat,
  		}, ()=>Alert.alert(
            'Thành công',
            'Đơn hàng đã được tạo thành công. Nhân viên sẽ sớm liên hệ Quý khách. Cảm ơn Quý khách đã lựa chọn dịch vụ của JupViec!',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.goDichVuScreen()},
            ],
            { cancelable: false }
        ))
  	}
  	
  }

  render() {
    const { navigation } = this.props
    return(
      <View>
      <ScrollView>
        <View style={styles.bannerContainer}>
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:20}}>
          <Icon name="map-marker-alt" size={25} color="blue"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: 'blue',
            marginVertical: 7,
            marginLeft: 5,}}>ĐỊA ĐIỂM</Text>
          <Text style={styles.itemName}>(*)</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <DropDownPicker
            items={[
              {label: 'Quận Tân Phú', value: 'Quận Tân Phú'},
              {label: 'Quận Phú Nhuận', value: 'Quận Phú Nhuận'},
              {label: 'Quận Gò Vấp', value: 'Quận Gò Vấp'},
            ]}
            defaultNull
            placeholder="Chọn quận/huyện"
            containerStyle={{height: 40, width: 200}}
            style={{marginLeft: 10, backgroundColor: '#99CCFF'}}
            onChangeItem={item => this.changeDist(item)}
          />
          <DropDownPicker
            items={this.state.dists}
            defaultNull={this.state.dist === null}
            placeholder="Chọn phường/xã"
            containerStyle={{height: 40, width: 200}}
            style={{marginLeft: 10, backgroundColor: '#99CCFF'}}
            onChangeItem={item => this.changeWard(item)}
          />
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="home" size={25} color="green"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: 'green',
            marginVertical: 7,
            marginLeft: 5,}}>ĐỊA CHỈ NHÀ/CĂN HỘ</Text>
          <Text style={styles.itemName}>(*)</Text>
        </View>
        <View>
          <TextInput 
            style={styles.textInputDC}
            placeholder="Nhập số nhà/căn hộ và tên đường.VD: 78/89 Lê Trọng Tấn"
            onChangeText={(value) => this.setState({sonha:value})}/>
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="allergies" size={22} color="purple"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: 'purple',
            marginVertical: 7,
            marginLeft: 5,}}>SỐ THÁNG SỬ DỤNG</Text>
          <Text style={styles.itemName}>(*)</Text>
          <Text style = {{marginLeft:10, marginTop: 7,color: '#484848',fontStyle: 'italic',}}>
            (Không bao gồm ngày Lễ, Tết)
          </Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              {label: '1 tháng - Số tiền: 1.889.000đ/tháng (10 buổi - dùng thử) ', value: '1'},
              {label: '3 tháng - Số tiền: 1.789.000đ/tháng (27 buổi)', value: '3'},
              {label: '6 tháng - Số tiền: 1.589.000đ/tháng (53 buổi)', value: '6'},
            ]}
            defaultNull
            placeholder="Chọn số tháng sử dụng"
            containerStyle={{height: 40, width: 400}}
            style={{marginLeft: 10, backgroundColor: '#99CCFF'}}
            onChangeItem={item => this.changeThang(item)}
          />
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="calendar" size={22} color="#CC9900"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: '#CC9900',
            marginVertical: 7,
            marginLeft: 5,}}>LỊCH LÀM VIỆC HẰNG TUẦN</Text>
          <Text style={styles.itemName}>(*)</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <CheckBox
            title='T2 - T4 - T6'
            checked={!this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked, lich:'T2, T4, T6'})}
          />
          <CheckBox
            title='T3 - T5 - T7'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked, lich:'T3, T5, T7'})}
          />
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="calendar-check" size={22} color="brown"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: 'brown',
            marginVertical: 7,
            marginLeft: 5,}}>NGÀY BẮT ĐẦU LÀM VIỆC</Text>
          <Text style={styles.itemName}>(*)</Text>
        </View>
        <View>
          <DatePicker
            style={{width: 400, marginLeft: 10}}
            date={this.state.date}
            mode="date"
            placeholder="Chọn ngày nhân viên bắt đầu làm việc"
            format="DD/MM/YYYY"
            minDate={new Date().getDate()+1} //chỉ cho chọn ngày hôm sau trở đi.
            maxDate="31/12/2020"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(value) => {
            this.setState({date: value});
            }}
          />
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="clock" size={22} color="#FF3366"/>
          <Text style={{fontSize: 14,
            fontWeight: 'bold',
            color: '#FF3366',
            marginVertical: 7,
            marginLeft: 5,}}>THỜI GIAN LÀM VIỆC</Text>
          <Text style={styles.itemName}>(*)</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <DropDownPicker
            items={
              [
                {label: 'Sáng', value: 'Buổi sáng'},
                {label: 'Chiều', value: 'Buổi chiều'},
                {label: 'Tối', value: 'Buổi tối'},
              ]
            }
            defaultNull
            placeholder="Chọn buổi"
            containerStyle={{height: 40, width: 200}}
            style={{marginLeft: 10, backgroundColor: '#99CCFF'}}
            onChangeItem={item => this.changeBuoi(item)}
          />
          <DropDownPicker
            items={this.state.dsca}
            defaultNull={this.state.ca === null}
            placeholder="Chọn thời gian"
            containerStyle={{height: 40, width: 200}}
            style={{marginLeft: 10, backgroundColor: '#99CCFF'}}
            onChangeItem={item => this.changeTG(item)}
          />
        </View>
        
        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="edit" size={25} color="#484848"/>
          <Text style={styles.itemName}>GHI CHÚ</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInputGC}
            placeholder="Nhập ghi chú cho nhân viên (không bắt buộc)"
            onChangeText={(value) => this.setState({ghichu:value})}/>
        </View>

        <View style = {{flexDirection: 'row', marginLeft: 10, marginTop:5}}>
          <Icon name="percent" size={20} color="#484848"/>
          <Text style={styles.itemName}>MÃ KHUYẾN MÃI</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập mã khuyến mãi"
            onChangeText={(value) => this.setState({makm:value})}/>
        </View>

        <View style = {{flexDirection: 'row'}}>
          <Text style={styles.textPhiDC}>(Đã bao gồm thuế và phí dụng cụ)</Text>
        </View>
        <View style= {styles.sotien}>
          <Text style={styles.sotien}>Số tiền</Text>
          <Text style={styles.hienthisotien}>{this.state.sotien} đồng</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {this._submit()}}>
          <Text style={styles.buttonText}>XÁC NHẬN</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    )
  }
}
export default XacNhanDKScreen;


const styles = StyleSheet.create({
	bannerContainer:{
      paddingTop: 30,
      backgroundColor: '#6699CC'
    },

  itemNamebanner: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 7,
    marginLeft: 10,
    },

  itemName: {
    fontSize: 14,
    //fontWeight: 'bold',
    color: 'red',
    marginVertical: 7,
    marginLeft: 5,
    },
  textInputDC: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#99CCFF'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#99CCFF'
  },
  textInputGC: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#DDDDDD'
  },
  textPhiDC: {
    color: '#484848',
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 15,
  },
  sotien: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 10,
  },
  hienthisotien :{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 7,
    marginLeft: 213,
    textAlign: 'right'
  },
  buttonContainer: {
      alignItems: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
      padding: 10,
      margin: 20
  },
  buttonText: {
      fontSize: 15,
      color: 'white'
  },
 });



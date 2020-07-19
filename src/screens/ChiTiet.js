import {StackNavigator,} from 'react-navigation';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, gs} from 'JupViec/src/components/styles';

import React, {useState, useEffect}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  TextInput,
} from 'react-native';

const ChiTiet = ({navigation}) => {
  const [list, setList] = useState([]);
  const [sdt, setsdt] = useState('');
  const [ids, setids] = useState('');
  const [check1, setcheck1] = useState({checkclick: 0});

  useEffect(() => {
    console.disableYellowBox = true;
    AsyncStorage.getItem('SoDienThoai').then((sdT) => {
      if (sdT !== null) {
        setsdt(sdT);
        AsyncStorage.getItem('ID').then((id) => {
          if (id !== null) {
            setids(id);
            loadData(sdT, id);
          }
        });
      }
    });
  });
  async function loadData(valsdt, valid) {
    firebaseApp
      .database()
      .ref('DonHang/' + valsdt + '/' + valid)
      .once('value', (snapshot) => {
        setList(snapshot.val());
      });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={[styles.txtfooter]}>Loại dịch vụ</Text>
          <View style={styles.action}>
            <Icon
              name="bars"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.LoaiDV}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 8}]}>
            Địa chỉ làm việc
          </Text>
          <View style={styles.action}>
            <Icon
              name="address"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>
              {list.SoNha} {list.Phuong} {list.Quan}
            </Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 8}]}>
            Số điện thoại đặt hàng
          </Text>
          <View style={styles.action}>
            <Icon
              name="phone"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{sdt}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Giờ làm việc</Text>
          <View style={styles.action}>
            <Icon
              name="clockcircle"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.ThoiGian}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Ngày làm việc</Text>
          <View style={styles.action}>
            <Icon
              name="date"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.Ngay}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Lịch làm việc</Text>
          <View style={styles.action}>
            <Icon
              name="calendar"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.LichLamViec}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Số tháng</Text>
          <View style={styles.action}>
            <Icon
              name="add-to-list"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.SoThang}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Ghi chú</Text>
          <View style={styles.action}>
            <Icon
              name="sticky-note-o"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.GhiChu}</Text>
          </View>
          <Text style={[styles.txtfooter, {marginTop: 10}]}>Số tiền</Text>
          <View style={styles.action}>
            <Icon
              name="money"
              style={(gs.icon, {color: colors.icon, marginTop: 2})}
            />
            <Text style={styles.txtInput}>{list.SoTien} VNĐ</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#66CDAA',
    height: 100,
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
    color: colors.item,
    fontSize: 18,
    marginLeft: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E7A4A4',
    paddingBottom: 8,
    marginLeft: 10,
  },
  txtInput: {
    flex: 1,
    paddingLeft: 10,
    color: colors.item,
    marginTop: 5,
    fontSize: 18,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  UpdateStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#66CDAA',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 170,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 110,
  },
  LogoutStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#66CDAA',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 100,
    borderRadius: 5,
    marginTop: 40,
    marginLeft: 30,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: 'red',
    marginBottom: 4,
    marginRight: 20,
    fontSize: 18,
  },
  modal: {
    backgroundColor: '#A8F9E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#F9F5F5',
    width: '80%',
    borderRadius: 5,
  },
  modalHeader: {backgroundColor: '#ffffff'},
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    padding: 15,
    color: '#153FD8',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
  },
  modalBody: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  modalFooter: {backgroundColor: '#ffffff'},
  actions: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    color: '#ffffff',
  },
  container1: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default ChiTiet;

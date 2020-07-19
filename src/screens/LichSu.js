import React, {useEffect, useState} from 'react';
import {firebaseApp} from 'JupViec/src/components/FirebaseConfig';
// import firebase from 'react-native-firebase';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';

const LichSu = ({navigation}) => {
  const [list, setList] = useState([]);
  const [key, setkey] = useState([]);
  const [SDT, setSDT] = useState('');

 useEffect(() => {
    loadData();
  }, []);

  async function loadData(value) {
    AsyncStorage.getItem('SoDienThoai').then((value) => {
    firebaseApp
      .database()
      .ref('/DonHang/'+value)
      .on('value', (snapshot) => {
        var returnArray = [];
        var id = [];
        var dt = [];
        snapshot.forEach(function (snap) {
          var dtt = snapshot.key;
          var item = snap.val();
          var k = snap.key;
          returnArray.push(item);
          id.push(k);
          dt.push(dtt);
        });
        setList(returnArray);
        setkey(id);
        setSDT(dt);
        return returnArray;
      });
    })
  }

  const onJobDetails = async (index) => {
    await AsyncStorage.setItem('ID', key[index]);
    await AsyncStorage.setItem('SoDienThoai', SDT[index]);
    navigation.navigate('ChiTiet');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView>
        <FlatList
          key={list.length}
          data={list}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onJobDetails(index)}
              style={styles.item}>
              <View style={styles.title}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text>{item.ThoiGian}</Text>
                      <Text
                        style={{
                          marginTop: 10,
                          color: 'blue',
                          fontWeight: 'bold',
                        }}>
                        {item.Ngay}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={styles.title2}>{item.SoTien} đồng</Text>
                      <Text style={styles.title2}>{item.LoaiDV}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.SoDienThoai}
        />
      </ScrollView>
    </View>
  );
};
export default LichSu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#99CC33',
    width: 400,
    height: 80,
    marginVertical: 5,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    backgroundColor: '#99CC33',
    width: 300,
    height: 70,
    marginVertical: 5,
    marginTop: 8,
    marginLeft: 10,
    flexDirection: 'column',
  },
  title2: {
    fontSize: 17,
    backgroundColor: '#99CC33',
    width: 300,
    height: 27,
    marginLeft: 20,
  },
  thongtin: {
    fontSize: 20,
    width: '34%',
    borderRightWidth: 0.5,
    flexDirection: 'column',
    marginTop: 5,
  },
  congviec: {
    flexDirection: 'row',
    fontSize: 20,
    height: '18%',
  },
  button: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'blue',
    borderWidth: 0.5,
    borderRadius: 8,
  },
});


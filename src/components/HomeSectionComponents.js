import React from 'react';

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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const ServiceItem = ({image, name}) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.itemName} >
      {name}
    </Text>
  </View>
);

const HomeSectionComponent = () => {
  return (
  	<View style={styles.listItemContainer}>
      <View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Dùng lẻ');
          }}>
          <ServiceItem
            name="Giúp việc dùng lẻ"
            image={require('./src/assets/dungle.png')}
          />
        </TouchableOpacity>
        <ServiceItem
          name="Giúp việc giặt Sofa"
          image={require('./src/assets/giatsofa.png')}
        />
      </View>
      <View>
        <ServiceItem
          name="Giúp việc định kỳ"
          image={require('./src/assets/dungdk.png')}
          
        />
        <ServiceItem
          name="Tổng vệ sinh"
          image={require('./src/assets/tongvs.png')}
        />
      </View>
    </View>
  );
};

export default HomeSectionComponent;

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    paddingTop: 5,
    backgroundColor: '#006600'
  },

  bannerContainer:{
    paddingTop: 5,
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

  sectionContainer:{
    backgroundColor: '#fff',
    paddingHorizontal: 12,
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
    width: 340, height: 100,
    marginBottom:5,
    marginLeft: 10,
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },

  itemImage: {
    width: 70,
    height: 70,
    marginLeft: 50,
  },

  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#484848',
    marginVertical: 7,
    marginLeft: 30,

  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },

  welcometextStyle:{
    color:'#FFFFFF',
    fontSize:12,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center'
  }
})
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('window');
import {ImagePath} from '../../utils/ImagePath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderScreen from '../../components/Loader/Loader';
import axios from 'axios';

const AstroloserList = props => {
  const [data, setData] = useState('');

  const [astro, setAstero] = useState([]);

  const [loader, setLoader] = useState(false);

  const DATA = [
    {
      key: 1,
      Rating: ImagePath.STARRATING,
      photo: ImagePath.PROFILEIMGE,
      phone: ImagePath.PHONEICON,
      chat: ImagePath.CHATICON,
      ok: ImagePath.OKINCON,
      text: '4.33/5',
      name: 'Astro Sanjay B.',
      time1: 'Rs 51/min ',
      time2: ' Rs 8/min',
      language: 'Hindi,English',
      status: 'online',
    },
  ];

  const Astrologerlist = async () => {
    setLoader(true);
    axios({
      method: 'POST',
      url: 'http://devil.astrochats.online/api/api/astrolist1',
      headers: {'Content-Type ': 'application/json'},
    }).then(function (response) {
      console.log(response.data);
      setAstero(response.data.records);
      setLoader(false);
    });
  };

  useEffect(() => {
    Astrologerlist();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('TodayDeal', {email: astro})}>
      <View style={styles.item}>
        <View style={styles.astroData}>
          <View style={styles.profile}>
            <View style={styles.photo}>
              <ImageBackground
                source={ImagePath.CIRCLEBG}
                style={{
                  height: height * 0.09,
                  width: width * 0.16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="contain">
                <Image
                  source={{uri: item.image}}
                  style={{height: 30, width: 30}}
                  resizeMode="cover"
                />
              </ImageBackground>
            </View>
            <View style={styles.rating}>
              <Image
                source={ImagePath.STARRATING}
                resizeMode="contain"
                style={{height: 20, width: 20}}
              />
              <Text style={{fontSize: height / 68, color: COLOR.LINE_COLOR}}>
                {item.avg_rating}/5
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={{fontSize: height / 50, color: COLOR.BLACK}}>
              {item.owner_name}
            </Text>
            <Text style={{fontSize: height / 65, color: COLOR.BLACK}}>
              {item.time1} ₹ {item.charge}/min
            </Text>
            <Text style={{fontSize: height / 65, color: COLOR.RED}}>
              Free {item.free_minut} min Extra
            </Text>
            <Text style={{fontSize: height / 65, color: COLOR.BLACK}}>
              {item.language}
            </Text>
          </View>
          <View style={styles.chat}>
            <Image
              source={ImagePath.PHONEICON}
              style={{height: 20, width: 20}}
            />
            <ImageBackground
              source={ImagePath.BGCALLASTRO}
              style={{
                height: 35,
                width: 56,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              resizeMode="contain">
              <Text style={{fontSize: height / 68, color: COLOR.WHITE}}>
                {item.current_status}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.offer}>
            <Image
              source={ImagePath.CHATICON}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
            <Image
              source={ImagePath.OKINCON}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.newChat}>
          <Image
            source={ImagePath.BESTOFFERGRP}
            style={{height: 50, width: 50}}
            resizeMode="contain"
          />
          <Image
            source={ImagePath.NEWOFFERGRP}
            style={{height: 45, width: 45}}
            resizeMode="contain"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE}}>
      <View style={styles.header}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.BACKBTN}
              resizeMode="contain"
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tital}>
          <Text style={{fontSize: height / 43, color: COLOR.BLACK}}>
            Astrologer List
          </Text>
        </View>
        <View style={styles.more}>
          <TouchableOpacity style={styles.wallat}>
            <Image
              source={ImagePath.MY_WALLET}
              resizeMode="contain"
              style={{height: 18, width: 18}}
            />
            <Text style={{color: COLOR.BLACK, fontSize: 11}}> Rs 100.00</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchV}>
        <View style={styles.innerSearc}>
          <TouchableOpacity>
            <Image
              source={ImagePath.SEARCHICON}
              resizeMode="contain"
              style={{height: 28, width: 28}}
            />
          </TouchableOpacity>
          <View>
            <TextInput
              placeholder="Search Astrologer by name..."
              placeholderTextColor={COLOR.LINE_COLOR}
              style={styles.texInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.child}>
        <View style={styles.flatMain}>
          {loader ? (
            <LoaderScreen />
          ) : (
            <FlatList
              data={astro}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default AstroloserList;
const styles = StyleSheet.create({
  header: {
    height: height * 0.082,
    width: width * 1,
    backgroundColor: COLOR.ORANGE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    height: height * 0.08,
    width: width * 0.2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tital: {
    height: height * 0.08,
    width: width * 0.35,
    // backgroundColor: 'green',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  more: {
    height: height * 0.08,
    width: width * 0.45,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wallat: {
    height: height * 0.04,
    width: width * 0.25,
    borderWidth: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  //   ============================ Serarch
  searchV: {
    height: height * 0.08,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  innerSearc: {
    height: height * 0.055,
    width: width * 0.9,
    backgroundColor: '#ffe4e1',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 15,
  },
  texInput: {
    height: height * 0.05,
    width: width * 0.65,
    backgroundColor: '#ffe4e1',
    justifyContent: 'center',
  },

  child: {
    height: height * 0.84,
    width: width * 1,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  flatMain: {
    height: height * 0.8,
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
  },
  item: {
    height: height * 0.17,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    elevation: 4,
    // margin: 5,
    // borderWidth: 1,
    backgroundColor: COLOR.WHITE,
    //  borderColor: 'rgb(245,245,245)',
  },
  //   ===============================Asro flat list data
  astroData: {
    height: height * 0.17,
    width: width * 0.9,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile: {
    height: height * 0.16,
    width: width * 0.19,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: height * 0.13,
    width: width * 0.35,
    // borderWidth: 1,
    justifyContent: 'space-around',
  },
  chat: {
    height: height * 0.1,
    width: width * 0.18,
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offer: {
    height: height * 0.08,
    width: width * 0.16,
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newChat: {
    height: height * 0.16,
    width: width * 0.89,
    // borderWidth: 1,
    position: 'absolute',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  // photo: {
  //   height: height * 0.11,
  //   width: width * 0.16,
  //   borderWidth: 1,
  //   backgroundColor: 'white',
  //   // borderRadius: 100,
  //   marginVertical: 13,
  //   borderColor: COLOR.ORANGE,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  rating: {
    height: height * 0.03,
    width: width * 0.19,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: height * 0.014,
  },
});

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  SafeAreaView,
  FlatList,
  PermissionsAndroid,
} from 'react-native';


import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('window');
import {ImagePath} from '../../utils/ImagePath';
import Swiper from 'react-native-swiper';
import {FONTS} from '../../utils/FontFamily';
import WalletHeader from '../../components/Header/WalletHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {HOMEBANNER} from '../../restAPI/APIconfig';

import LoaderScreen from '../../components/Loader/Loader';

const Home = props => {
  const [banners, setBanners] = useState([]);
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@bannners', banners);
  const [loader, setLoader] = useState(false);

  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  //========================= Banner funtion ==============================

  // function renderBanner(item) {
  //   // console.log(item.banner_img)
  //   return (
  //     <TouchableOpacity style={styles.banners} key={item.id}>
  //       {loader ? (
  //         <LoaderScreen />
  //       ) : (
  //         <Image
  //           source={{uri: item.url_s}}
  //           style={{
  //             height: height * 0.2,
  //             width: width * 0.3,
  //             // borderRadius: 8,
  //           }}
  //           resizeMode="stretch"
  //         />
  //       )}
  //     </TouchableOpacity>
  //   );
  // }
  // ========================= Api banners ===================
  const getBanners = async () => {
    setLoader(true);
    axios({
      method: 'get',
      // url: 'http://devil.astrochats.online/user/get_banner.php',
      url: '  https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s',
    }).then(function (response) {
      // console.log(response.data);
      // setBanners(response.data.data);

      console.log(response.data.photos.photo);
      setBanners(response.data.photos.photo);
      setLoader(false);
    });
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAF2'}}>
      <WalletHeader
        // backIcon={true}
        // onBackPress={() => props.navigation.goBack()}
        HeaderTitle={true}
        Title=" Moblie Gallery"
        Drawer={true}
        onDrawerPress={() => props.navigation.openDrawer()}
        // rightIcon={true}
        // RightIconTwo={true}
        // RightIconTwoPress={() => props.navigation.navigate('WalletBalance')}
        // RightIconPress={() => props.navigation.navigate('Notification')}
        CustomColor={COLOR.WHITE}
        CustomTextColor={COLOR.BLACK}
      />
      <ScrollView>
        {visible ? (
          <Swiper loop={false} index={selectedIndex}>
            {banners.map((item, index) => (
              <View
                key={item.id}
                style={{
                  flex: 1,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#333',
                  // marginTop:height*0.15
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(false);
                  }}
                  style={{
                    height: 25,
                    width: 60,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    borderRadius: 10,
                    margin: 8,
                  }}>
                  <Text style={{color: 'white'}}> Close</Text>
                </TouchableOpacity>
                <Image
                  source={{uri: item.url_s}}
                  style={{
                    // borderRadius: 8,
                    // flex: 1,
                    height: '50%',
                    width: '100%',
                    marginTop: height * 0.15,
                  }}
                  resizeMode="stretch"
                />
              </View>
            ))}
          </Swiper>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {banners.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                  setSelectedIndex(index);
                }}
                key={item.id}
                style={{
                  margin: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.url_s}}
                  style={{
                    height: height * 0.2,
                    width: width * 0.32,
                    // borderRadius: 8,
                    // flex: 1,
                    // height: 100,
                    // width: 200,
                  }}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    width: width * 1,
    backgroundColor: 'white',
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
  // Flat list
  swiperF: {
    height: height * 0.8,
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor: 'green',
  },
  banners: {
    height: height * 0.2,
    width: width * 0.3,
    // flexWrap: 'wrap',
    alignSelf: 'center',
    // borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    margin: 1,
  },
});


import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
import {COLOR} from '../../utils/Colors';
import WalletHeader from '../../components/Header/WalletHeader';
import axios from 'axios';
import {HOMEBANNER} from '../../restAPI/APIconfig';

const {height, width} = Dimensions.get('screen');

const Read = props => {
  const [select, setSelect] = useState('Deposit');

  // ====================================================== Festive screen Start here ========================================

  const data = [
    {
      key: 1,
      img: ImagePath.ASTRO_Login,
      tital: 'August 2022-Vrat aur Tyohaar',
    },
    {
      key: 2,
      img: ImagePath.ASTRO_Login,
      tital: 'August 2022-Vrat aur Tyohaar',
    },
    {
      key: 3,
      img: ImagePath.ASTRO_Login,
      tital: 'August 2022-Vrat aur Tyohaar',
    },
  ];

  function renderBanner(item) {
    // console.log(item.banner_img)
    return (
      <View style={styles.banners} key={item.id}>
        <View style={styles.logoImg}>
          <Image
            // source={{uri: item.sub_cat_img}
            source={item.img}
            style={{height: 150, width: 315}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.festivetital}>
          <Text style={{color: COLOR.BLACK}}>{item.tital}</Text>
        </View>
      </View>
    );
  }

  const data1 = [
    {
      key: 1,
      img: ImagePath.APP_ICONE,
      festival: 'Haryali Teez',
    },
    {
      key: 2,
      img: ImagePath.APP_ICONE,
      festival: 'Kawar Yatra',
    },
    {
      key: 3,
      img: ImagePath.APP_ICONE,
      festival: 'Guru Purnima',
    },
    {
      key: 4,
      img: ImagePath.APP_ICONE,
      festival: 'Guru Purnima',
    },
    {
      key: 5,
      img: ImagePath.APP_ICONE,
      festival: 'Guru Purnima',
    },
    {
      key: 6,
      img: ImagePath.APP_ICONE,
      festival: 'Guru Purnima',
    },
  ];

  function renderdetails(item) {
    return (
      <View style={styles.DetailsV} key={item.id}>
        <Text style={{fontSize: height / 40, color: COLOR.BLACK}}>
          {item.festival}
        </Text>
        <Image
          // source={{uri: item.sub_cat_img}
          source={item.img}
          style={{height: 60, width: 60}}
          resizeMode="stretch"
        />
      </View>
    );
  }

  // ======================================================  Love Content Start here ========================================
  const LoveData = [
    {
      key: 1,
      img: ImagePath.KUNDALIBG,
      tital:
        'strong affection for another arising out of kinship or personal ties',
    },
    {
      key: 2,
      img: ImagePath.KUNDALIBG,
      tital:
        'strong affection for another arising out of kinship or personal ties',
    },
    {
      key: 3,
      img: ImagePath.KUNDALIBG,
      tital:
        'strong affection for another arising out of kinship or personal ties',
    },
  ];

  function renderLoveBanner(item) {
    // console.log(item.banner_img)
    return (
      <View style={styles.banners} key={item.id}>
        <View style={styles.logoImg}>
          <Image
            // source={{uri: item.sub_cat_img}
            source={item.img}
            style={{height: 150, width: 315}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.festivetital}>
          <Text style={{color: COLOR.BLACK}}>{item.tital}</Text>
        </View>
      </View>
    );
  }

  const LoveData1 = [
    {
      key: 1,
      img: ImagePath.APP_ICONE,
      festival: 'Haryali Teez',
    },
    {
      key: 2,
      img: ImagePath.CARD1,
      festival: 'Kawar Yatra',
    },
    {
      key: 3,
      img: ImagePath.CARD1,
      festival: 'Guru Purnima',
    },
    {
      key: 4,
      img: ImagePath.CARD1,
      festival: 'Guru Purnima',
    },
    {
      key: 5,
      img: ImagePath.CARD1,
      festival: 'Guru Purnima',
    },
    {
      key: 6,
      img: ImagePath.CARD1,
      festival: 'Guru Purnima',
    },
  ];

  function renderLoveContent(item) {
    return (
      <View style={styles.DetailsV} key={item.id}>
        <Text style={{fontSize: height / 40, color: COLOR.BLACK}}>
          {item.festival}
        </Text>
        <Image
          // source={{uri: item.sub_cat_img}
          source={item.img}
          style={{height: 60, width: 60}}
          resizeMode="stretch"
        />
      </View>
    );
  }

  // ====================================================== Festive screen End here ========================================

  const renderBtn = () => {
    return (
      <View style={styles.btnView}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelect('Deposit');
            }}
            style={styles.btStyle}>
            <Text
              style={{
                color: select === 'Deposit' ? '#FFFFFF' : '#F54B20',
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsRegular,
                textDecorationLine: select === 'Deposit' ? 'underline' : 'none',
              }}>
              Festive
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelect('Withdraw')}
            style={styles.btStyle}>
            <Text
              style={{
                color: select === 'Withdraw' ? '#FFFFFF' : '#F54B20',
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsRegular,
                textDecorationLine:
                  select === 'Withdraw' ? 'underline' : 'none',
              }}>
              Love
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelect('Swap')}
            style={styles.btStyle}>
            <Text
              style={{
                color: select === 'Swap' ? '#FFFFFF' : '#F54B20',
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsRegular,
                textDecorationLine: select === 'Swap' ? 'underline' : 'none',
              }}>
              Marriage
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelect('snap')}
            style={styles.btStyle}>
            <Text
              style={{
                color: select === 'snap' ? '#FFFFFF' : '#F54B20',
                fontSize: height / 60,
                fontFamily: FONTS.PoppinsRegular,
                textDecorationLine: select === 'snap' ? 'underline' : 'none',
              }}>
              Life
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderList = () => {
    return (
      <View style={styles.listParent}>
        {select === 'Deposit' ? (
          <View style={styles.mainContainer}>
            <View style={styles.swiperF}>
              <SwiperFlatList
                autoplay={false}
                // autoplayDelay={5}
                // autoplayLoop
                index={0}
                // showPagination
                data={data}
                renderItem={({item}) => renderBanner(item)}
              />
            </View>

            <View style={styles.innerdata}>
              <FlatList
                autoplay={false}
                index={0}
                data={data1}
                renderItem={({item}) => renderdetails(item)}
              />
            </View>
          </View>
        ) : select === 'Withdraw' ? (
          <View style={styles.mainContainer}>
            <View style={styles.swiperF}>
              <SwiperFlatList
                autoplay={false}
                // autoplayDelay={5}
                // autoplayLoop
                index={0}
                // showPagination
                data={LoveData}
                renderItem={({item}) => renderLoveBanner(item)}
              />
            </View>

            <View style={styles.innerdata}>
              <FlatList
                autoplay={false}
                index={0}
                data={data1}
                renderItem={({item}) => renderdetails(item)}
              />
            </View>
          </View>
        ) : select === 'snap' ? (
          <View style={styles.mainContainer}>
            <View style={styles.swiperF}>
              <SwiperFlatList
                autoplay={false}
                // autoplayDelay={5}
                // autoplayLoop
                index={0}
                // showPagination
                data={data}
                renderItem={({item}) => renderBanner(item)}
              />
            </View>

            <View style={styles.innerdata}>
              <FlatList
                autoplay={false}
                index={0}
                data={LoveData1}
                renderItem={({item}) => renderLoveContent(item)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.mainContainer}>
            <View style={styles.swiperF}>
              <SwiperFlatList
                autoplay={false}
                // autoplayDelay={5}
                // autoplayLoop
                index={0}
                // showPagination
                data={data}
                renderItem={({item}) => renderBanner(item)}
              />
            </View>

            <View style={styles.innerdata}>
              <FlatList
                autoplay={false}
                index={0}
                data={data1}
                renderItem={({item}) => renderdetails(item)}
              />
            </View>
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      {renderBtn()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderList()}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Read;
const styles = StyleSheet.create({
  btnView: {
    height: height * 0.08,
    width: width * 1,
    backgroundColor: '#F5A020',
    // alignSelf: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  btStyle: {
    // height: height * 0.04,
    // width: width * 0.2,
    flex: 0,
    padding: 10,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    // marginLeft: height * 0.022,
  },
  listParent: {
    height: height,
    width: width * 0.93,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  mainContainer: {
    height: height * 0.72,
    width: width * 0.9,
    // backgroundColor: 'green',
    alignSelf: 'center',
  },
  //============================banners
  swiperF: {
    height: height * 0.27,
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor: 'green',
    marginTop: height * 0.02,
  },
  banners: {
    height: height * 0.26,
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    // borderRadius: 8,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(245,245,245)',
    // margin: 4,
    elevation: 1,
  },
  logoImg: {
    height: height * 0.21,
    width: width * 0.88,
    alignSelf: 'center',
    // backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  festivetital: {
    height: height * 0.05,
    width: width * 0.88,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  // ================================ flatList ====================
  DetailsV: {
    height: height * 0.13,
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor: 'skyblue',
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

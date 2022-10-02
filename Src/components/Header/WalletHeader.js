import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {FONTS} from '../../utils/FontFamily';
import {COLOR} from '../../utils/Colors';
const {height, width} = Dimensions.get('screen');

const WalletHeader = props => {
  const {
    backIcon,
    onBackPress,
    AuthLogo,
    AUTHLOGO,
    Title,
    HeaderTitle,
    rightIcon,
    Drawer,
    onDrawerPress,
    RightIconPress,
    RightIconTwo,
    Profile,
    Faq,
    notification,
    RightIconTwoPress,
    CustomColor,
    CustomTextColor,
  } = props;

  return (
    <View
      style={{
        backgroundColor: CustomColor,
        height: height * 0.075,
        width: width * 1,
      }}>
      <View
        resizeMode="stretch"
        source={ImagePath.BACKHEADER}
        style={{
          flexDirection: 'row',
          height: height * 0.2,
          width: width * 1,
        }}>
        {backIcon ? (
          <View
            style={{
              // backgroundColor: "green",
              justifyContent: 'center',
              alignItems: 'flex-end',
              height: height * 0.08,
              width: width * 0.13,
            }}>
            <TouchableOpacity
              onPress={onBackPress}
              style={{
                // backgroundColor: "green",
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.15,
              }}>
              <Image
                source={ImagePath.BACK_ICON}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        ) : Drawer ? (
          <View
            style={{
              height: height * 0.13,
              flexDirection: 'row',
            }}>
            <View
              style={{
                // backgroundColor: "green",
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.13,
              }}>
              <TouchableOpacity onPress={onDrawerPress}>
                <Image
                  source={ImagePath.DRAWER_ICON}
                  resizeMode="contain"
                  style={{height: height * 0.025, width: width * 0.1}}
                />
              </TouchableOpacity>
            </View>

            {/**<View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: height * 0.08,
                width: width * 0.15,
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  height: height * 0.038,
                  width: width * 0.09,
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <TouchableOpacity>
                  <Image
                    source={ImagePath.BEL}
                    resizeMode="contain"
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        ) : null}

        {HeaderTitle ? (
          <View
            style={{
              // backgroundColor: "red",
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              height: height * 0.08,
              width: width * 0.45,
            }}>
            <View
              style={{
                // backgroundColor: "blue",
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.08,
                width: width * 0.45,
              }}>
              <Text
                style={{
                  fontFamily: FONTS.PoppinsBold,
                  color: CustomTextColor,
                  fontSize: height / 45,
                }}>
                {Title}
              </Text>
            </View>
          </View>
        ) : null}
        {rightIcon ? (
          <View
            style={{
              // backgroundColor: "red",
              height: height * 0.08,
              width: width * 0.1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={RightIconPress}>
              <View
                style={{
                  height: height * 0.04,
                  width: width * 0.09,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5,
                }}>
                <Image
                  source={ImagePath.BELL}
                  resizeMode="contain"
                  style={{height: 22, width: 22}}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
        {RightIconTwo ? (
          <TouchableOpacity
            onPress={RightIconTwoPress}
            style={{
              height: height * 0.035,
              width: width * 0.25,
              borderWidth: 1,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 12,
              marginTop: height * 0.022,
            }}>
            <Image
              source={ImagePath.MY_WALLET}
              resizeMode="contain"
              style={{height: 18, width: 18}}
            />
            <Text style={{color: COLOR.BLACK, fontSize: 11}}> Rs 100.00</Text>
          </TouchableOpacity>
        ) : Faq ? (
          <View
            style={{
              // backgroundColor: "yellow",
              height: height * 0.08,
              width: width * 0.13,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={RightIconTwoPress}>
              <Image
                source={ImagePath.FAQ}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        ) : Profile ? (
          <View
            style={{
              // backgroundColor: "yellow",
              height: height * 0.08,
              width: width * 0.13,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity onPress={RightIconTwoPress}>
              <Image
                source={ImagePath.FAQ}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default WalletHeader;

const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  useWindowDimensions,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import {font} from '../../utils/font';
import {images} from '../../assets/images';
import LogoutModal from '../LogoutModal';
import {useSelector} from 'react-redux';
import {getUserData} from '../../redux/reducers/authReducer';

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  onNext?: any;
  setIsLogoutVisible?: any;
}

const CustomMenu: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  modalBackgroundColor,
  onNext,
  setIsLogoutVisible,
}) => {
  const windowWidth = useWindowDimensions().width;
  const [logoutModal, setLogoutModal] = useState(false);

  const userLogin = useSelector(getUserData);

  console.log('user', userLogin);

  const navigation: any = useNavigation();

  const menuData = [
    {title: 'High Discounts'},
    {
      title: 'Card Discounts',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('DiscountsScreen');
        }, 500);
      },
    },
    {
      title: 'Send a gift',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('SendGiftScreen');
        }, 500);
      },
    },
    {
      title: 'Request a book',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('BookRequestScreen');
        }, 500);
      },
    },
    {
      title: 'About',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('About');
        }, 500);
      },
    },
    {
      title: 'Terms of Use',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('TermsAndCondirtions');
        }, 500);
      },
    },
    {
      title: 'Privacy Policy',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('PrivacyPolicy');
        }, 500);
      },
    },
    {
      title: 'Help & Support',
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate('HelpAndSupportScreen');
        }, 500);
      },
    },
  ];
  return (
    <>
      <Modal
        style={{
          flex: 1,
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: modalBackgroundColor,
        }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        deviceWidth={windowWidth}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="transparent"
        customBackdrop={
          <Pressable
            style={{height: '100%', width: '100%'}}
            onPress={() => setModalVisible?.(false)}></Pressable>
        }>
      
    
        <View style={styles.container}>
          <View style={{gap: verticalScale(25), alignItems: 'center', flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);

                setTimeout(() => {
                  navigation.navigate(userLogin ? 'ProfileScreen' : 'Login');
                }, 500);
              }}
              activeOpacity={0.5}
              style={{
                width: '60%',
                alignItems: 'center',
                height: verticalScale(25),
              }}>
              <CustomText
                text={userLogin ? 'Pofile' : 'Sign Up / Login'}
                color={colors.primary}
                size={14}
              />
            </TouchableOpacity>

            {menuData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={item.onPress}
                  activeOpacity={0.5}
                  style={{
                    width: '60%',
                    alignItems: 'center',
                    height: verticalScale(25),
                  }}>
                  <CustomText
                    text={item?.title}
                    color={colors.primary}
                    size={14}
                  />
                </TouchableOpacity>
              );
            })}
            {
              userLogin&&(
                <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setTimeout(() => {
                    setIsLogoutVisible(true);
                  }, 1000);
                }}
                activeOpacity={0.5}
                style={{
                  width: '60%',
                  alignItems: 'center',
                  height: verticalScale(25),
                }}>
                <CustomText text={'Logout'} color={colors.primary} size={14} />
              </TouchableOpacity>

              )
            }

           
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setModalVisible(false)}
            style={styles.circle}>
            <Image
              style={{width: '50%', height: '50%'}}
              resizeMode="contain"
              source={images.close}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: '35%',
    backgroundColor: colors.dull_white,
    gap: verticalScale(15),
    paddingBottom: verticalScale(50),
  },
  circle: {
    width: scale(40),
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 999,
  },
});

export default CustomMenu;

import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appStyles} from '../../utils/AppStyles';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import CustomMenu from '../CustomMenu';
import LogoutModal from '../LogoutModal';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../redux/reducers/authReducer';
type Props = {};

const CustomHeader = ({}: Props) => {
  const navigation: any = useNavigation();
  const [isMenuVisible, setIsMenuVisable] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const dispatch=useDispatch()
  return (
    <>
      <View
        style={{
          ...appStyles.rowjustify,
        }}>
        <View style={{...appStyles.row, gap: scale(10)}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsMenuVisable(true)}
            // onPress={() => navigation.navigate("Setting")}
            style={styles.box}>
            <Image
              style={{
                width: scale(25),
                height: scale(25),
              }}
              resizeMode="contain"
              source={images.drawer}
            />
          </TouchableOpacity>

          <Image
            style={{
              width: scale(88),
              height: scale(35),
            }}
            resizeMode="contain"
            source={images.logo}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={{...styles.box, alignItems: 'flex-end'}}>
          <Image
            style={{
              width: scale(20),
              height: scale(20),
            }}
            resizeMode="contain"
            source={images.bell}
          />
        </TouchableOpacity>
      </View>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setIsLogoutVisible={setIsLogoutVisible}
        setModalVisible={setIsMenuVisable}
      />
      <LogoutModal
        modalVisible={isLogoutVisible}
        setModalVisible={setIsLogoutVisible}
        onCancel={() => {
          setIsLogoutVisible(false);
        }}
        onLogout={() => {
          
          dispatch(setUserLogin(false))
          setIsLogoutVisible(false);
        }}
      />
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

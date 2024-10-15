import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Modal from 'react-native-modal';
import CustomText from '../CustomText';
import {Spacer} from '../Spacer';
import {colors} from '../../utils/colors';
import CustomButton from '../CustomButton';
import {scale, verticalScale} from 'react-native-size-matters';
import {images} from '../../assets/images';
import {font} from '../../utils/font';
import {windowWidth} from '../../utils/Dimensions';

const CustomAlertModal = ({
  modalVisible,
  setModalVisible,
  onPress,
  icon,
  title,
  des,
  buttonTitle,
}: any) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <Modal
      isVisible={modalVisible}
      deviceWidth={windowWidth}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="rgba(0,0,0,0.2)"
      style={{flex: 1}}>
      <View
        style={{
          width: '85%',
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: scale(20),
          paddingHorizontal: scale(20),
          paddingVertical: verticalScale(25),
          gap: verticalScale(20),
        }}>
        <Image
          style={{width: scale(75), height: scale(75)}}
          source={icon || images.check}
        />
        <View
          style={{
            gap: verticalScale(10),
            alignItems: 'center',
            paddingVertical: verticalScale(10),
          }}>
          <CustomText
            text={title || 'Email Sent'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            size={20}
          />
          <CustomText
            style={{textAlign: 'center'}}
            lineHeight={18}
            text={
              des ||
              'A reset password link has been sent to your email. Please follow the link to reset your password.'
            }
            color={colors.grey}
            size={14}
          />
        </View>

        <CustomButton text={buttonTitle || 'Great!'} onPress={onPress} />
      </View>
    </Modal>
  );
};

export default CustomAlertModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    // backgroundColor: colors.grey400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

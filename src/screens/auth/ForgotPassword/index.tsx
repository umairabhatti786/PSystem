import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import CustomAlertModal from '../../../components/CustomAlertModal';


const ForgotPasswordScreen = ({navigation}: any) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          gap: verticalScale(20),
        }}>
        <TopHeader title="Forgot Password" />

        <CustomText
          text={'Enter your email address so we send you a reset password link'}
          size={14}
        />
        <CustomInput placeholder="Email Address" />

        <View style={styles.socialBtnContainer}>
          <CustomButton
            onPress={() => setIsModal(true)}
            text="Reset Password"
            style={{marginTop: verticalScale(20)}}
          />
        </View>
      </ScreenLayout>
      <CustomAlertModal
        modalVisible={isModal}
        setModalVisible={setIsModal}
        onPress={() => {
          setIsModal(false);
          setTimeout(() => {
            navigation.goBack();
          }, 500);
        }}
      />
    </>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  line: {flex: 1, height: 1, backgroundColor: colors.dull_half_white},
  socialBtnContainer: {
    gap: verticalScale(17),
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
  orContainer: {
    gap: scale(20),
    alignSelf: 'center',
    marginTop: verticalScale(40),
  },
});

import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';

const ChangePasswordScreen = ({navigation}: any) => {
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(20),
      }}>
      <TopHeader title="Change Password" />
      <View style={{flex: 1, gap: verticalScale(20)}}>
        <CustomText
          text={'Enter your current password and create new password below.'}
          size={14}
        />
        <CustomInput placeholder="Current Password" rightSource={images.eye} />
        <CustomInput placeholder="New Password" rightSource={images.eye} />
        <CustomInput
          placeholder="Confirm New Password"
          rightSource={images.eye}
        />
      </View>

      <View style={styles.continueBtnContainer}>
        <CustomButton
          //   onPress={() => navigation.navigate('BottomTab')}

          text="Change Password"
          style={{marginTop: verticalScale(20)}}
        />
      </View>
    </ScreenLayout>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
});

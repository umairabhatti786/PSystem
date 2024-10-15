import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomCountryPicker from '../../../components/CustomCountryPicker';

const EditProfileScreen = ({navigation}: any) => {
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(20),
      }}>
      <TopHeader title="Edit Profile" />
      <View style={{flex: 1, gap: verticalScale(20)}}>
        <CustomText
          text={'You can edit your name and phone number below. You will need to enter your password to cnfirm.'}
          size={14}
        />
        <CustomInput placeholder="Name"  />
        <CustomCountryPicker placeholder="345 123 456 7" />
        <CustomInput
          placeholder="Password"
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

export default EditProfileScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
});

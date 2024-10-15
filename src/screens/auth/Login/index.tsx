import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import {images} from '../../../assets/images';
import {font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import {appStyles} from '../../../utils/AppStyles';
import SocialButton from '../../../components/SocialButton';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../../redux/reducers/authReducer';

const LoginScreen = ({navigation}:any) => {

  const dispatch=useDispatch()
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(20),
      }}>
      <TopHeader title="Login" />

      <CustomText
        text={'Enter your email address and password to login.'}
        size={14}
      />
      <CustomInput placeholder="Email Address" />
      <CustomInput placeholder="Password" rightSource={images.eye} />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.navigate("ForgotPasswordScreen")}
      
      >
          <CustomText
        fontWeight="600"
        fontFam={font.WorkSans_SemiBold}
        color={colors.primary}
        text={'Forgot password?'}
        size={14}
      />

      </TouchableOpacity>
    
      <CustomButton 
      onPress={()=>{
        dispatch(setUserLogin(true))
        navigation.navigate("BottomTab")
        

      }}
      text="Login" style={{marginTop: verticalScale(20)}} />
      <View style={{...appStyles.row, gap: scale(4)}}>
        <CustomText text={'Don’t have an account?'} size={14} />
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.navigate("SignupScreen")}
        >
        <CustomText
          color={colors.primary}
          textDecorationLine="underline"
          text={'Sign Up'}
          size={14}
        />

        </TouchableOpacity>
        
      </View>
      <View
        style={{
          ...appStyles.row,
          ...styles.orContainer,
        }}>
        <View style={styles.line} />
        <CustomText text={'OR'} color={colors.grey} size={12} />
        <View style={styles.line} />
      </View>

      <View style={styles.socialBtnContainer}>
        <SocialButton icon={images.google} text="Continue with Google" />
        <SocialButton icon={images.facebook} text="Continue with facebook" />
        <SocialButton icon={images.apple} text="Continue with Apple ID" />
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;

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

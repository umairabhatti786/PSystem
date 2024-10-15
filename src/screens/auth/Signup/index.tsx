import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import {appStyles} from '../../../utils/AppStyles';
import SocialButton from '../../../components/SocialButton';

const SignupScreen = ({navigation}: any) => {

  const [isAgree,setIsAgree]=useState(true)
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(20),
      }}>
      <TopHeader title="Sign Up" />

      <CustomText
        text={'Enter the following details to create an account'}
        size={14}
      />
      <CustomInput placeholder="Email Address" />
      <CustomInput placeholder="Password" rightSource={images.eye} />
      <CustomInput placeholder="Confirm Password" rightSource={images.eye} />
      <View>
        <View style={{flexDirection: 'row', gap: scale(10),marginTop:verticalScale(20)}}>
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>setIsAgree(!isAgree)}
          >
            <ImageBackground
              style={{
                width: scale(17),
                height: scale(17),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="contain"
              source={images.check_box}>
                {
                  isAgree&&(
                    <Image
                    style={{width: scale(8), height: scale(8), marginLeft: 2}}
                    resizeMode="contain"
                    source={images.tick}
                  />

                  )
                }
           
            </ImageBackground>
          </TouchableOpacity>
          <View>
            <CustomText
              text={'By selecting this, you agree to the Readings'}
              size={14}
            />

            <View style={{...appStyles.row, gap: scale(4)}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('TermsAndCondirtions')}>
                <CustomText
                  color={colors.primary}
                  textDecorationLine="underline"
                  text={'Terms of service'}
                  size={14}
                />
              </TouchableOpacity>
              <CustomText text={'and'} size={14} />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                <CustomText
                  color={colors.primary}
                  textDecorationLine="underline"
                  text={'privacy policy'}
                  size={14}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <CustomButton text="Sign Up"  />
      <View style={{...appStyles.row, gap: scale(4)}}>
        <CustomText text={'Already have an account?'} size={14} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login')}>
          <CustomText
            color={colors.primary}
            textDecorationLine="underline"
            text={'Login'}
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
        <SocialButton
        onPress={()=>navigation.navigate("PersonalInfoScreen")}
         icon={images.google} text="Continue with Google" />
        <SocialButton icon={images.facebook} text="Continue with facebook" />
        <SocialButton icon={images.apple} text="Continue with Apple ID" />
      </View>
    </ScreenLayout>
  );
};

export default SignupScreen;

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
  },
});

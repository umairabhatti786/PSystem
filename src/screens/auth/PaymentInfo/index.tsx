import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
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
import DropDown from '../../../components/DropDown';
import {CountryData} from '../../../utils/Data';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../../../redux/reducers/authReducer';

const PaymentInfoScreen = ({navigation}: any) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const dispatch=useDispatch()
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
      }}>

<View
        style={{
          paddingBottom: verticalScale(10),
        }}>
      <TopHeader title="Payment Info" />
      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: colors.dull_white, flex: 1}}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          gap: verticalScale(20),
          paddingTop: verticalScale(10),
        }}>

      <CustomText
        text={'Add your optional payment method to save for future purchases.'}
        size={14}
      />
      <CustomInput
        placeholder="Card Nuumber"
        rightSource={images.visa}
        rightSourceSize={30}
      />
      <CustomInput placeholder="Card Holder Name" />
      <View style={appStyles.rowjustify}>
        <CustomInput width={'47%'} textAlign="center" placeholder="07 / 27" />
        <CustomInput width={'47%'} placeholder="CVC" />
      </View>
      <CustomInput placeholder="Address" />

      <View style={appStyles.rowjustify}>
        <CustomInput width={'47%'} placeholder="City" />
        <CustomInput width={'47%'} placeholder="State/Province" />
      </View>

      <DropDown
        placeholder={'Country'}
        // dropWidth={'100%'}
        label="Download"
        setValue={setSelectedCountry}
        value={selectedCountry}
        onSelect={(it: any) => {
          setSelectedCountry(it?.value);
        }}
        data={CountryData.map((item, _index) => {
          return {
            id: item?.id,
            label: item?.label,
            value: item?.value,
          };
        })}
      />

      <CustomInput placeholder="ZIP Code" />

      <View
        style={styles.continueBtnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
          <CustomText
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            color={colors.primary}
            text={'Skip'}
            size={14}
          />
        </TouchableOpacity>

        <CustomButton 
                  onPress={() =>
                    {
                      dispatch(setUserLogin(true))
                      navigation.navigate('BottomTab')

                    }
                     }

        text="Continue" style={{marginTop: verticalScale(20)}} />
      </View>
      </ScrollView>

    </ScreenLayout>
  );
};

export default PaymentInfoScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
 
});

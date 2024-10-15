import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
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
const AddPaymentScreen = ({navigation}: any) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedBank, setSelectedBank] = useState(-1);
  return (
    <ScreenLayout>
      <View
        style={{
          paddingBottom: verticalScale(10),
          paddingHorizontal: scale(20),
        }}>
        <TopHeader title="Payment Info" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.dull_white,
          flex: 1,
          paddingTop: verticalScale(10),
        }}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          gap: verticalScale(20),
          paddingBottom: verticalScale(30),
        }}>
        <View
          style={{
            paddingHorizontal: scale(20),
            gap: verticalScale(20),
          }}>
          <CustomText
            text={
              'Do you own a Credit or Debit Card from the banks listed below?'
            }
            size={14}
          />
        </View>

        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: scale(20)}}
            contentContainerStyle={{
              gap: scale(10),
              paddingRight: scale(40),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setSelectedBank(index)}
                  style={{
                    // marginRight: scale(20),
                    backgroundColor: colors.white,
                    borderRadius: scale(10),
                    height: verticalScale(62),
                    width: scale(72),
                    paddingHorizontal: scale(20),
                    borderWidth: selectedBank == index ? 1 : -1,
                    borderColor:
                      selectedBank == index ? colors.black : 'transparent',

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: scale(32), height: scale(32)}}
                    source={images.meezan_bank}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: scale(20),
            gap: verticalScale(20),
          }}>
          <CustomInput
            placeholder="Card Nuumber"
            rightSource={images.visa}
            rightSourceSize={30}
          />
          <View style={{gap: verticalScale(10)}}>
            <View style={appStyles.rowjustify}>
              <CustomText text={'Discount'} size={14} />

              <CustomText text={'25%'} color={colors.green} size={14} />
            </View>

            <View style={{flexDirection: 'row', gap: scale(5)}}>
              <CustomText
                text={'.'}
                color={colors.red}
                fontWeight="600"
                style={{marginTop: verticalScale(-7)}}
                fontFam={font.WorkSans_SemiBold}
                size={20}
              />

              <CustomText
                text={
                  'Card discounts are applicable on book purchases  only & will not be applied on non-book items.'
                }
                color={colors.red}
                size={12}
              />
            </View>

            <View style={{flexDirection: 'row', gap: scale(5)}}>
              <CustomText
                text={'.'}
                color={colors.red}
                fontWeight="600"
                style={{marginTop: verticalScale(-7)}}
                fontFam={font.WorkSans_SemiBold}
                size={18}
              />

              <CustomText
                text={'The discount can be redeemed once per day.'}
                color={colors.red}
                size={12}
              />
            </View>
          </View>

          <CustomInput placeholder="Card Holder Name" />
          <View style={appStyles.rowjustify}>
            <CustomInput
              width={'47%'}
              textAlign="center"
              placeholder="07 / 27"
            />
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

          <CustomButton
            onPress={() => navigation.navigate('BottomTab')}
            text="Continue"
            style={{marginTop: verticalScale(20)}}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};
export default AddPaymentScreen;
const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
});

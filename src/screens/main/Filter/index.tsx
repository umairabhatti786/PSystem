import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
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
import CustomCountryPicker from '../../../components/CustomCountryPicker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {windowWidth} from '../../../utils/Dimensions';

const FilterScreen = ({navigation}: any) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
   
      <ScreenLayout>
        <View
         style={{
          paddingHorizontal:scale(20),
          paddingBottom: verticalScale(10),
        }}
        >
        <TopHeader title="Filters" />


        </View>

            <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: colors.dull_white, flex: 1}}
      contentContainerStyle={{
        backgroundColor: colors.dull_white,
        gap: verticalScale(20),
        flex: 1,
      }}>
        <View
          style={{
            paddingHorizontal: scale(20),
            gap: verticalScale(20),
            flex: 1,
            paddingTop:verticalScale(10)
          }}>
      
          <CustomInput placeholder="keyword" />
          <CustomInput placeholder="Title" />
          <CustomInput placeholder="Author" />
          <CustomInput placeholder="ISBN" />
          <DropDown
            placeholder={'Category'}
            // dropWidth={'100%'}
            label="Download"
            setValue={setSelectedCategory}
            value={selectedCategory}
            onSelect={(it: any) => {
              setSelectedCategory(it?.value);
            }}
            data={CountryData.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.label,
                value: item?.value,
              };
            })}
          />

          <View style={appStyles.rowjustify}>
            <CustomInput width={'47%'} placeholder="Publisher" />
            <DropDown
              placeholder={'Publication Year'}
              mainWidth={windowWidth - scale(200)}
              dropWidth={windowWidth - scale(200)}
              label="Download"
              setValue={setSelectedCategory}
              value={selectedCategory}
              onSelect={(it: any) => {
                setSelectedCategory(it?.value);
              }}
              data={CountryData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <DropDown
              placeholder={'language'}
              mainWidth={windowWidth - scale(200)}
              dropWidth={windowWidth - scale(200)}
              label="Download"
              setValue={setSelectedCategory}
              value={selectedCategory}
              onSelect={(it: any) => {
                setSelectedCategory(it?.value);
              }}
              data={CountryData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />

            <DropDown
              placeholder={'Formats'}
              mainWidth={windowWidth - scale(200)}
              dropWidth={windowWidth - scale(200)}
              label="Download"
              setValue={setSelectedCategory}
              value={selectedCategory}
              onSelect={(it: any) => {
                setSelectedCategory(it?.value);
              }}
              data={CountryData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <CustomInput width={'47%'} placeholder="Price Min" />
            <CustomInput width={'47%'} placeholder="Price Max" />
          </View>
        </View>

        <View style={styles.continueBtnContainer}>
          <CustomButton onPress={() => navigation.goBack()} text="Apply" />
        </View>
            </ScrollView>

      </ScreenLayout>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    paddingBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
});

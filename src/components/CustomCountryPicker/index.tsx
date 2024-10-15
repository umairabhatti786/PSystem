import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {images} from '../../assets/images';
import {windowWidth} from '../../utils/Dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import { font } from '../../utils/font';

const CustomCountryPicker = ({
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  height,
  placeholder,
  onChangeText,
  value,
  editable
}: any) => {
  const [countryCode, setCountryCode] = useState('PK'); // Default country code
  const [country, setCountry] = useState<any>("92");
  const [withFlag, setWithFlag] = useState(true);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCountry(country?.callingCode[0]);
  };

  // console.log('countryCode',typeof country?.callingCode[0]);
  return (
    <View
      style={{
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: scale(15),
        height: verticalScale(height || 39),
        alignItems: 'center',
        borderColor: borderColor || '#E4E6EB',
        borderWidth: borderWidth,
        borderRadius: borderRadius || scale(10),
        backgroundColor: backgroundColor || colors.white,
      }}>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag={withFlag}
        // withCountryNameButton={withCountryNameButton}
        withCallingCode
        withEmoji
        onSelect={onSelect}
        // renderDropdownImage={() => (

        // )}
        containerButtonStyle={styles.countryPicker}
      />

      <Image
        source={images.down_arrow} // Add your dropdown icon here
        style={styles.dropdownIcon}
      />

      <CustomText
        text={"+"+country}
        // color={colors.bl}
        style={{marginLeft: scale(5)}}
        size={14}
      />

<TextInput
          value={value}
          editable={editable}
          style={{
            fontSize:  14,
            width:"70%",
            alignItems: 'center',
            justifyContent: 'center',
            textAlign:"left",
            paddingLeft:scale(5),
            marginTop:verticalScale(1),
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: font.WorkSans_Regular,
            fontWeight: "500",
            color:colors.black,
            
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
       
          onChangeText={onChangeText}
   
          autoCapitalize="none"
        />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    backgroundColor: colors.white,
  },
  countryPicker: {
    alignItems: 'center',
    width: scale(30),
    // width:windowWidth/1.1,
  },
  dropdownIcon: {
    width: scale(18),
    height: scale(18),
    marginLeft: scale(4),
  },
  countryInfo: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CustomCountryPicker;

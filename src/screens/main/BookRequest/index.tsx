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
import CustomCountryPicker from '../../../components/CustomCountryPicker';
import CustomAlertModal from '../../../components/CustomAlertModal';

const BookRequestScreen = ({navigation}: any) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isSuccessModal,setIsSuccessModal]=useState(false)
  return (
    <>

<ScreenLayout>
      <View
        style={{
          paddingHorizontal: scale(20),
          paddingBottom: verticalScale(10),
        }}>
        <TopHeader title="Request a Book" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.dull_white,
          // gap: verticalScale(20),
          flex: 1,
          paddingHorizontal: scale(20),
          paddingTop: verticalScale(10),
        }}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          gap: verticalScale(20),
        }}>
        <CustomText
          text={
            'Enter the following details about the book you want to request.'
          }
          size={14}
        />
        <CustomInput placeholder="Book Title" rightSourceSize={30} />
        <CustomInput placeholder="Author Name" />

        <CustomInput placeholder="Your Name" />
        <CustomInput placeholder="Email" />
        <CustomCountryPicker placeholder="345 123 456 7" />
        <CustomInput
          height={150}
          textAlignVertical={"top"}

          placeholder="Additional Info"
        />

        <View style={styles.continueBtnContainer}>
          <CustomButton
              onPress={() => setIsSuccessModal(true)}

            text="Send Request"
            style={{marginTop: verticalScale(10)}}
          />
        </View>
      </ScrollView>
    </ScreenLayout>

<CustomAlertModal
        buttonTitle={'Back to Home'}
        modalVisible={isSuccessModal}
        icon={images.congrat}
        title={'Request Received'}
        des={
          "We have received your request for the book. We will find it as soon as possible and notify you as it’s available"
        }
        setModalVisible={setIsSuccessModal}
        onPress={() => {
          setIsSuccessModal(false);
          setTimeout(() => {
            navigation.goBack();
          }, 500);
        }}
      />
    </>
   
  );
};

export default BookRequestScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
});

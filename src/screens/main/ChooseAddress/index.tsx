import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import {images} from '../../../assets/images';
import {font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import {appStyles} from '../../../utils/AppStyles';
import AddressCard from '../../../components/AddressCard';
import PaymentCard from '../../../components/PaymentCard';
const ChooseAddressScreen = ({navigation}: any) => {
  return (
    <ScreenLayout>
      <View
        style={{
          paddingHorizontal: scale(20),
          paddingBottom: verticalScale(10),
        }}>
        <TopHeader
          title="Choose Address"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.dull_white,
          flex: 1,
        }}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          gap: verticalScale(20),
        }}>
       
        <View style={{marginTop:verticalScale(10)}}>
          <CustomText
            text={'Saved Addresses'}
            color={colors.black}
            fontWeight="600"
            style={{
              marginLeft: scale(20),
            }}
            fontFam={font.WorkSans_SemiBold}
            size={18}
          />

          <FlatList
            data={[1, 2, 3]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: scale(20)}}
            contentContainerStyle={{
              paddingRight: scale(40),
              gap: scale(7),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <View>
                  <AddressCard />
                </View>
              );
            }}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('AddAddressScreen')}
            style={{
              ...appStyles.row,
              gap: scale(10),
              marginHorizontal: scale(20),
              marginTop: verticalScale(15),
            }}>
            <CustomText
              text={'Add New Address'}
              size={14}
              color={colors.primary}
              fontWeight="600"
              fontFam={font.WorkSans_SemiBold}
            />
            <Image
              source={images.plus}
              resizeMode="contain"
              style={{
                width: scale(15),
                height: scale(15),
              }}
            />
          </TouchableOpacity>
        </View>

       
      </ScrollView>
    </ScreenLayout>
  );
};

export default ChooseAddressScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: verticalScale(30),
  },
});

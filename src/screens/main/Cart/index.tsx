import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import {cartData, likedBookData} from '../../../utils/Data';
import LikedCard from '../Liked/LikedCard';
import CartContainer from './CartContainer';
import CustomText from '../../../components/CustomText';
import { appStyles } from '../../../utils/AppStyles';
import { font } from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';

const CartScreen = ({navigation}:any) => {
  const renderOrdersItem = ({item}: any) => {
    return <CartContainer data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={cartData}
          contentContainerStyle={{gap: verticalScale(15)}}
          renderItem={renderOrdersItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{gap:verticalScale(15),marginBottom:verticalScale(15)}}>
      <TouchableOpacity
        activeOpacity={0.5}
        // onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          ...styles.detailContainer,
        }}>
        <CustomText text={"Subtotal"} size={12} color={colors.grey} />

        <CustomText
          text={"Rs. 4,670"}
          size={14}
          fontWeight={"600"}
          fontFam={ font.WorkSans_SemiBold}
          color={colors.black}
        />
      </TouchableOpacity>
      <CustomButton
      text='Checkout'
      onPress={()=>navigation.navigate("CheckoutScreen")}
      />

      </View>

     
    </ScreenLayout>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  tabBox: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  tabContainer: {
    height: verticalScale(40),
    width: '100%',
    borderRadius: scale(10),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  detailContainer: {
    height: verticalScale(39),
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
});

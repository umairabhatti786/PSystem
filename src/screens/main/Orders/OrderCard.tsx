import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {appStyles} from '../../../utils/AppStyles';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {colors} from '../../../utils/colors';
import CustomButton from '../../../components/CustomButton';
interface data {
  orderId?: string;
  amount?: string;
  orderStatus?: any;
  orderDetail?: string;
  title?: string;
}
type Props = {
  data: data;
  onPress?:()=>void

};
const OrderCard = ({data,onPress}: Props) => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.dull_half_white,
        paddingBottom: verticalScale(8),
      }}>
      <View
        style={{
          ...appStyles.rowjustify,
        }}>
        <View style={{gap: scale(4)}}>
          <CustomText
            text={data?.orderId}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />
          {data.amount && (
            <CustomText
              text={`Amount: Rs. ${data.amount}`}
              color={colors.grey}
              size={12}
            />
          )}
          {data.title && (
            <CustomText text={data?.title} color={colors.grey} size={12} />
          )}
          <CustomText
            text={data?.orderStatus}
            color={colors.orange}
            size={12}
          />
        </View>
        {data?.orderDetail && (
          <CustomButton
            width={'30%'}
            onPress={onPress}
            text={data?.orderDetail}
            bgColor={colors.white}
            textColor={colors.primary}
          />
        )}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

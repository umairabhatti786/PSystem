import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {appStyles} from '../../../utils/AppStyles';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {images} from '../../../assets/images';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import CartContainer from '../Cart/CartContainer';

interface Props {
  onSubmit?: any;
  navigation?: any;
  onDispatch?:()=>void,
  onPaywith?:()=>void
  onCancel?:()=>void

}

const OrderSheetModal: React.FC<Props> = ({onSubmit, navigation,onPaywith,onDispatch,onCancel}: Props) => {
  const cartData = {
    title: 'Book title',
    auther: 'J.K. Rowling',
    listPrice: '£12.99 = Rs.4746',
    appPrice: 'Rs.2335',
    quantity: '1',
  };

  const DetailCard = ({
    title,
    onPress,
    des,
    fontWeight,
    fontFam,
    size,
  }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          ...styles.detailContainer,
        }}>
        <CustomText text={title} size={12} color={colors.grey} />

        <CustomText
          text={des}
          size={size || 12}
          fontWeight={fontWeight}
          fontFam={fontFam || font.WorkSans_Regular}
          color={colors.black}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, paddingHorizontal: scale(20)}}>
      <View style={appStyles.rowjustify}>
        <CustomText
          text={'Buy Now'}
          color={colors.black}
          fontWeight="600"
          size={18}
          fontFam={font.WorkSans_SemiBold}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onCancel}
          // onPress={() => navigation.navigate("Setting")}
          style={styles.box}>
          <Image
            style={{
              width: scale(17),
              height: scale(17),
              tintColor: colors.black,
            }}
            resizeMode="contain"
            source={images.close}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: verticalScale(20),
          gap: verticalScale(8),
          marginBottom: verticalScale(20),
        }}>
        <CartContainer data={cartData} />
        <DetailCard
        onPress={onDispatch}
         title={'Dispatch'} des={'359 American Scheme Block B9'} />
        <DetailCard 
        onPress={onPaywith}
        title={'Pay With'} des={'VISA ---- 1234'} />
        <DetailCard
          title={'Total'}
          des={'PKR 4,670'}
          fontFam={font.WorkSans_SemiBold}
          fontWeight={'600'}
          size={14}
        />
      </View>

      <CustomButton text="Place order" onPress={onSubmit} />

      <View style={{marginTop: verticalScale(7)}}>
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
  );
};

const styles = StyleSheet.create({
  box: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  countContainer: {
    width: scale(29),
    height: scale(29),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(6),
    backgroundColor: colors.orange,
  },
  detailContainer: {
    height: verticalScale(39),
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
});

export default OrderSheetModal;

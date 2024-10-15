import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {appStyles} from '../../../utils/AppStyles';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {colors} from '../../../utils/colors';
import {windowWidth} from '../../../utils/Dimensions';
import {images} from '../../../assets/images';
import Stars from 'react-native-stars';

interface data {
  title?: string;
  auther?: string;
  listPrice?: string;
  appPrice?: string;
  quantity?: string;
}
type Props = {
  data?: data;
  onPress?: any;
};

const BookReviewCard = ({data, onPress}: Props) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        width: windowWidth / 1.4,

        borderRadius: scale(10),
        overflow: 'hidden',
        backgroundColor: colors.white,
        padding: scale(15),
        gap: verticalScale(7),
      }}>
      <View style={{...appStyles.rowjustify}}>
        <CustomText
          text={'John Doe'}
          style={{textAlign: 'right'}}
          fontWeight="600"
          fontFam={font.WorkSans_SemiBold}
          color={colors.black}
          size={12}
        />
        <Stars
            default={4}
            count={5}
            disabled={true}
            spacing={scale(2)}
            starSize={scale(10)}
            fullStar={images.fill_star}
            emptyStar={images.unfill_star}
          />
        {/* <Image
          source={images.fill_star}
          style={{width: scale(11), height: scale(11)}}
          resizeMode="contain"
        /> */}
      </View>

      <CustomText
        numberOfLines={4}
        style={{textAlign: 'justify'}}
        text={
          'Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. '
        }
        lineHeight={22}
        color={colors.grey}
        size={13}
      />
      <View style={{...appStyles.row, gap: scale(7)}}>
        <Image
          source={images.like}
          style={{width: scale(20), height: scale(20)}}
          resizeMode="contain"
        />
        <CustomText text={'123'} color={colors.black} size={12} />
      </View>
    </TouchableOpacity>
  );
};

export default BookReviewCard;

const styles = StyleSheet.create({
  box: {
    width: scale(23),
    height: scale(23),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: scale(6),
  },

  bookIcons: {
    width: scale(18),
    height: scale(18),
  },
  bookImage: {
    width: windowWidth / 3.3,
    height: verticalScale(135),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

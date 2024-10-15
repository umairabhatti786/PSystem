import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { appStyles } from '../../utils/AppStyles';
import CustomText from '../CustomText';
import { font } from '../../utils/font';
import { colors } from '../../utils/colors';
import { windowWidth } from '../../utils/Dimensions';
import { images } from '../../assets/images';


interface data {
  title?: string;
  auther?: string;
  listPrice?: string;
  appPrice?: string;
  book?:any

}
type Props = {
  data: data;
  onPress?:any
};

const BooksCard = ({data,onPress}: Props) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
      style={{
        width: windowWidth/1.9,
        borderRadius: scale(10),
        overflow: 'hidden',
        backgroundColor: colors.white,
      }}>
      <ImageBackground style={styles.bookImage} source={data?.book}>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: colors.white,
            opacity: 0.7,
          }}
        />
        <Image
          style={{
            width: scale(55),
            height: verticalScale(70),
            borderRadius: scale(5),
            overflow: 'hidden',
          }}
          source={data?.book}
          resizeMode="contain"
        />
      </ImageBackground>
      <View
        style={{
          padding: scale(10),
          flex: 1,
          gap: verticalScale(5),
        }}>
        <View style={{ paddingTop: verticalScale(3),marginRight:scale(20)}}>
          <CustomText
            text={data?.title}
            color={colors.black}
            numberOfLines={1}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />

          <CustomText text={data.auther} color={colors.grey} size={12} />
        </View>
        <View style={{...appStyles.rowjustify, paddingTop: verticalScale(5)}}>
          <CustomText text={'List Price'} color={colors.grey} size={12} />
          <CustomText
            text={data.listPrice}
            color={colors.grey}
            size={12}
          />
        </View>

        <View style={appStyles.rowjustify}>
          <CustomText text={'App Price'} color={colors.grey} size={12} />
          <CustomText
            text={data?.appPrice}
            color={colors.orange}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={12}
          />
        </View>

        <CustomText text={'In Stock'}
        style={{marginTop:verticalScale(-3)}}
         color={colors.green} size={12} />
        <View style={{...appStyles.rowjustify,marginTop:verticalScale(4)}}>
          <TouchableOpacity style={styles.box}>
            <Image
              style={{...styles.bookIcons,}}
              source={images.unfill_heart}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Image
              style={styles.bookIcons}
              source={images.share}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Image
              style={styles.bookIcons}
              source={images.unfill_cart}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  box: {
    width: scale(50),
    height: scale(28),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dull_white,
    borderRadius: scale(6),
  },

  bookIcons: {
    width: scale(18),
    height: scale(18),
  },
  bookImage: {
    width: "100%",
    height: verticalScale(110),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

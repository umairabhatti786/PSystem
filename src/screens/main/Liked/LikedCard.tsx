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
import {appStyles} from '../../../utils/AppStyles';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {colors} from '../../../utils/colors';
import {windowWidth} from '../../../utils/Dimensions';
import {images} from '../../../assets/images';

interface data {
  title?: string;
  auther?: string;
  listPrice?: string;
  appPrice?: string;
  isLike?: boolean;
}
type Props = {
  data: data;
};

const LikedCard = ({data}: Props) => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        borderRadius: scale(15),
        overflow: 'hidden',
        backgroundColor: colors.white,
      }}>
      <ImageBackground style={styles.bookImage} source={images.book1}>
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
            width: scale(60),
            height: verticalScale(80),
            borderRadius: scale(5),
            overflow: 'hidden',
          }}
          source={images.book1}
          resizeMode="contain"
        />
      </ImageBackground>
      <View
        style={{
          padding: scale(10),
          flex: 1,
          gap: verticalScale(5),
        }}>
        <View style={{gap: scale(2), paddingTop: verticalScale(3)}}>
          <CustomText
            text={data?.title}
            color={colors.black}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />

          <CustomText text={data.auther} color={colors.grey} size={12} />
        </View>
        <View style={{...appStyles.rowjustify, paddingTop: verticalScale(5)}}>
          <CustomText text={'List Price'} color={colors.grey} size={13} />
          <CustomText
            textDecorationLine="line-through"
            text={data.listPrice}
            color={colors.black}
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

        <CustomText text={'In Stock'} color={colors.green} size={12} />
        <View style={appStyles.rowjustify}>
          <TouchableOpacity style={styles.box}>
            {data?.isLike ? (
              <Image
                style={{...styles.bookIcons, tintColor: colors.red}}
                source={images.fill_heart}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{...styles.bookIcons}}
                source={images.unfill_heart}
                resizeMode="contain"
              />
            )}
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
    </View>
  );
};

export default LikedCard;

const styles = StyleSheet.create({
  box: {
    width: scale(53),
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
    width: windowWidth / 3.3,
    height: verticalScale(135),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

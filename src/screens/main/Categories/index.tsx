import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import {appStyles} from '../../../utils/AppStyles';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/colors';

const CategoriesScreen = ({navigation}: any) => {
  const categoriesData = [
    {title: 'Art & Crafts'},
    {title: 'Stationery'},
    {title: 'Architecture'},
    {title: 'Art'},
    {title: 'Bio & Autobiography'},
    {title: 'Body, Mind & Spirit'},
    {title: 'Business',onPress:()=>navigation.navigate("BusinessScreen")},
    {title: 'Children'},
    {title: 'Computer'},
    {title: 'Cooking'},
    {title: 'Crafts'},
  ];
  const CategoryCard = ({title,onPress}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          ...styles.categoryContainer,
        }}>
        <CustomText text={title} size={14} />

        <Image
          style={{
            width: scale(18),
            height: scale(18),
          }}
          resizeMode="contain"
          source={images.right_arrow}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />
      <CustomInput placeholder="Search Category" />
      <ScrollView
        style={{...appStyles.main}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: verticalScale(20)}}>
        <View style={{gap: verticalScale(6)}}>
          {categoriesData.map((item, index) => {
            return <CategoryCard
            onPress={item.onPress}
             key={index.toString()} title={item.title} />;
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    height: verticalScale(39),
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
  },
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import {businessBookData, likedBookData} from '../../../utils/Data';
import CustomSearch from '../../../components/CustomSearch';
import {appStyles} from '../../../utils/AppStyles';
import {images} from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import BooksCard from '../../../components/BooksCard';
import TopHeader from '../../../components/TopHeader';
import LikedCard from '../Liked/LikedCard';
import CustomButton from '../../../components/CustomButton';

const AllSubCategoriesScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const SubCategories = [
    {title: 'All'},
    {title: 'Audit & Accounting'},
    {title: 'Business General'},
    {title: 'Business Communication'},
    {title: 'Careers'},
    {title: 'Business Education'},
    {title: 'Business Self Help'},
    {title: 'Current Affairs Business'},
    {title: 'Distribution'},
    {title: 'E Commerce'},
    {title: 'Economics'},
    {title: 'Exports & Imports'},
    {title: 'Finance & Investing'},
    {title: 'Industries'},
    {title: 'Insurance'},
    {title: 'Islamic Finance'},
    {title: 'Management'},
    {title: 'NGOs & Charities'},
  ];

  const renderOrdersItem = ({item}: any) => {
    return <LikedCard data={item} />;
  };

  return (
    <ScreenLayout
      style={{
        gap: verticalScale(15),
        paddingHorizontal: scale(20),
      }}>
      <TopHeader title="All Sub Categories" />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: scale(10),
            flexWrap: 'wrap',
          }}>
          {SubCategories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                activeOpacity={0.6}
                onPress={() => setActiveTab(index)}
                style={{
                  backgroundColor:
                    activeTab == index ? colors.black : colors.white,
                  borderRadius: 999,
                  height: verticalScale(32),
                  paddingHorizontal: scale(13),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomText
                  color={activeTab == index ? colors.white : colors.grey}
                  text={item.title}
                  size={14}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <CustomButton
        onPress={() => navigation.navigate('PaymentInfoScreen')}
        text="Apply"
        style={{marginBottom: verticalScale(30)}}
      />
    </ScreenLayout>
  );
};

export default AllSubCategoriesScreen;

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
  filterContainer: {
    height: verticalScale(39),
    backgroundColor: colors.primary,
    borderRadius: scale(8),
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

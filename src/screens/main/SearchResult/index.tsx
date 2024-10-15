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

const SearchResultScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderOrdersItem = ({item}: any) => {
    return <LikedCard data={item} />;
  };

  return (
    <ScreenLayout
      style={{
        gap: verticalScale(20),
        paddingHorizontal: scale(20),
      }}>
      <TopHeader
        title="Search Results"
        onRightPress={() => navigation.navigate('AllSubCategoriesScreen')}
      />

      <View style={{gap: verticalScale(15), flex: 1}}>
        <View style={appStyles.rowjustify}>
          <CustomSearch
          value={"Book title"}
           width={'80%'} filter={true} placeholder="Search" />
        </View>
        <FlatList
          data={businessBookData}
          contentContainerStyle={{
            gap: verticalScale(15),
            paddingBottom: verticalScale(30),
          }}
          renderItem={renderOrdersItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default SearchResultScreen;

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

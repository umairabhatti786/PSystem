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
import {RecommendedBookData, likedBookData} from '../../../utils/Data';
import DiscountBooks from './DiscountBooks';
import CustomSearch from '../../../components/CustomSearch';
import {appStyles} from '../../../utils/AppStyles';
import {images} from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import BooksCard from '../../../components/BooksCard';
import {windowWidth} from '../../../utils/Dimensions';

const HomeScreen = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScreenLayout
      style={{
        gap: verticalScale(15),
      }}>
      <ScrollView
        style={{...appStyles.main}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(20),
          gap: verticalScale(15),
        }}>
        <View style={{paddingHorizontal: scale(20), gap: verticalScale(15)}}>
          <CustomHeader />

          <DiscountBooks />
          <View style={appStyles.rowjustify}>
            <CustomSearch 
            onFocus={()=>navigation.navigate("SearchResultScreen")}
            placeholder="Search" 
            width={"80%"}
            filter={true}
            />
          
          </View>
        </View>

        <View>
          <FlatList
            data={[
              'All',
              'Literature',
              'Journeys',
              'History',
              'Distribution',
              'Careers',
            ]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: scale(20)}}
            contentContainerStyle={{
              gap: scale(10),
              paddingRight: scale(40),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}: any) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setActiveTab(index)}
                  style={{
                    // marginRight: scale(20),
                    backgroundColor:
                      activeTab == index ? colors.black : colors.white,
                    borderRadius: 999,
                    height: verticalScale(30),
                    paddingHorizontal: scale(20),

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    color={activeTab == index ? colors.white : colors.grey}
                    text={item}
                    size={14}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <CustomText
            text={'Recommended'}
            color={colors.black}
            fontWeight="600"
            style={{
              marginLeft: scale(20),
              marginBottom: verticalScale(10),
              marginTop: verticalScale(5),
            }}
            fontFam={font.WorkSans_SemiBold}
            size={14}
          />
          <View style={{...appStyles.row}}>
            <FlatList
              data={RecommendedBookData}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={({item, index}: any) => {
                return (
                  <TouchableOpacity 
                  activeOpacity={0.5}
                  onPress={()=>navigation.navigate("RecommendedScreen")}

                  style={styles.popularBox}>
                    <View style={styles.popularContainer}>
                      <Image
                        source={images.add_unfill}
                        style={{
                          width: scale(22),
                          height: scale(22),
                          tintColor: colors.white,
                        }}
                        resizeMode="contain"
                      />
                    </View>

                    <CustomText
                      text={'View All Popular'}
                      color={colors.white}
                      size={14}
                    />
                  </TouchableOpacity>
                );
              }}
              style={{paddingLeft: scale(20)}}
              contentContainerStyle={{
                paddingRight: scale(40),
                gap: scale(15),
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}: any) => {
                return (
                  <View>
                    <BooksCard
                      onPress={() => navigation.navigate('BookDetailScreen')}
                      data={item}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HomeScreen;

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
  popularContainer: {
    width: scale(62),
    height: scale(62),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: '#FFFFFF20',
  },
  popularBox: {
    width: windowWidth / 1.9,
    height: verticalScale(240),
    backgroundColor: colors.primary,
    borderRadius: scale(10),
    alignItems: 'center',
    paddingTop: verticalScale(55),
    gap: verticalScale(30),
  },
});

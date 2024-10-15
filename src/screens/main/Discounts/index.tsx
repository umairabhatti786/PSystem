import React, {useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import {colors} from '../../../utils/colors';
import {images} from '../../../assets/images';
import {windowHeight} from '../../../utils/Dimensions';
import {appStyles} from '../../../utils/AppStyles';
import CustomButton from '../../../components/CustomButton';
import CustomBottomSheet from '../../../components/CustomBottomSheet';
import DiscountSheetModal from './DiscountSheetModal';

const DiscountsScreen = () => {
  const [selectedBank, setSelectedBank] = useState(0);
  const bottomSheetModalRef = useRef<any>(null);
   const snapPoints = useMemo(() => ["55%", "55%"], []);


  const tableData = [
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
      bin: '470556',
      category: 'Credit',
      type: 'Platinum',
      discount: '30%',
      cap: '2000',
    },
    {
        bin: '470556',
        category: 'Credit',
        type: 'Platinum',
        discount: '30%',
        cap: '2000',
      },
      
  ];

  const renderTableHeader = () => (
    <View style={appStyles.rowjustify}>
      <View style={styles.tableHeader}>
        <CustomText text={'BIN'} color={colors.grey} size={11} />
      </View>
      <View style={styles.tableHeader}>
        <CustomText text={'Category'} color={colors.grey} size={11} />
      </View>

      <View style={styles.tableHeader}>
        <CustomText text={'Type'} color={colors.grey} size={11} />
      </View>

      <View style={styles.tableHeader}>
        <CustomText text={'Discount'} color={colors.grey} size={11} />
      </View>

      <View style={styles.tableHeader}>
        <CustomText text={'Cap'} color={colors.grey} size={11} />
      </View>
    </View>
  );

  const renderItem = ({item, index}: any) => (
    <View
      style={{
        ...styles.dataRow,
        borderBottomWidth: index !== tableData.length - 1 ? 1 : 0,
      }}>
      <View style={styles.tableHeader}>
        <CustomText text={item.bin} color={colors.black} size={10} />
      </View>
      <View style={styles.tableHeader}>
        <CustomText text={item.category} color={colors.black} size={10} />
      </View>
      <View style={styles.tableHeader}>
        <CustomText text={item.type} color={colors.black} size={10} />
      </View>
      <View style={styles.tableHeader}>
        <CustomText text={item.discount} color={colors.black} size={10} />
      </View>
      <View style={styles.tableHeader}>
        <CustomText text={item.cap} color={colors.black} size={10} />
      </View>
    </View>
  );
  return (
    <>
     <ScreenLayout>
      <View style={{flex: 1, gap: verticalScale(20)}}>
        <View style={{paddingHorizontal: scale(20), gap: verticalScale(15)}}>
          <TopHeader title="About" />
          {/* <ScrollView
        style={{flex: 1, backgroundColor: colors.dull_white}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          paddingBottom: verticalScale(20),
        }}> */}

          <CustomText
            text={
              'Refer to the list below for discount that apply to your bank.'
            }
            size={14}
          />

          {/* </ScrollView> */}
        </View>

        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
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
                  onPress={() => setSelectedBank(index)}
                  style={{
                    // marginRight: scale(20),
                    backgroundColor: colors.white,
                    borderRadius: scale(10),
                    height: verticalScale(60),
                    width: scale(70),
                    paddingHorizontal: scale(20),
                    borderWidth: selectedBank == index ? 1 : -1,
                    borderColor:
                      selectedBank == index ? colors.black : 'transparent',

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: scale(32), height: scale(32)}}
                    source={images.meezan_bank}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            marginHorizontal: scale(20),
            backgroundColor: colors.white,
            borderRadius: scale(10),
            maxHeight: windowHeight / 2,
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(15),
          }}>
          {renderTableHeader()}

          <FlatList
            data={tableData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View
      style={{paddingHorizontal:scale(20),paddingBottom:verticalScale(30)}}
      >
              <CustomButton
              onPress={()=>bottomSheetModalRef.current.present()}
               text="How to get discount" style={{marginTop: verticalScale(20)}} />

        
      </View>


    </ScreenLayout>

<CustomBottomSheet 
snapPoints={snapPoints}
bottomSheetModalRef={bottomSheetModalRef}>
        <DiscountSheetModal
        bottomSheetModalRef={bottomSheetModalRef}
        />
          

      </CustomBottomSheet>
    </>
   
  );
};

export default DiscountsScreen;

const styles = StyleSheet.create({
  dataRow: {
    flexDirection: 'row',
    paddingVertical: verticalScale(15),
    borderBottomColor: '#E5E7EB',
    alignItems: 'center',
    // justifyContent:"space-between",
  },
  tableHeader:{
    width: scale(63)

  }
});

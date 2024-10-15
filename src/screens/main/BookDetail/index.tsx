import React, {useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {appStyles} from '../../../utils/AppStyles';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import {colors} from '../../../utils/colors';
import {windowWidth} from '../../../utils/Dimensions';
import {images} from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import BookReviewCard from './BookReviewCard';
import BooksCard from '../../../components/BooksCard';
import {RecommendedBookData, likedBookData} from '../../../utils/Data';
import CustomButton from '../../../components/CustomButton';
import CustomBottomSheet from '../../../components/CustomBottomSheet';
import BookReviewSheetModal from './BookReviewSheetModal';
import CustomAlertModal from '../../../components/CustomAlertModal';
import OrderSheetModal from './OrderSheetModal';



const BookDetail = ({route}: any) => {
  const navigation: any = useNavigation();
  const bottomSheetModalRef = useRef<any>(null);
  const OrderbottomSheetModalRef = useRef<any>(null);
  const BookReviewSnapPoints = useMemo(() => ["55%", "55%"], []);
  const OrderSheetSnapPoints = useMemo(() => ["68%", "70%"], []);
  const [isAddToCart,setIsAddToCart]=useState(false)
let viewOrder=route?.params?.viewOrder
  const [isReviewAddModal, setIsReviewAddModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const QuantityContainer=()=>{

    return(
      <View style={{...appStyles.row,gap:scale(20),paddingTop:verticalScale(4)}}>
      <TouchableOpacity
      activeOpacity={0.5}
      style={styles.quantityBox}>
      <CustomText
        text={"-"}
        color={colors.white}
        fontWeight="600"
        fontFam={font.WorkSans_SemiBold}
        size={20}
      />
      </TouchableOpacity>

      <CustomText
        text={"1"}
        color={colors.black}
        fontWeight="600"
        fontFam={font.WorkSans_SemiBold}
        size={15}
      />

     

      <TouchableOpacity 
                activeOpacity={0.5}

      style={styles.quantityBox}>
      <CustomText
        text={"+"}
        color={colors.white}
        fontWeight="600"
        fontFam={font.WorkSans_SemiBold}
        size={20}
      />
      </TouchableOpacity>
    </View>
    )
  }

  const BookInfo = ({title, detail}: any) => {
    return (
      <View
        style={{
          width: '31%',
          paddingLeft: scale(10),
          paddingVertical: verticalScale(10),
          backgroundColor: colors.white,
          borderRadius: scale(10),
          gap: verticalScale(6),
        }}>
        <CustomText text={title} color={colors.grey} size={12} />
        <CustomText text={detail} color={colors.black} size={12} />
      </View>
    );
  };
  return (
    <>
      <ScrollView
        style={{...appStyles.main}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(15),
        }}>
        <View
          style={{
            gap: verticalScale(20),
            flex: 1,
          }}>
          <View
            style={{
              width: windowWidth / 1,
              flex: 1,
              overflow: 'hidden',
              backgroundColor: colors.dull_white,
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

              <View
                style={{
                  ...appStyles.rowjustify,
                  width: '100%',
                  paddingHorizontal: scale(20),
                }}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backContainer}>
                  <Image
                    style={{
                      width: scale(25),
                      height: scale(25),
                      tintColor: colors.primary,
                    }}
                    resizeMode="contain"
                    source={images.left_arrow}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backContainer}>
                  <Image
                    style={{
                      width: scale(25),
                      height: scale(25),
                      // tintColor: colors.primary,
                    }}
                    resizeMode="contain"
                    source={images.fill_cart}
                  />
                  <View
                    style={{
                      width: scale(15),
                      height: scale(15),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 999,
                      backgroundColor: colors.orange,
                      position: 'absolute',
                      right: scale(2),
                      top: verticalScale(-2),
                    }}>
                    <CustomText
                      text={'2'}
                      color={colors.white}
                      fontWeight="600"
                      fontFam={font.WorkSans_SemiBold}
                      size={11}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{overflow: 'hidden', marginTop: verticalScale(10)}}>
                <Image
                  style={{
                    width: scale(110),
                    height: verticalScale(150),
                    borderRadius: scale(3),
                    overflow: 'hidden',
                  }}
                  source={images.book1}
                  // resizeMode="contain"
                />
              </View>
            </ImageBackground>
            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(20),
                flex: 1,
                gap: verticalScale(20),
              }}>
              <View>
                <CustomText
                  text={'Hobbit'}
                  color={colors.black}
                  numberOfLines={1}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={20}
                />

                <CustomText
                  text={'J. R. R. Tolkien'}
                  color={colors.black}
                  size={14}
                />
              </View>
              <View style={{gap: verticalScale(10)}}>
                <View style={{...appStyles.rowjustify}}>
                  <CustomText
                    text={'Availability'}
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    text={'In Stock'}
                    color={colors.green}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                    size={18}
                  />
                </View>
                <View style={{...appStyles.rowjustify}}>
                  <CustomText
                    text={'List Price'}
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    text={'£12.99 = Rs.4746'}
                    color={colors.grey}
                    size={14}
                  />
                </View>

                <View style={appStyles.rowjustify}>
                  <CustomText
                    text={'App Price(10% OFF)'}
                    color={colors.grey}
                    size={14}
                  />
                  <CustomText
                    text={'Rs.2335'}
                    color={colors.orange}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                    size={20}
                  />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo title={'Publication year'} detail={'2015'} />
                  <BookInfo title={'Category'} detail={'Fantacy'} />
                  <BookInfo title={'Sub category'} detail={'Horror'} />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo title={'Material'} detail={'Paperback'} />
                  <BookInfo title={'ISBN'} detail={'10%'} />
                  <BookInfo title={'Pages'} detail={'10%'} />
                </View>
                <View style={appStyles.rowjustify}>
                  <BookInfo title={'Weight'} detail={'10%'} />
                  <BookInfo title={'Publisher'} detail={'ABC Publisher%'} />
                  <BookInfo title={'Dimension'} detail={'10%'} />
                </View>
              </View>

              <View style={{gap: verticalScale(3)}}>
                <CustomText
                  text={'About Hobbit'}
                  color={colors.black}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={18}
                />

                <CustomText
                  lineHeight={22}
                  style={{textAlign:"justify"}}

                  text={
                    'Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. Egestas dolor nunc id duis tortor tellus pellentesque quisque. Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis.'
                  }
                  color={colors.grey100}
                  size={14}
                />
              </View>
              <View style={{gap: verticalScale(3)}}>
                <CustomText
                  text={'About J. R. R. Tolkien'}
                  color={colors.black}
                  fontWeight="600"
                  fontFam={font.WorkSans_SemiBold}
                  size={18}
                />

                <CustomText
                  lineHeight={22}
                  style={{textAlign:"justify"}}

                  text={
                    'Lorem ipsum dolor sit amet consectetur. Metus aliquam mauris quam nec magna facilisis. Ultricies auctor eu sit feugiat felis quis. Mauris suspendisse tortor enim condimentum nulla. '
                  }
                  color={colors.grey100}
                  size={14}
                />
              </View>
            </View>
          </View>
          <View style={{gap: verticalScale(5)}}>
            <CustomText
              text={'Book Reviews'}
              color={colors.black}
              style={{marginLeft: scale(20)}}
              fontWeight="600"
              fontFam={font.WorkSans_SemiBold}
              size={18}
            />
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft: scale(20)}}
              contentContainerStyle={{
                gap: scale(15),
                paddingRight: scale(40),
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}: any) => {
                return (
                  <BookReviewCard
                    onPress={() => navigation.navigate("BookReviewScreen")}
                  />
                );
              }}
            />

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => bottomSheetModalRef.current.present()}
              style={{
                ...appStyles.row,
                gap: scale(10),
                marginLeft: scale(20),
                marginTop: verticalScale(7),
              }}>
              <CustomText
                text={'Write a Review'}
                size={14}
                color={colors.primary}
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
              />
              <Image
                source={images.edit}
                resizeMode="contain"
                style={{
                  width: scale(15),
                  height: scale(15),
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{gap: verticalScale(5)}}>
            <CustomText
              text={'Recommended'}
              color={colors.black}
              fontWeight="600"
              style={{
                marginLeft: scale(20),
              }}
              fontFam={font.WorkSans_SemiBold}
              size={14}
            />

            <FlatList
              data={RecommendedBookData}
              horizontal
              showsHorizontalScrollIndicator={false}
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

      <View
        style={{
          width: '100%',
          paddingHorizontal: scale(20),
          paddingTop: verticalScale(10),
          paddingBottom: verticalScale(30),
          backgroundColor: colors.dull_white,
          borderTopWidth: 1,
          borderTopColor: colors.dull_half_white,
          flexDirection: 'row',
          alignItems: 'center',
          gap: scale(10),
        }}>
          {
            viewOrder?(
              <View style={{...appStyles.rowjustify,width:"100%"}}>
                   <CustomButton
            width={'48%'}
            onPress={()=>setIsAddToCart(true)}
            text={'Cancel'}
            bgColor={colors.white}
            textColor={colors.primary}
          />
                  <CustomButton
            width={'48%'}
            onPress={()=>setIsAddToCart(true)}
            text={'Accept Price'}
            bgColor={colors.primary}
            textColor={colors.white}
          />

              </View>
            ):(
              <>

<CustomButton
          width={'30%'}
          text={'Buy Now'}
          onPress={()=>OrderbottomSheetModalRef.current.present()}
          bgColor={colors.white}
          textColor={colors.primary}
        />
        
        <View style={{width:"30%",alignItems:"center"}}>

        {
          isAddToCart?(
            <QuantityContainer/>
          ):(
            <CustomButton
            width={'100%'}
            onPress={()=>setIsAddToCart(true)}
            text={'Add To Cart'}
            bgColor={colors.primary}
            textColor={colors.white}
          />

          )
        }

        </View>
       
       
        <TouchableOpacity style={styles.box}>
          <Image
            style={styles.bookIcons}
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
              </>
            )
          }
       
      </View>

      <CustomBottomSheet
      snapPoints={BookReviewSnapPoints}
        backgroundColor={colors.dull_white}
        bottomSheetModalRef={bottomSheetModalRef}>
        <BookReviewSheetModal
           onCancel={()=>bottomSheetModalRef.current.dismiss()}

         onSubmit={() => setIsReviewAddModal(true)}
          />
      </CustomBottomSheet>
      <CustomBottomSheet
      snapPoints={OrderSheetSnapPoints}
        backgroundColor={colors.dull_white}
        bottomSheetModalRef={OrderbottomSheetModalRef}>
        <OrderSheetModal
        onCancel={()=>OrderbottomSheetModalRef.current.dismiss()}
        
        onDispatch={()=>{
          OrderbottomSheetModalRef.current.dismiss()
          setTimeout(() => {
            navigation.navigate("ChooseAddressScreen")
            
          }, 500);


        }}
        onPaywith={()=>{
          OrderbottomSheetModalRef.current.dismiss()
          setTimeout(() => {
            navigation.navigate("ChoosePaymentScreen")
            
          }, 500);


        }}
        navigation={navigation}
         onSubmit={() => setIsSuccessModal(true)} />
      </CustomBottomSheet>

      <CustomAlertModal
        buttonTitle={'Great!'}
        modalVisible={isReviewAddModal}
        title={'Review Added'}
        des={
          'Your review for the book <bookname> has been posted successfully.'
        }
        setModalVisible={setIsReviewAddModal}
        onPress={() => {
          setIsReviewAddModal(false);
          setTimeout(() => {
            bottomSheetModalRef.current.close();
          }, 500);
        }}
      />

<CustomAlertModal
        buttonTitle={'Back to Home'}
        icon={images.congrat}
        modalVisible={isSuccessModal}
        title={'Order Received'}
        des={
          'Thanks for shopping with Readings. We have received your order. You can check the status of your order in the orders tab and track in real time.'
        }
        setModalVisible={setIsReviewAddModal}
        onPress={() => {
          setIsSuccessModal(false);
          setTimeout(() => {
            navigation.goBack()
            
          }, 500);
        }}
      />
    </>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  box: {
    width: scale(47),
    height: verticalScale(38),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: scale(8),
  },
  quantityBox: {
    width: scale(22),
    height: scale(22),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: scale(6),
  },

  bookIcons: {
    width: scale(20),
    height: scale(20),
  },
  bookImage: {
    width: '100%',
    height: verticalScale(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backContainer: {
    width: scale(30),
    height: scale(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

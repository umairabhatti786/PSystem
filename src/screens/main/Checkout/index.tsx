import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import CustomText from '../../../components/CustomText';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import AddressCard from '../../../components/AddressCard';
import {appStyles} from '../../../utils/AppStyles';
import {colors} from '../../../utils/colors';
import {font} from '../../../utils/font';
import CheckBookCard from './CheckBookCard';
import CustomAlertModal from '../../../components/CustomAlertModal';
import PaymentCard from '../../../components/PaymentCard';
import BankTransferCard from './BankTransferCard';
import LocalPaymentCard from './LocalPaymentCard';
import { checkoutBooksData } from '../../../utils/Data';
import * as Animatable from "react-native-animatable";

const CheckoutScreen = ({navigation}: any) => {
  const [isBilling, setIsBilling] = useState(false);
  const [selectedOnlinePayment, setSelectedOnlinePayment] = useState('card');
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState('cash');
  const [isOrderPlace, setIsOrderPalace] = useState(false);

  const paymentMethods = [
    {title: 'Online Payment (Debit, Credit, Paypak)', label: 'online payment'},
    {title: 'Cash on Delivery', label: 'cash'},
  ];
  const onlinePaymentMethods = [
    {title: 'Card', label: 'card'},
    {title: 'Bank Transfer', label: 'bank'},
    {title: 'Jazzcash / Easypaisa', label: 'local'},
  ];

 
  return (
    <>
      <ScreenLayout style={{gap: verticalScale(20)}}>
        <View style={{paddingHorizontal: scale(20)}}>
          <TopHeader title="Checkout" />
        </View>

        <ScrollView
          style={{...appStyles.main}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(20),
            gap: verticalScale(20),
          }}>
          <View
            style={{
              flex: 1,
              gap: verticalScale(20),
              paddingHorizontal: scale(20),
            }}>
            <CustomText
              text={
                'Add your optional payment method to save for future purchases.'
              }
              size={14}
            />
            <AddressCard width={'100%'} />

            <TouchableOpacity
              activeOpacity={0.5}
              //   onPress={() => setIsAddCard(true)}
              style={{
                ...appStyles.row,
                gap: scale(10),
                marginTop: verticalScale(-5),
              }}>
              <CustomText
                text={'Add New Address'}
                size={14}
                color={colors.primary}
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
              />
              <Image
                source={images.plus}
                resizeMode="contain"
                style={{
                  width: scale(15),
                  height: scale(15),
                }}
              />
            </TouchableOpacity>

            <View style={{marginTop: verticalScale(5), gap: verticalScale(10)}}>
              <CustomText
                text={'Billing address'}
                size={18}
                color={colors.black}
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
              />
              <View style={{...appStyles.row, gap: scale(7)}}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setIsBilling(!isBilling)}
                  style={{
                    ...styles.billingCheckBox,
                    borderWidth: isBilling ? -1 : 1.2,
                    backgroundColor: isBilling ? colors.primary : 'transparent',
                  }}>
                  {/* {isBilling && ( */}
                    <Image
                      style={{
                        width: scale(8),
                        height: scale(8),
                        tintColor:isBilling? colors.white:colors.grey,
                      }}
                      resizeMode="contain"
                      source={images.tick}
                    />
                  {/* )} */}
                </TouchableOpacity>

                <CustomText
                  text={'My billing address is same as shipping address'}
                  size={12}
                  color={colors.grey}
                  fontWeight="500"
                  fontFam={font.WorkSans_Regular}
                />
              </View>
              {
                !isBilling&&(
                  <TouchableOpacity
                  activeOpacity={0.5}
    
                  //   onPress={() => setIsAddCard(true)}
                  style={{
                    ...appStyles.row,
                    gap: scale(10),
                    marginTop: verticalScale(5),
                  }}>
                  <CustomText
                    text={'Add Biling Address'}
                    size={14}
                    color={colors.primary}
                    fontWeight="600"
                    fontFam={font.WorkSans_SemiBold}
                  />
                  <Image
                    source={images.plus}
                    resizeMode="contain"
                    style={{
                      width: scale(15),
                      height: scale(15),
                    }}
                  />
                </TouchableOpacity>

                )
              }

            
            </View>

            <View style={{marginTop: verticalScale(5), gap: verticalScale(10)}}>
              <CustomText
                text={'Payment Method'}
                size={18}
                color={colors.black}
                fontWeight="600"
                fontFam={font.WorkSans_SemiBold}
              />
              {paymentMethods.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={{...appStyles.row, gap: scale(7)}}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setSelectedPaymentMethod(item.label)}
                      style={{
                        ...styles.radioButtonConainer,

                        borderWidth: 1.2,
                        borderColor:
                          selectedPaymentMethod == item.label
                            ? colors.orange
                            : colors.dull_half_white,
                      }}>
                      {selectedPaymentMethod == item.label && (
                        <TouchableOpacity
                          activeOpacity={0.5}
                          onPress={() => setSelectedPaymentMethod(item.label)}
                          style={styles.radioButtonInner}></TouchableOpacity>
                      )}
                    </TouchableOpacity>

                    <CustomText
                      text={item.title}
                      size={12}
                      color={colors.dark_black}
                      fontWeight="500"
                      fontFam={font.WorkSans_Regular}
                    />
                  </View>
                );
              })}
            </View>

            {selectedPaymentMethod == 'online payment' && (
                <Animatable.View
                duration={1000}
                animation={"fadeIn"}
                delay={100}
                style={{gap: verticalScale(10), marginTop: verticalScale(-5)}}>
                <CustomText
                  text={'Please choose an online payment method.'}
                  size={14}
                  style={{marginBottom: verticalScale(5)}}
                  fontFam={font.WorkSans_Regular}
                />
                {onlinePaymentMethods.map((item, index) => {
                  return (
                    <Animatable.View
                    duration={1000}
                    animation={"fadeIn"}
                    delay={100}
                      key={index.toString()}
                      style={{...appStyles.row, gap: scale(7)}}>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setSelectedOnlinePayment(item.label)}
                        style={{
                          ...styles.radioButtonConainer,

                          borderWidth: 1.2,
                          borderColor:
                            selectedOnlinePayment == item.label
                              ? colors.orange
                              : colors.dull_half_white,
                        }}>
                        {selectedOnlinePayment == item.label && (
                          <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => setSelectedOnlinePayment(item.label)}
                            style={styles.radioButtonInner}></TouchableOpacity>
                        )}
                      </TouchableOpacity>

                      <CustomText
                        text={item.title}
                        size={12}
                        color={colors.dark_black}
                        fontWeight="500"
                        fontFam={font.WorkSans_Regular}
                      />
                    </Animatable.View>
                  );
                })}

                {/* {

                  selectedOnlinePayment=="card"&&(
                    
                  )
                } */}
              </Animatable.View>
            )}
          </View>

          {selectedPaymentMethod == 'online payment' && (
            <View>
              {selectedOnlinePayment == 'card' && (
                <FlatList
                  data={[1, 2, 3]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{paddingLeft: scale(20)}}
                  contentContainerStyle={{
                    paddingRight: scale(40),
                    gap: scale(15),
                  }}
                  keyExtractor={(item: any, index: any) => index.toString()}
                  renderItem={({item, index}: any) => {
                    return (
                      <Animatable.View
                      duration={1000}
                      animation={"fadeIn"}
                      delay={100}>
                        <PaymentCard />
                      </Animatable.View>
                    );
                  }}
                />
              )}

              {selectedOnlinePayment == 'bank' && (
                <Animatable.View
                duration={1000}
                animation={"fadeIn"}
                delay={100} style={{paddingHorizontal: scale(20),gap:verticalScale(15)}}>
                  <CustomText
                    text={
                      'To make an online payment, please choose a convenient bank option from below. Click to copy Account No. / IBAN.'
                    }
                    color={colors.grey}
                    style={{marginRight:scale(10)}}
                    size={12}
                  />
                  <BankTransferCard />
                </Animatable.View>
              )}
                  {selectedOnlinePayment == 'local' && (
                <Animatable.View
                duration={1000}
                animation={"fadeIn"}
                delay={100}
                 style={{paddingHorizontal: scale(20),gap:verticalScale(15)}}>
                  <CustomText
                    text={
                      'Enter your Jazzcash/easypaisa account below.'
                    }
                    color={colors.grey}
                    style={{marginRight:scale(10),marginBottom:verticalScale(15)}}
                    size={12}
                  />
                  <LocalPaymentCard />
                </Animatable.View>
              )}
            </View>
          )}

          <View style={{paddingHorizontal: scale(20),gap: verticalScale(20)}}>
            <View style={{gap: verticalScale(10)}}>
              {checkoutBooksData.map((item, index) => {
                return <CheckBookCard
                key={index.toString()}
                 data={item} />;
              })}
            </View>
            <View style={styles.promoContainer}>
              <TextInput
                // value={value}
                // editable={editable}
                style={styles.promoInput}
                placeholder={'Promo'}
                placeholderTextColor={colors.grey}
              />
              <TouchableOpacity activeOpacity={0.5} style={styles.promoButton}>
                <CustomText text={'Apply'} color={colors.white} size={14} />
              </TouchableOpacity>
            </View>

            <View style={styles.subtotalContainer}>
              <View style={{...appStyles.rowjustify, width: '100%'}}>
                <CustomText text={'Subtotal'} color={colors.black} size={14} />
                <CustomText text={'Rs.2335'} color={colors.black} size={14} />
              </View>

              <View style={{...appStyles.rowjustify, width: '100%'}}>
                <CustomText text={'Shipping'} color={colors.black} size={14} />
                <CustomText text={'Rs.2335'} color={colors.black} size={14} />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>

      <View style={styles.checkoutTotalContainer}>
        <View style={{...appStyles.rowjustify, width: '100%'}}>
          <CustomText
            text={'Total'}
            color={colors.black}
            size={18}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
          />
          <CustomText
            text={'Rs.2335'}
            color={colors.black}
            size={16}
            fontWeight="600"
            fontFam={font.WorkSans_SemiBold}
          />
        </View>

        <CustomButton
          text={'Place Order'}
          onPress={() => setIsOrderPalace(true)}
          bgColor={colors.primary}
          textColor={colors.white}
        />
      </View>

      <CustomAlertModal
        buttonTitle={'Back to Home'}
        modalVisible={isOrderPlace}
        icon={images.congrat}
        title={'Gift Sent'}
        des={
          'Your Gift Card is on its way to Rebecca and you both will be notify as she received. Usually takes 3 hours to arrive.'
        }
        setModalVisible={setIsOrderPalace}
        onPress={() => {
          setIsOrderPalace(false);
          setTimeout(() => {
            navigation.goBack();
          }, 500);
        }}
      />
    </>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  subtotalContainer: {
    backgroundColor: colors.white,
    padding: scale(15),
    borderRadius: scale(10),
    gap: verticalScale(15),
    marginTop: verticalScale(-7),
  },
  radioButtonConainer: {
    width: scale(16),
    height: scale(16),
    borderRadius: 999,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: scale(8),
    height: scale(8),
    borderRadius: 999,
    backgroundColor: colors.orange,
  },
  promoContainer: {
    width: '100%',
    height: verticalScale(39),
    backgroundColor: colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: verticalScale(-7),
  },
  promoInput: {
    fontSize: 14,
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: 0, // Adjust as needed for centering
    fontFamily: font.WorkSans_Light,
    fontWeight: '500',
    color: colors.black,
  },
  promoButton: {
    width: scale(80),
    height: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutTotalContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    backgroundColor: colors.dull_white,
    alignItems: 'center',
    gap: scale(10),
  },
  billingCheckBox: {
    width: scale(17),
    height: scale(17),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(5),
    borderColor: colors.grey,
  },
});

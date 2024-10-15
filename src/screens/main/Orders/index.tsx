import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../utils/colors';
import OrderCard from './OrderCard';
import { ordersHistoryData} from '../../../utils/Data';

const OrdersScreen = ({navigation}:any) => {
  const [activeTab, setActiveTab] = useState('Active');
  // onPress:()=>navigation.navigate("OrderDetailScreen"),

   const activeOrdersData = [
    {
      orderId: 'ORDER123456',
      amount: '4000',
      orderStatus: 'Order Received',
      orderDetail: 'Details',
       onPress:()=>navigation.navigate("OrderDetailScreen"),

    },
    {
      orderId: 'ORDER123456',
      amount: '4000',
      orderStatus: 'Out for Delivery',
      orderDetail: 'Details',
      onPress:()=>navigation.navigate("OrderDetailScreen"),

    },
    {
      orderId: 'REQ123',
      amount: '4000',
      orderStatus: 'Request Received',
      title: 'Title: Love, Poverty and War',
    },
    {
      orderId: 'REQ123',
      orderStatus: 'Processed',
      orderDetail: 'View',
      title: 'Title: Paradise Regain',
      onPress:()=>navigation.navigate("BookDetailScreen",{viewOrder:true}),

    },
  ];

  const Tabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab('Active')}
          activeOpacity={0.5}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == 'Active' ? colors.primary : 'transparent',
          }}>
          <CustomText
            text={'Active'}
            color={activeTab == 'Active' ? colors.white : colors.grey}
            size={14}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setActiveTab('History')}
          style={{
            ...styles.tabBox,
            backgroundColor:
              activeTab == 'History' ? colors.primary : 'transparent',
          }}>
          <CustomText
            text={'History'}
            size={14}
            color={activeTab == 'History' ? colors.white : colors.grey}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderOrdersItem = ({item}: any) => {
    return <OrderCard 
    onPress={item.onPress}
    data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />
      <Tabs />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={activeTab == 'Active' ? activeOrdersData : ordersHistoryData}
          contentContainerStyle={{gap: verticalScale(8)}}
          renderItem={renderOrdersItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default OrdersScreen;

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
});

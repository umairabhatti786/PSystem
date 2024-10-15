import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomHeader from '../../../components/CustomHeader';
import {likedBookData} from '../../../utils/Data';
import LikedCard from './LikedCard';

const LikedScreen = () => {
  const renderOrdersItem = ({item}: any) => {
    return <LikedCard data={item} />;
  };
  return (
    <ScreenLayout
      style={{
        paddingHorizontal: scale(20),
        gap: verticalScale(15),
      }}>
      <CustomHeader />

      <View style={{gap: verticalScale(8), flex: 1}}>
        <FlatList
          data={likedBookData}
          contentContainerStyle={{gap: verticalScale(15)}}
          renderItem={renderOrdersItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenLayout>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({

   
});

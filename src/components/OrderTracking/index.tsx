import {View, StyleSheet, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import {font} from '../../utils/font';
import * as Animatable from 'react-native-animatable';
import {scale, verticalScale} from 'react-native-size-matters';

type Level = {
  level: string;
  points: number;
};
type Props = {
  orderStatus: string;
};
function OrderTracking({orderStatus = 'Dispatched'}: Props) {
  const levels = [
    {level: 'Received', left: '5%'},
    {level: 'Dispatched', left: '34%'},
    {level: 'Delivering', left: '64%'},
    {level: 'Received', left: '92%'},
  ];
  // get current status
  const currentIndex = levels.findIndex(item => item.level === orderStatus);
  const currentLevel = levels.find(item => item.level === orderStatus);

  console.log(currentLevel); // Output: 1 (since 'Dispatched' is at index 1)

  const renderLevels = () => {
    return levels?.map((levelObj, index) => {
      // const levelWidth = (levelObj?.points / totalPoints) * 100; // Assuming 300 as the total width for calculation
      // accumulatedWidth = levelWidth - 10; // Update accumulatedWidth for the next level
      // const leftPosition = accumulatedWidth; // Set the left position based on accumulatedWidth
      return (
        <View key={index} style={{...styles.levelMarker, left: levelObj.left}}>
          <View style={{...styles.circleContainer}}>
            <View
              style={{
                ...styles.circle,
                backgroundColor:
                  index <= currentIndex ? colors.green : colors.dull_half_white,
                  
              }}>
              {levelObj.level == orderStatus && (
                <View
                  style={{
                    width: scale(5),
                    height: scale(5),
                    borderRadius: 999,
                    backgroundColor: colors.white,
                  }}
                />
              )}
            </View>

            <CustomText
              text={levelObj.level}
              size={9.5}
              fontWeight="400"

              // fontFam={font.montserratMedium}
              color={colors.green}
              style={{marginTop:verticalScale(5),marginLeft:scale(-15)}}
            />
          </View>
        </View>
      );
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderRadius: 9999,
        overflow: 'hidden',
        // backgroundColor:"green",
        paddingTop: verticalScale(10),
        height: verticalScale(40),
        width: '90%',
        alignSelf:"center"
        // paddingHorizontal:scale(20)
        // alignItems:"center",
      }}>
      <View
        style={{
          height: verticalScale(1.6),
          width: '100%',
          borderRadius: 9999,
          overflow: 'hidden',
          backgroundColor: colors.dull_half_white,
        }}>
        <Animatable.View
          animation="slideInLeft"
          style={[
            {
              backgroundColor: colors.green,
              height: 3,
              borderRadius: 9999,
            },
            {width: currentLevel?.left},
          ]}></Animatable.View>
      </View>
      {renderLevels()}

      {/* <View
        style={{
          position: 'absolute',
          width: width,
          height: 25,
          flexDirection: 'row',
          alignItems: 'center',
          top: 0,
        }}>
        {renderLevels()}
        
      </View> */}
    </View>
  );
}
export const styles = StyleSheet.create({
  circle: {
    width: scale(9),
    height: scale(9),
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    top: 0,
    width:scale(50),
    // backgroundColor:"red"
  },
  levelMarker: {
    position: 'absolute',
    // top: 6,
    top: verticalScale(7),
    zIndex: 1,
    // backgroundColor:"red",
    // justifyContent: "space-between",

    // backgroundColor:"red",
    // width:"100%"
  },
  levelText: {
    position: 'absolute',
    bottom: -15,
    fontSize: 12,
    color: '#FFC107',
  },
});

export {OrderTracking};

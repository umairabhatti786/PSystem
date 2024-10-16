import React, { useState } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: verticalScale(100),
          }}
        >
          <View style={styles.logoContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="center"
              source={images.welcome_vr}
            />
          </View>
          <View
            style={{
              paddingHorizontal: scale(40),
              gap: verticalScale(15),
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: scale(40), height: scale(40) }}
              resizeMode="contain"
              source={images.arrow_box}
            />
            <CustomText
              color={colors.black}
              style={{ textAlign: "center" }}
              lineHeight={22}
              text={"Dimensions in AR"}
              size={18}
            />
            <CustomText
              color={colors.grey}
              style={{ textAlign: "center" }}
              lineHeight={22}
              text={
                "Experience an Augmented Reality adventure like never before with PSystem"
              }
              size={14}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CustomButton 
          onPress={()=>navigation.navigate("HomeScreen")}
          text="Let’s Get Started" />
        </View>
      </ScreenLayout>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logoContainer: {
    width: scale(220),
    height: scale(220),
    borderBottomRightRadius: 999,
    borderBottomLeftRadius: 999,
    overflow: "hidden",
    borderBottomWidth: 1,
  },
  bottomContainer: {
    gap: verticalScale(60),
    paddingBottom: verticalScale(30),
    alignItems: "center",
  },
});

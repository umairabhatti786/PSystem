import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { font } from "../../../utils/font";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }: any) => {

    useEffect(()=>{

        setTimeout(() => {
            navigation.navigate("WelcomeScreen")

            
        }, 2000);




    },[])
  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          backgroundColor: colors.primary,
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image style={styles.logoContainer} source={images.logo} />
        </View>
        <View style={styles.bottomContainer}>
          <LottieView
            style={{ width: scale(60), height: scale(60) }}
            source={require("../../../assets/json/loading.json")}
            renderMode="HARDWARE"
            speed={0.5}
            autoPlay
            loop
          />

          <CustomText
            color={colors.white}
            fontWeight={"600"}
            fontFam={font.Montserrat_Medium}
            style={{ textAlign: "center" }}
            text={"© All rights reserved by this PRT app owner"}
            size={16}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoContainer: {
    width: scale(250),
    height: scale(250),
    marginTop: verticalScale(70),
  },
  bottomContainer: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(30),
    marginHorizontal: scale(40),
    alignItems: "center",
  },
});

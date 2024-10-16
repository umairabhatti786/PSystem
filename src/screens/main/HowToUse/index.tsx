import React, { useState } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import CustomHeader from "../../../components/CustomHeader";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import CustomMenu from "../../../components/CustomMenu";
import { font } from "../../../utils/font";

const HowToUse = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisable] = useState(false);

  return (
    <>
      <ScreenLayout
        style={{
          backgroundColor: colors.white,
          paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
          gap: verticalScale(15),
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "80%",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          source={images.room5}
        />
        <View
          style={{
            paddingHorizontal: scale(20),
            gap: verticalScale(30),
          }}
        >
          <CustomHeader
            leftIcon={images.left_arrow}
            rightIcon={images.more}
            onPressLeft={() => navigation.goBack()}
            onPressRight={() => setIsMenuVisable(true)}
          />
          <View
            style={{
              width: scale(160),
              height: scale(210),
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={appStyles.rowjustify}>
              <Image
                style={styles.cornerImage}
                source={images.top_left_corner}
                resizeMode="contain"
              />
              <Image
                style={styles.cornerImage}
                source={images.top_right_corner}
                resizeMode="contain"
              />
            </View>

            <Image
              style={{
                width: scale(100),
                height: scale(100),
                alignSelf: "center",
              }}
              source={images.how_to_scan}
              resizeMode="contain"
            />

            <View style={appStyles.rowjustify}>
              <Image
                style={styles.cornerImage}
                source={images.bottom_left_corner}
                resizeMode="contain"
              />
              <Image
                style={styles.cornerImage}
                source={images.bottom_right_corner}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View
            style={{
              ...appStyles.row,
              ...styles.bottomInnerContainer,
              ...appStyles.elevation,
            }}
          >
            <Image
              style={{ width: scale(28), height: scale(28) }}
              source={images.how_to_use}
              resizeMode="contain"
            />

            <CustomText
              color={colors.light_black}
              text={"How To Use"}
              size={13}
            />
          </View>
          <View
            style={{
              paddingTop: verticalScale(30),
              gap: verticalScale(20),
              flex: 1,
            }}
          >
            <CustomText
              color={colors.light_black}
              text={"To experience in"}
              lineHeight={25}
              label={
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Inter_Bold}
                  fontWeight="700"
                  text={" Augmented Reality "}
                  label={
                    <CustomText
                      color={colors.light_black}
                      text={"please Scan the"}
                      label={
                        <CustomText
                          color={colors.light_black}
                          fontFam={font.Inter_Bold}
                          fontWeight="700"
                          text={" Room "}
                          label={
                            <CustomText
                              color={colors.light_black}
                              text={
                                " from start using your camera, To watch the dimensions view."
                              }
                              size={15}
                            />
                          }
                          size={15}
                        />
                      }
                      size={15}
                    />
                  }
                  size={15}
                />
              }
              size={15}
            />

            <CustomText
              color={colors.light_black}
              text={"You can record the video during scanning with"}
              label={
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Inter_Bold}
                  fontWeight="700"
                  text={" 360 "}
                  label={
                    <CustomText
                      color={colors.light_black}
                      size={15}
                      text={"and share it with your team as well."}
                    />
                  }
                  size={15}
                />
              }
              size={15}
            />
          </View>

          <CustomButton
            onPress={() => navigation.navigate("ARScreen")}
            text="Start New Scan"
          >
            <Image
              style={{
                width: scale(20),
                height: scale(20),
                tintColor: colors.white,
              }}
              source={images.arrow_box}
            />
          </CustomButton>
        </View>
      </ScreenLayout>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisable}
      />
    </>
  );
};

export default HowToUse;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: scale(20),
    backgroundColor: colors.white,
    padding: scale(15),
    flex: 1,
    marginBottom: verticalScale(30),
    gap: verticalScale(15),
  },
  cornerImage: {
    width: scale(25),
    height: scale(25),
    tintColor: colors.white,
  },
  bottomContainer: {
    width: "100%",
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    backgroundColor: colors.white,
    marginTop: verticalScale(70),
    flex: 1,
    padding: scale(20),
    paddingBottom: verticalScale(30),
  },
  bottomInnerContainer: {
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(5),
    backgroundColor: colors.white,
    borderRadius: scale(999),
    position: "absolute",
    top: verticalScale(-15),
    alignSelf: "center",
    gap: scale(10),
  },
});

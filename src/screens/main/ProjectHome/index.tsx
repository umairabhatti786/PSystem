import React, { useState } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import CustomHeader from "../../../components/CustomHeader";
import CustomButton from "../../../components/CustomButton";
import CustomMenu from "../../../components/CustomMenu";
import { font } from "../../../utils/font";

const ProjectHome = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisable] = useState(false);
  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          backgroundColor: colors.light_lavender,
          paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
          gap: verticalScale(15),
        }}
      >
        <View style={{ flex: 1, gap: verticalScale(15) }}>
          <CustomHeader
            label="Recent Projects!"
            onPressLeft={() => setIsMenuVisable(true)}
          />
          <View
            style={{
              ...styles.container,
              gap: verticalScale(20),
              paddingBottom: verticalScale(20),
            }}
          >
            <View style={{ gap: verticalScale(4) }}>
              <CustomText
                color={colors.light_black}
                fontFam={font.Ubuntu_Medium}
                fontWeight="600"
                text={"Room Dimensions:"}
                size={15}
              />
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Medium}
                  fontWeight="600"
                  text={"H: 63 cm"}
                  size={15}
                />
              </View>
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Medium}
                  fontWeight="600"
                  text={"W: 74 sm"}
                  size={15}
                />
              </View>
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.light_black}
                  fontFam={font.Ubuntu_Medium}
                  fontWeight="600"
                  text={"L: 112 cm"}
                  size={15}
                />
              </View>
            </View>

            <CustomText
              color={colors.light_black}
              fontFam={font.Ubuntu_Medium}
              fontWeight="600"
              text={"Room Size:  STANDARD"}
              size={15}
            />
          </View>
          <View style={styles.container}>
            <Image
              style={{
                width: scale(250),
                height: verticalScale(250),
                alignSelf: "center",
              }}
              source={images.home_structure}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <CustomButton
            onPress={() => navigation.navigate("QuotationGeneration")}
            text="Submit The Results"
          />
          <CustomButton
            borderColor={colors.primary}
            textColor={colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            // onPress={() => navigation.navigate("TermAndConditions")}
            text="Measure Again"
          />
        </View>
      </ScreenLayout>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisable}
      />
    </>
  );
};

export default ProjectHome;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingBottom: verticalScale(30),
    alignItems: "center",
    gap: verticalScale(15),
  },

  container: {
    width: "100%",
    borderRadius: scale(20),
    backgroundColor: colors.white,
    padding: scale(15),
  },
});

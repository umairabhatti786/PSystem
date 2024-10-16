import React, { useState } from "react";
import { View, StyleSheet, Image, Platform, TouchableOpacity } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import CustomHeader from "../../../components/CustomHeader";
import CustomButton from "../../../components/CustomButton";
import CustomMenu from "../../../components/CustomMenu";
import { font } from "../../../utils/font";
import CustomInput from "../../../components/CustomInput";

const QuotationGeneration = ({ navigation }: any) => {
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
            label="Generate Quote!"
            onPressLeft={() => setIsMenuVisable(true)}
            rightIcon={images.next_arrow}
          />
          <View
            style={{
              ...styles.container,
              gap: verticalScale(20),
              paddingBottom: verticalScale(20),
            }}
          >
            <CustomText
              color={colors.light_black}
              fontFam={font.Ubuntu_Medium}
              fontWeight="600"
              text={"Measurements from AR scanning"}
              size={15}
            />
            <View style={{ gap: verticalScale(4) }}>
              <CustomText
                color={colors.black + "40"}
                fontFam={font.Ubuntu_Regular}
                text={"Room Dimensions:"}
                size={15}
              />
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Regular}
                  text={"H: 63 cm"}
                  size={15}
                />
              </View>
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Regular}
                  text={"W: 74 sm"}
                  size={15}
                />
              </View>
              <View style={{ flexDirection: "row", gap: scale(6) }}>
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Bold}
                  fontWeight="700"
                  text={"."}
                  style={{ marginTop: verticalScale(-7) }}
                  size={20}
                />
                <CustomText
                  color={colors.black + "40"}
                  fontFam={font.Ubuntu_Regular}
                  text={"L: 112 cm"}
                  size={15}
                />
              </View>
            </View>

            <CustomText
              color={colors.black + "40"}
              fontFam={font.Ubuntu_Medium}
              fontWeight="600"
              text={"Room Size:  STANDARD"}
              size={15}
            />
          </View>
          <View style={{ gap: verticalScale(10) }}>
            <CustomInput placeholder="Rate per unit" />

            <CustomInput placeholder="Quotation breakdown" />
          </View>

          <TouchableOpacity
            style={{
              ...styles.container,
              height: verticalScale(120),
              alignItems: "center",
              justifyContent:"center",
              backgroundColor: "#F3F6FE",
              borderRadius: scale(7),
              borderWidth:2,
              borderStyle:"dashed",
              borderColor:colors.black+"30",
              gap:verticalScale(15)
            }}
          >
            <View style={styles.uplaodImageContainer}>
              <Image style={styles.icon} source={images.uplaod} />
            </View>
            <View style={{gap:verticalScale(5)}}>
            <CustomText
              color={"#1760EC"}
              fontFam={font.Inter_SemiBold}
              fontWeight="600"
              text={"Click to upload Logo"}
              size={14}
            />
             <CustomText
              color={"#1D3557"}
              fontWeight="400"
              fontFam={font.Inter_Regular}
              text={"PDF (max. size 5mb)"}
              size={13}
            />

            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <CustomButton
            onPress={() => navigation.navigate("ReportScreen")}
            text="Submit"
          />
          <CustomButton
            borderColor={colors.primary}
            textColor={colors.primary}
            bgColor={"transparent"}
            borderWidth={1}
            onPress={() => navigation.navigate("TermAndConditions")}
            text="Preview"
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

export default QuotationGeneration;

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
  uplaodImageContainer: {
    width: scale(40),
    height: scale(40),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: scale(7),
  },
  icon: {
    width: scale(20),
    height: scale(20),
  },
});

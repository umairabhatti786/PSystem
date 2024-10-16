import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
import { appStyles } from "../../../utils/AppStyles";

const ReportScreen = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisable] = useState(false);

  const ProductItems = [
    {
      title: "Dashboard Design",
      quantity: "Quantity: 3 pages",
      price: "$1,025.27",
    },
    {
      title: "Component Design & Ar",
      quantity: "Quantity: 1.5 hours",
      price: "$145.92",
    },
  ];
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: colors.light_lavender,
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:verticalScale(120) }}
      >
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
              label="Home Project 1"
              onPressLeft={() => setIsMenuVisable(true)}
            />
            <View
              style={{
                ...styles.container,
                gap: verticalScale(15),
              }}
            >
              <View
                style={{
                  borderWidth: 0.3,
                  borderColor: colors.grey200,
                  borderRadius: scale(8),
                  overflow: "hidden",
                  backgroundColor: "#EFEFEF",
                  gap: verticalScale(10),
                }}
              >
                <View
                  style={{
                    ...styles.container,
                    gap: verticalScale(15),
                    borderRadius: scale(8),
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      gap: verticalScale(15),
                      width: "60%",
                      borderRightColor: colors.grey200,
                      borderRightWidth: 0.3,
                    }}
                  >
                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        color={colors.grey200}
                        fontFam={font.Inter_Regular}
                        text={"BUSINESS INFO"}
                        size={14}
                      />
                      <CustomText
                        color={colors.black}
                        fontFam={font.Inter_Regular}
                        text={"No.102597"}
                        size={13}
                      />
                    </View>

                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        color={colors.black}
                        fontFam={font.Inter_Regular}
                        text={"7 Design Studio"}
                        size={13}
                      />
                      <CustomText
                        color={colors.grey200}
                        fontFam={font.Inter_Regular}
                        fontWeight="400"
                        text={"7luyuhang@gmail.com"}
                        size={15}
                      />
                    </View>
                  </View>
                  <View style={{ gap: verticalScale(10) }}>
                    <CustomText
                      color={colors.grey200}
                      fontFam={font.Inter_Regular}
                      text={"SIGNATURE"}
                      size={15}
                    />
                    <Image
                      style={{
                        width: scale(80),
                        height: scale(60),
                        alignSelf: "center",
                      }}
                      source={images.signature}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <View
                  style={{
                    ...styles.container,
                    gap: verticalScale(8),
                    borderRadius: scale(8),
                  }}
                >
                  <View style={appStyles.rowjustify}>
                    <CustomText
                      color={colors.grey200}
                      fontFam={font.Inter_Regular}
                      text={"CLIENTS"}
                      size={14}
                    />
                    <Image
                      style={{ width: scale(15), height: scale(15) }}
                      source={images.horizontal_dots}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={appStyles.rowjustify}>
                    <View style={{ ...appStyles.row, gap: scale(8) }}>
                      <Image
                        style={{
                          width: scale(38),
                          height: scale(38),
                          borderRadius: scale(8),
                        }}
                        source={images.nike}
                        resizeMode="contain"
                      />
                      <View style={{ gap: scale(3) }}>
                        <CustomText
                          color={colors.black}
                          fontFam={font.Inter_Regular}
                          text={"Nike Product"}
                          size={14}
                        />
                        <CustomText
                          color={colors.grey200}
                          fontWeight="400"
                          fontFam={font.Inter_Regular}
                          text={"develop-project@gmail.com"}
                          size={12}
                        />
                      </View>
                    </View>
                    <TouchableOpacity>
                      <CustomText
                        color={colors.primary100}
                        fontFam={font.Inter_Regular}
                        text={"Edit"}
                        size={15}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    ...styles.container,
                    gap: verticalScale(10),
                    borderRadius: scale(8),

                    paddingTop: verticalScale(10),
                  }}
                >
                  <View style={{ ...appStyles.rowjustify }}>
                    <CustomText
                      color={colors.grey200}
                      fontFam={font.Inter_Regular}
                      text={"ITEMS"}
                      size={14}
                    />
                    <CustomText
                      color={colors.grey200}
                      fontFam={font.Inter_Regular}
                      text={"Price"}
                      size={14}
                    />
                  </View>
                  {ProductItems.map((item, index) => {
                    return (
                      <View
                        key={index.toString()}
                        style={{ ...appStyles.rowjustify }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: scale(8),
                            width: "62%",
                          }}
                        >
                          <View
                            style={{
                              width: scale(16),
                              height: scale(16),
                              borderRadius: scale(3),
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "#EFEFEF",
                            }}
                          >
                            <CustomText
                              color={colors.black + "50"}
                              fontFam={font.Inter_Regular}
                              text={index + 1}
                              size={12}
                            />
                          </View>
                          <View style={{ gap: scale(3), width: "100%" }}>
                            <CustomText
                              color={colors.black}
                              fontFam={font.Inter_Regular}
                              text={item.title}
                              numberOfLines={1}
                              size={15}
                            />
                            <CustomText
                              color={colors.grey200}
                              fontWeight="400"
                              numberOfLines={1}
                              fontFam={font.Inter_Regular}
                              text={item.quantity}
                              size={13}
                            />
                          </View>
                        </View>
                        <View>
                          <CustomText
                            color={colors.black}
                            fontWeight="600"
                            fontFam={font.Inter_SemiBold}
                            text={item.price}
                            size={17}
                          />
                        </View>
                      </View>
                    );
                  })}
                  <View style={{ marginTop: verticalScale(5) }}>
                    <View style={{ ...appStyles.rowjustify }}>
                      <View
                        style={{ ...styles.circleEdge, marginLeft: scale(-18) }}
                      ></View>
                      <View
                        style={{
                          flex: 4,
                          height: 1.5,
                          backgroundColor: "#E6E6E6",
                        }}
                      />
                      <View
                        style={{
                          ...styles.circleEdge,
                          marginRight: scale(-18),
                        }}
                      ></View>
                    </View>
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        top: verticalScale(-8),
                      }}
                    >
                      <CustomButton
                        onPress={() => navigation.navigate("TermAndConditions")}
                        width={scale(100)}
                        fontFam={font.Inter_Regular}
                        height={35}
                        text="+ Ass Item"
                      ></CustomButton>
                    </View>
                  </View>

                  <View style={{ ...appStyles.rowjustify }}>
                    <CustomText
                      color={"#434343"}
                      fontFam={font.Inter_Regular}
                      text={"Subtotal"}
                      size={14}
                    />
                    <CustomText
                      color={"#434343"}
                      fontFam={font.Inter_Regular}
                      text={"$1,171.19"}
                      size={14}
                    />
                  </View>

                  <View style={{ ...appStyles.rowjustify }}>
                    <CustomText
                      color={"#434343"}
                      fontFam={font.Inter_Regular}
                      text={"Discount "}
                      label={
                        <CustomText
                          color={"#43434350"}
                          fontFam={font.Inter_Regular}
                          text={" 30%"}
                          size={14}
                        />
                      }
                      size={14}
                    />
                    <CustomText
                      color={"#434343"}
                      fontFam={font.Inter_Regular}
                      text={"- $351.35"}
                      size={14}
                    />
                  </View>

                  <View style={{ ...appStyles.rowjustify }}>
                    <View style={{ flexDirection: "row", gap: scale(3) }}>
                      <CustomText
                        color={"#434343"}
                        fontFam={font.Inter_Regular}
                        text={"Tax"}
                        size={14}
                      />
                      <Image
                        style={{ width: scale(15), height: scale(15) }}
                        source={images.info}
                        resizeMode="contain"
                      />
                    </View>

                    <CustomText
                      color={"#434343"}
                      fontFam={font.Inter_Regular}
                      text={"+ $117.11"}
                      size={14}
                    />
                  </View>

                  <View style={{ ...appStyles.rowjustify }}>
                    <CustomText
                      color={"#434343"}
                      fontWeight="600"
                      fontFam={font.Inter_SemiBold}
                      text={"Total"}
                      size={14}
                    />
                    <CustomText
                      color={"#434343"}
                      fontWeight="600"
                      fontFam={font.Inter_SemiBold}
                      text={"$936.95"}
                      size={16}
                    />
                  </View>
                  <View
                    style={{
                      ...appStyles.row,
                      gap: scale(8),
                      marginBottom: verticalScale(-17),
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((it, ind) => {
                      return <View style={styles.circleEdge} />;
                    })}
                  </View>
                </View>
              </View>
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
        </ScreenLayout>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={() => navigation.navigate("TermAndConditions")}
          text="Submit"
        />
        <CustomButton
          borderColor={colors.primary}
          textColor={colors.primary}
          bgColor={colors.light_lavender}
          borderWidth={1}
          onPress={() => navigation.navigate("TermAndConditions")}
          text="Preview"
        />
      </View>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisable}
      />
    </>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    bottom: verticalScale(30),
    alignItems: "center",
    gap: verticalScale(15),
    position: "absolute",
    width: "90%",
    alignSelf: "center",
  },

  container: {
    width: "100%",
    borderRadius: scale(20),
    backgroundColor: colors.white,
    padding: scale(10),
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
  circleEdge: {
    width: scale(16),
    height: scale(16),
    borderRadius: 999,
    backgroundColor: "#E6E6E6",
  },
});

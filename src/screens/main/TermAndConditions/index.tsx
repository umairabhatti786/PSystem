import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
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

const TermAndConditions = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisable] = useState(false);

  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
          backgroundColor: colors.primary,
          paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
          gap: verticalScale(15),
        }}
      >
        <CustomHeader
          leftIcon={images.left_arrow}
          rightIcon={images.more}
          onPressLeft={() => navigation.goBack()}
          onPressRight={() => setIsMenuVisable(true)}
        />
        <View style={styles.container}>
          <View style={{ ...appStyles.row, gap: scale(10) }}>
            <View style={{ gap: verticalScale(7), width: "80%" }}>
              <CustomText
                color={colors.grey100}
                fontFam={font.Inter_Regular}
                text={"Last update: 24 July 2023"}
                size={12}
              />
              <CustomText
                color={colors.light_black}
                fontWeight="700"
                fontFam={font.Inter_Bold}
                text={"Terms & Conditions"}
                size={20}
              />
              <CustomText
                color={colors.grey100}
                fontFam={font.Inter_Regular}
                text={"Measurements in AR app"}
                size={14}
              />
            </View>

            <View
              style={{
                ...appStyles.elevation,

                padding: scale(5),
                backgroundColor: colors.white,
                borderRadius: scale(10),
              }}
            >
              <Image
                style={{ width: scale(25), height: scale(25) }}
                source={images.arrow_box}
              />
            </View>
          </View>

          <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
            <CustomText
              color={colors.grey100}
              fontWeight="400"
              fontFam={font.Inter_Regular}
              lineHeight={26}
              text={`Lorem ipsum dolor sit amet consectetur. Consectetur risus nulla iaculis ac faucibus lectus cras bibendum dignissim. Dolor turpis et euismod lacinia vitae amet quis. Ultrices morbi porttitor tortor lobortis ut turpis vestibulum. In etiam odio neque at sed consequat tristique quis. Nunc sit diam nibh vestibulum donec. Est volutpat nibh morbi aliquam gravida potenti.\n\nSed tellus cursus sit leo viverra ut facilisi id. Eget mauris ipsum accumsan nunc nunc justo. Nec tristique nec elementum orci. Orci amet aliquet elit amet ornare aliquam porta pretium lectus. Nisi nisl mattis pulvinar dignissim tempus. In sit orci donec sem molestie quis placerat.\n\nNec tristique nec elementum orci. Orci amet aliquet elit amet ornare aliquam porta pretium lectus. Nisi nisl mattis pulvinar dignissim tempus. In sit orci donec sem molestie quis placerat.`}
              size={14}
            />
          </ScrollView>
          <CustomButton
            onPress={() => navigation.navigate("HowToUse")}
            text="Agree"
          ></CustomButton>
        </View>
      </ScreenLayout>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisable}
      />
    </>
  );
};

export default TermAndConditions;

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
});

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
import ProjectContainer from "./ProjectContainer";
import { appStyles } from "../../../utils/AppStyles";
import AddProjectBox from "./AddProjectBox";
import CustomButton from "../../../components/CustomButton";
import CustomMenu from "../../../components/CustomMenu";
import { recentProjectsData } from "../../../utils/Data";

const HomeScreen = ({ navigation }: any) => {
  const [isMenuVisible, setIsMenuVisable] = useState(false);

  const ScanConainer = ({ title, img, backgroundColor }: any) => {
    return (
      <View
        style={{
          ...styles.scanMain,
          backgroundColor: backgroundColor || colors.light_green,
        }}
      >
        <Image style={styles.scanImg} source={img} />
        <CustomText
          color={colors.light_black}
          style={{ textAlign: "center" }}
          text={title}
          size={12}
        />
      </View>
    );
  };
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.light_lavender }}
        contentContainerStyle={{ paddingBottom: verticalScale(20) }}
      >
        <ScreenLayout
          style={{
            paddingHorizontal: scale(20),
            backgroundColor: colors.light_lavender,
            paddingTop: verticalScale(
              Platform.OS == "ios" ? verticalScale(40) : verticalScale(10)
            ),
            gap: verticalScale(15),
          }}
        >
          <CustomHeader
            label="Recent Projects!"
            onPressLeft={() => setIsMenuVisable(true)}
          />
          <View style={styles.container}>
            <View
              style={{
                ...appStyles.row,
                gap: scale(10),
                flexWrap: "wrap",
              }}
            >
              {recentProjectsData.map((item, index) => {
                return (
                  <View key={index.toString()}>
                    <ProjectContainer data={item} />
                  </View>
                );
              })}
              <AddProjectBox />
            </View>
          </View>
          <View style={styles.container}>
            <View
              style={{
                ...appStyles.rowjustify,
                flexWrap: "wrap",
                gap: verticalScale(12),
              }}
            >
              <ScanConainer title={"Scans"} img={images.scans} />
              <ScanConainer
                title={"Scans"}
                img={images.quotes}
                backgroundColor={colors.light_blue}
              />
              <ScanConainer
                title={"Invoices"}
                img={images.Invoices}
                backgroundColor={colors.light_yellow}
              />
              <ScanConainer
                title={"Reports"}
                img={images.reports}
                backgroundColor={colors.light_orange}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <CustomButton
              onPress={() => navigation.navigate("TermAndConditions")}
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
      </ScrollView>

      <CustomMenu
        isModalVisible={isMenuVisible}
        setModalVisible={setIsMenuVisable}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
  },

  scanMain: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(12),
    borderRadius: scale(15),
    alignItems: "center",
    width: "47%",
  },
  scanImg: { width: scale(70), height: scale(70) },
  container: {
    width: "100%",
    borderRadius: scale(20),
    backgroundColor: colors.white,
    padding: scale(15),
  },
});

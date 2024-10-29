import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

import Modal from "react-native-modal";
import { windowWidth } from "../../../utils/Dimensions";
import { colors } from "../../../utils/colors";
import { scaleZetaToMatchClamps } from "react-native-reanimated/lib/typescript/animation/springUtils";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";

const ARGuideModal = ({
  modalVisible,
  setModalVisible,
  onCancel,
  onLogout,
  onComplete
}: any) => {
  const [activeGuide, setActiveGuide] = useState(0);
  const guideRef = useRef<any>(null);
  const guideData = [
    {
      image: images.work_guide,
      title: "How it works",
      des: "Move around the pallet and scan by 360 degree",
    },
    {
      image: images.scan_guide,
      title: "How to scan ",
      des: "Keep your camera on the pallet via scanning",
    },
    {
      image: images.video_record_guide,
      title: "Video record",
      des: "You can record the video while you scanning.",
    },
  ];

  const goToNextIndex = () => {
    if (activeGuide < guideData.length - 1) {
      const newIndex = activeGuide + 1;
      setActiveGuide(newIndex);
      guideRef.current.scrollToIndex({ index: newIndex });
    } else {
      setModalVisible(false);
      onComplete()
    }
  };

  // Function to move to the previous index
  const goToPreviousIndex = () => {
    if (activeGuide > 0) {
      const newIndex = activeGuide - 1;
      setActiveGuide(newIndex);
      guideRef.current.scrollToIndex({ index: newIndex });
    }
    else {
      setModalVisible(false);


    }
  };

  return (
    <Modal
      isVisible={modalVisible}
      deviceWidth={windowWidth}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="rgba(0,0,0,0.6)"
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: colors.white,
            borderRadius: scale(8),
            paddingHorizontal: scale(15),
            paddingTop: verticalScale(15),
            paddingBottom: verticalScale(20),
            gap: verticalScale(20),
          }}
        >
          <FlatList
            data={guideData}
            ref={guideRef}
            horizontal
            scrollEnabled={false} // Disable manual scrolling
            // style={{width:"100%"}}
            showsHorizontalScrollIndicator={false}
            pagingEnabled // Allows snapping to each item automatically
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <>
                  <View
                    style={{
                      gap: verticalScale(10),
                      width: scale(250),
                      marginRight: scale(10),
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: verticalScale(130),
                        borderRadius: scale(8),
                      }}
                      // resizeMode={"contain"}
                      source={item.image}
                    />
                    <View style={{ gap: verticalScale(8) }}>
                      <CustomText
                        color={colors.light_black}
                        fontFam={font.Inter_SemiBold}
                        fontWeight="600"
                        style={{ textAlign: "center" }}
                        text={item.title}
                        size={13}
                      />
                      <CustomText
                        color={"#475467"}
                        fontFam={font.Inter_Regular}
                        fontWeight="400"
                        style={{ textAlign: "center" }}
                        text={item.des}
                        size={12}
                      />
                    </View>
                  </View>
                </>
              );
            }}
          />

          <View
            style={{ ...appStyles.row, gap: scale(4), alignSelf: "center" }}
          >
            {guideData.map((it, index) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    width: scale(5),
                    height: scale(5),
                    borderRadius: 999,
                    backgroundColor:
                      activeGuide == index ? colors.primary : "#E1E1E1",
                  }}
                ></View>
              );
            })}
          </View>

          <View style={{ ...appStyles.rowjustify, width: "100%" }}>
            <CustomButton
              height={40}
              width={scale(125)}
              bgColor={colors.white}
              borderWidth={1}
              textColor={"#344054"}
              borderColor={"#D0D5DD"}
              onPress={goToPreviousIndex}
              text="Back"
            />

            <CustomButton
              height={40}
              width={scale(125)}
              onPress={goToNextIndex}
              text={
                guideData.length == activeGuide + 1
                  ? "Let’s get started"
                  : "Confirm"
              }
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>{
            setModalVisible(false)
            onComplete()

          }}
          style={styles.box}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={ images.cancel}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ARGuideModal;

const styles = StyleSheet.create({
  imgContainer: {
    width: 160,
    height: 160,
    borderRadius: 999,
    // backgroundColor: colors.grey400,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: scale(43),
    height: verticalScale(47),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEEAF56640",
    borderWidth:1,
    borderColor:colors.white,
    borderRadius: scale(17),
    marginTop:verticalScale(60)
  },
  icon: {
    width: scale(12),
    height: scale(12),
  },
});

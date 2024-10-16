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
  
  const ScanCompleteModal = ({
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
        backdropColor="rgba(0,0,0,0.2)"
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor: colors.primary,
              borderRadius: scale(10),
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(15),
              paddingBottom: verticalScale(20),
              gap: verticalScale(20),
              borderWidth:1,
              borderColor:colors.white
            }}
          >

<Image
                        style={{
                          width: scale(50),
                          height: scale(50),
                          borderRadius:999,
                        }}
                        // resizeMode={"contain"}
                        source={images.check}
                      />
                         <CustomText
                          color={colors.white}
                          fontFam={font.Inter_Bold}
                          fontWeight="700"
                          style={{ textAlign: "center" }}
                          text={"Scan completed"}
                          size={15}
                        />

<CustomButton
                height={40}
                // width={scale(125)}
                bgColor={colors.white}
                textColor={colors.black}
                onPress={goToPreviousIndex}
                text="See the results"
              />
  
              

                    
        
  
  
            
          </View>
  
    
        </View>
      </Modal>
    );
  };
  
  export default ScanCompleteModal;
  
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
  
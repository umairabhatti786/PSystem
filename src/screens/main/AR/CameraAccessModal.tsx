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
  
  const CameraAccessModal = ({
    modalVisible,
    setModalVisible,
    onAllow
  }: any) => {
   
  
  
  
    // Function to move to the previous index
   
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
              width: "80%",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor:"rgba(0,0,0,0.3)",
              borderRadius: scale(10),
              paddingHorizontal: scale(15),
              paddingTop: verticalScale(15),
              paddingBottom: verticalScale(20),
              gap: verticalScale(20),
              borderWidth:1,
              borderColor:colors.white
            }}
          >
            <View style={{gap:verticalScale(2)}}>

            <CustomText
                          color={colors.white}
                          fontFam={font.Inter_Bold}
                          fontWeight="700"
                          style={{ textAlign: "center" }}
                          text={"Camera Access"}
                          size={15}
                        />

                         <CustomText
                          color={colors.white}
                          fontFam={font.Inter_Regular}
                          text={"App would like to access the camera"}
                          size={13}
                        />

            </View>
           

<CustomButton
                height={40}
                // width={scale(125)}
                fontFam={font.Ubuntu_Bold}
                fontWeight={"700"}
                borderRadius={10}
                bgColor={colors.white}
                textColor={colors.black}
                onPress={onAllow}
                text="Allow"
              />
  
              

                    
        
  
  
            
          </View>
  
    
        </View>
      </Modal>
    );
  };
  
  export default CameraAccessModal;
  
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
  
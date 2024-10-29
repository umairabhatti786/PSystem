import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { font } from "../../../utils/font";
import LottieView from "lottie-react-native";
import { RNCamera } from "react-native-camera";
import ARGuideModal from "./ARGuideModal";
import { appStyles } from "../../../utils/AppStyles";
import ScanCompleteModal from "./ScanCompleteModal";
import CameraAccessModal from "./CameraAccessModal";

const ARScreen = ({ navigation }: any) => {
  const cameraRef = useRef<any>();
  const [isCompleteGuide, setIsCompleteGuide] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [isScanComplete,setIsScanComplete]=useState(false)
  const [isCameraAccess,setIsCameraAccess]=useState(false)

  const [isARGuide, setIsARGuide] = useState(false);

  useEffect(()=>{
    setIsCameraAccess(true)


  },[])

  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={styles.box}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={images.cancel}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          //   onPress={onPressRight}
          style={styles.box}
        >
          <Image
            style={{
              width: scale(15),
              height: scale(15),

            }}
            resizeMode="contain"
            source={images.setting}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <ScreenLayout
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <View style={{ flex: 1 }}>
          <RNCamera
            ref={cameraRef}
            captureAudio={false} // Disable audio capture
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            // captureAudio={true}
            onRecordingEnd={() => console.log("EndRecord")}
          />
          <View
            style={{
              position: "absolute",
              top: verticalScale(Platform.OS=="ios"? 50:20),
              width: "100%",
              paddingHorizontal: scale(20),
            }}
          >
            <Header />
          </View>

          {isCompleteGuide && (
            <View
              style={{
                width: scale(160),
                height: scale(210),
                alignSelf: "center",
                justifyContent: "space-between",
                position: "absolute",
                top: "35%",
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
          )}
          {isScanned && (
            <View
              style={{
                position: "absolute",
                bottom: verticalScale(40),
                alignSelf: "center",
              }}
            >
              <TouchableOpacity 
              activeOpacity={0.5}
              onPress={()=>setIsScanComplete(true)}
              style={{ width: scale(60), height: scale(60) }}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={images.check_button}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScreenLayout>

      <ARGuideModal
        modalVisible={isARGuide}
        onComplete={() => {
          setIsCompleteGuide(true);
          setTimeout(() => {
            setIsCompleteGuide(false);
            setIsScanned(true);
          }, 2000);
        }}
        setModalVisible={setIsARGuide}
      />

<ScanCompleteModal
        modalVisible={isScanComplete}
        onResult={() => {
          setIsScanComplete(false);
          setTimeout(() => {
            navigation.navigate("ProjectHome")
          }, 500);
        }}
        setModalVisible={setIsScanComplete}
      />

<CameraAccessModal
        modalVisible={isCameraAccess}
        onAllow={() => {
          setIsCameraAccess(false);
          setTimeout(() => {
            setIsARGuide(true)
          }, 500);
        }}
        setModalVisible={setIsScanComplete}
      />
    </>
  );
};

export default ARScreen;

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
  box: {
    width: scale(43),
    height: verticalScale(47),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DEEAF56640",
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: scale(17),
  },
  icon: {
    width: scale(13),
    height: scale(13),
  },
  cornerImage: {
    width: scale(25),
    height: scale(25),
    tintColor: colors.white,
  },
});

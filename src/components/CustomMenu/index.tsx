import React, { useState } from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { images } from "../../assets/images";
import LogoutModal from "../LogoutModal";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/reducers/authReducer";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  modalBackgroundColor?: any;
  onNext?: any;
  setIsLogoutVisible?: any;
}

const CustomMenu: React.FC<Props> = ({ isModalVisible, setModalVisible }) => {
  const windowWidth = useWindowDimensions().width;
  const navigation: any = useNavigation();
  const menuData = [
    {
      title: "Profile",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          // navigation.navigate('DiscountsScreen');
        }, 500);
      },
    },
    {
      title: "About the app",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          // navigation.navigate('SendGiftScreen');
        }, 500);
      },
    },
    {
      title: "How to use",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          // navigation.navigate('BookRequestScreen');
        }, 500);
      },
    },
    {
      title: "Terms & Conditions",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          // navigation.navigate('About');
        }, 500);
      },
    },
    {
      title: "Privacy Policy",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          // navigation.navigate('TermsAndCondirtions');
        }, 500);
      },
    },
    {
      title: "Get the book",
      onPress: () => {
        setModalVisible(false);
        setTimeout(() => {
          navigation.navigate("PrivacyPolicy");
        }, 500);
      },
    },
  ];
  return (
    <>
      <Modal
        style={{
          flex: 1,
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.light_blue,
          paddingHorizontal: scale(20),
          gap: verticalScale(10),
          paddingTop: "15%",
        }}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        deviceWidth={windowWidth}
        isVisible={isModalVisible}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="transparent"
        customBackdrop={
          <Pressable
            style={{ height: "100%", width: "100%" }}
            onPress={() => setModalVisible?.(false)}
          ></Pressable>
        }
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>setModalVisible(false)}
          style={styles.box}
        >
          <Image
            style={{ width: scale(15), height: scale(15) }}
            resizeMode="contain"
            source={images.cross}
          />
        </TouchableOpacity>
        <View
          style={{
            padding: scale(7),
            borderRadius: 999,
            backgroundColor: "#d9e7ff",
          }}
        >
          <View style={{ borderRadius: 999, backgroundColor: colors.primary }}>
            <Image
              style={{ width: scale(85), height: scale(85) }}
              source={images.logo}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            flex: 1,
            gap: verticalScale(10),
            marginTop: verticalScale(10),
          }}
        >
          {menuData.map((item, index) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                onPress={item.onPress}
                activeOpacity={0.5}
                style={{
                  width: "60%",
                  alignItems: "center",
                  height: verticalScale(25),
                }}
              >
                <CustomText
                  text={item?.title}
                  color={colors.light_black}
                  size={16}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.light_blue,
  },

  box: {
    width: scale(43),
    height: scale(43),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 999,
    alignSelf: "flex-end",
  },
});

export default CustomMenu;

import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import CustomMenu from "../CustomMenu";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
type Props = {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightIcon?: any;
  leftIcon?: any;
  label?: string;
};

const CustomHeader = ({
  onPressLeft,
  onPressRight,
  rightIcon,
  leftIcon,
  label,
}: Props) => {
  const navigation: any = useNavigation();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  return (
    <>
      <View
        style={{
          ...appStyles.rowjustify,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressLeft}
          style={styles.box}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={leftIcon || images.more}
          />
        </TouchableOpacity>
        {
          label&&(
            <CustomText
            text={label}
            color={colors.black}
            size={16}
          />

          )
        }

       

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressRight}
          style={styles.box}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={rightIcon || images.bell}
          />
        </TouchableOpacity>
      </View>

     
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  box: {
    width: scale(43),
    height: scale(43),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 999,
  },
  icon: {
    width: scale(23),
    height: scale(23),
  },
});

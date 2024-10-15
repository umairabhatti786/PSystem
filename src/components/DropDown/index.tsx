import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";
import CustomText from "../CustomText";

const DropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  borderWidth,
  onSelect,
  error,
  label,
  mainWidth,
}: any) => {
  const [open, setOpen] = useState(false);
console.log("disapperChat",value)
  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={images.down_arrow}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View>
    

      <Dropdown
        style={{
          ...styles.dropdown,
          width: mainWidth || "100%",
          // borderWidth: 1,
          backgroundColor: colors.white,
        }}
        containerStyle={{
          minHeight: 100,
          // borderWidth: 1,
          borderRadius: scale(10),
          overflow: "hidden",
          width:dropWidth|| "90%",
        }}
        placeholderStyle={{
          color: placeholderColor || colors.grey,
          fontSize: 14,
          fontFamily:font.WorkSans_Regular,
          fontWeight:"500"
          
        }}
        selectedTextStyle={{
          fontSize:14,
          color: colors.black,
          fontFamily:font.WorkSans_Regular,
          fontWeight:"500"

        }}
        renderRightIcon={renderRightIcon}
        renderItem={(item) => {
          return (
            <View
              style={{
                height: verticalScale(30),
                justifyContent: "center",
                paddingHorizontal: scale(10),
                paddingTop:verticalScale(5)
              }}
            >
              <CustomText
                text={item.label}
                size={14}
                color={colors.black}
              />
            </View>
          );
        }}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder || "Select"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={onSelect}
      />

      {error && (
        <View style={{ marginTop: verticalScale(5), alignSelf: "flex-end" }}>
          <CustomText size={10} text={error} color={"#FF0000"} />
        </View>
      )}
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(39),
    paddingHorizontal: scale(15),
    backgroundColor: colors.white,
    borderRadius: scale(10),
    

  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    height: scale(17),
    width: scale(17),
  },
});

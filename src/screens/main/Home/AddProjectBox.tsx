import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";

interface data {
  title?: string;
  image?: any;
}

type Props = {
  data?: data;
};

const AddProjectBox = ({ data }: Props) => {
  return (
    <TouchableOpacity
    activeOpacity={0.5}
     style={{ ...style.main }}>
      <View
        style={{
          width: scale(65),
          alignItems: "center",
          justifyContent: "center",
          gap: verticalScale(12),
          borderStyle:"dashed",
          borderColor:"#3a475e",
          borderWidth:1,
          borderRadius:scale(7),
          height:verticalScale(75)
        }}
      >
        <Image style={style.img} source={images.plus} />
        <CustomText
          color={"#3a475e"}
          style={{ textAlign: "center" }}
          text={"Add Project"}
          size={10}
        />
      </View>
    </TouchableOpacity>
  );
};
export default AddProjectBox;

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.black,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(15),
    borderRadius: scale(10),
    gap: verticalScale(12),
    height:verticalScale(105),
    alignItems:"center",
    justifyContent:"center"

  },
  img: { width: scale(18), height: scale(18) },
});

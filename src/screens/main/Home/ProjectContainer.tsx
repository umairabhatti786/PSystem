import { Image, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";

interface data {
  title?: string;
  image?: any;
}

type Props = {
  data?: data;
};

const ProjectContainer = ({ data }: Props) => {
  return (
    <View style={{ ...style.main }}>
      <Image style={style.img} source={data?.image} />
      <CustomText
        color={colors.white}
        style={{ textAlign: "center" }}
        text={data?.title}
        size={13}
      />
    </View>
  );
};
export default ProjectContainer;

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.black,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(15),
    borderRadius: scale(10),
    gap: verticalScale(12),
    height:verticalScale(105)
  },
  img: { width: scale(65), height: scale(55), borderRadius: scale(5) },
});

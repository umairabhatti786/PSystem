import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { font } from "../../utils/font";
import { appStyles } from "../../utils/AppStyles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  placeholder?: string;
  navigation?: any;
  value?: any;
  onPressClose?: any;
  backgroundColor?: string;
  width?: any;
  isCross?: any;
  height?: any;
  onChangeText?: (text:any) => void;
  onFocus?: () => void;
  leftSource?: any;
  onBack?: () => void;
  filter?:boolean

  
};

const CustomSearch = ({
  placeholder,
  onChangeText,

  value,
  onPressClose,
  backgroundColor,
  width,
  isCross,
  height,
  onFocus,
  leftSource,
  onBack,
  filter
}: Props) => {
  const navigation:any=useNavigation()
  return (
    <View style={{...appStyles.rowjustify,width:"100%"}}>

<View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width || "100%",
        backgroundColor: backgroundColor || colors.white,
        height: verticalScale(height || 39),
        paddingHorizontal: scale(15),
        borderRadius: scale(8),
      }}
    >
      <View
        style={{
          flex: 1,
          gap: scale(10),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
       

        <TextInput
          style={{
            flex: 1,
            fontSize: 15,
            fontFamily: font.WorkSans_Regular,
            padding: 0,
            color:colors.black
          }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholderTextColor={colors.grey}
        />
      </View>
      <Image
            source={leftSource || images.search}
            resizeMode="contain"
            style={{
              width: scale(18),
              height: scale(18),
            }}
          />
    </View>
    {
      filter&&(
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('FilterScreen')}
        style={styles.filterContainer}>
        <Image
          source={images.filter}
          resizeMode="contain"
          style={{
            width: scale(20),
            height: scale(20),
          }}
        />
      </TouchableOpacity>

      )
    }
     

    </View>
   
  );
};
export default CustomSearch;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  img: { width: 23, height: 23 },
  filterContainer: {
    height: verticalScale(39),
    backgroundColor: colors.primary,
    borderRadius: scale(8),
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

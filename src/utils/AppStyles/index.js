import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const appStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowjustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

main:{
  flex:1,
  backgroundColor:colors.dull_white
},
elevation: {
  elevation: 5,
  shadowColor:colors.black,
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
});

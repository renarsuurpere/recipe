import { StyleSheet } from "react-native";
import colors from "../../Theme/colors";
import FONTS from "../../Theme/colors";

export default StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  time: {
    color: colors.primary,

    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  color: {
    color: colors.primary,
  },
  font: {
    fontWeight: "bold",
    fontFamily: FONTS.SFUIDisplay,
  },

  title: {
    flexBasis: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});

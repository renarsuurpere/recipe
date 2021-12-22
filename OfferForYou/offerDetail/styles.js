import { StyleSheet } from "react-native";
import colors from "../../Theme/colors";
import FONTS from "../../Theme/colors";

export default StyleSheet.create({
  image: {
    width: "100%",

    height: 120,
  },
  imageContainer: {
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonMargin: {
    margin: 10,
  },
  profile: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },

  time: {
    color: colors.primary,

    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  color: {
    color: colors.purple,
  },
  font: {
    fontWeight: "bold",
  },

  title: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: FONTS.SFUIDisplay,
    justifyContent: "space-between",
  },
  header: {
    paddingBottom: 10,
    paddingTop: 10,
    fontFamily: FONTS.SFUIDisplay,
    color: colors.primary,
  },
  test: {
    paddingBottom: 300,
  },
  ingredients: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,

    justifyContent: "space-between",
    borderBottomWidth: 1,
    fontFamily: FONTS.SFUIDisplay,
    borderColor: colors.greyMedium,
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primaryWithOpacity,
  },
});

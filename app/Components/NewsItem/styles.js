import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "$primaryBackgroundColor",
    height: 145,
    paddingTop: 5 
  },
  secondaryText: {
    padding: 5,
    color: "$secondaryColor",
    borderColor: "$primaryBorderColor",
    fontSize: "$secondaryFontSize",
    textAlign: "justify"
  },
  textBox: {
    flex: 1,
    justifyContent: "space-between",
  },
  greyBG: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
});

export default styles;

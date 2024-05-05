import { Dimensions, StyleSheet, Text, View } from "react-native";

const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;
export default function ProfileContainer() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.11,
    height: "63%",
    borderRadius: 50,
    backgroundColor: "white",
  },
});

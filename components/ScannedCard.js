import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  BungeeSpice_400Regular,
} from "@expo-google-fonts/bungee-spice";
export default function ScannedCard({ username, score, rank, url, onPress }) {
  const [fontsLoaded] = useFonts({
    BungeeSpice_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profilePic}></View>
        <View style={{}}>
          <Text style={{ fontWeight: "bold" }}>{username}</Text>
          <Text style={{ opacity: 0.7 }}>Points: {score}</Text>
        </View>
        <Text
          style={
            rank < 4
              ? {
                  marginLeft: "auto",
                  fontSize: 52,
                  fontFamily: "BungeeSpice_400Regular",
                }
              : { marginLeft: "auto", fontSize: 30 }
          }
        >
          {rank}
        </Text>
      </View>
      <Pressable
        onPress={onPress}
        style={{ alignSelf: "center", marginTop: "7%" }}
      >
        <Text style={{ fontSize: 26, color: "blue" }}>{url}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    shadowColor: "rgba(255, 255, 255, 0.4)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 4,
    zIndex:-1
  },
  top: {
    flexDirection: "row",
    //   justifyContent:"space-between",
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    marginRight: 10,
  },
});

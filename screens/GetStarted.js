import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function GetStartedPage({ navigation }) {
  // Create an Animated.Value for the vertical position
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start a seamless looping animation
    Animated.loop(
      Animated.sequence([
        // Move the icon up
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        // Move the icon down
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),

        // Return to the starting position
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // Infinite iterations
      }
    ).start();
  }, [floatAnim]);

  return (
    <SafeAreaView style={{ backgroundColor: "#0D0D0D", flex: 1 }}>
      <LinearGradient
        colors={["rgba(146, 21, 213, 0.2)", "rgba(146, 21, 213, 0.2)"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <ImageBackground
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          source={require("../assets/bg1.jpg")}
          imageStyle={{ opacity: 0.1 }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/scanquest-logo.png")}
            style={styles.image}
          />
          <Text style={styles.text}>
            Start scanning QR codes to unlock rewards and climb the leaderboard!
          </Text>
          <Animated.View
            style={{
              ...styles.floatingIcon,
              transform: [{ translateY: floatAnim }],
            }}
          >
            <Entypo
              onPress={() => {
                navigation.navigate("Register");
              }}
              name="arrow-with-circle-right"
              size={50}
              color="#9215D5"
            />
          </Animated.View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
  },
  text: {
    color: "white",
    width: 400,
    textAlign: "center",
    position: "relative",
    top: -40,
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 18,
  },
  floatingIcon: {
    // Add any additional styling you need for the icon
  },
});

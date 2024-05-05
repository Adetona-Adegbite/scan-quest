import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  ImageBackground,
} from "react-native";
import AuthPageButton from "../components/AuthPageButton";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterPage({ navigation }) {
  function registerHandler() {
    navigation.navigate("Main");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#0D0D0D", flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.page}> */}
          <LinearGradient
            colors={["rgba(146, 21, 213, 0.2)", "rgba(146, 21, 213, 0.2)"]}
            style={StyleSheet.absoluteFill}
          >
            <ImageBackground
              style={styles.backgroundImage}
              source={require("../assets/bg1.jpg")}
              imageStyle={{ opacity: 0.1 }}
            >
              {/* <View style={styles.container}> */}
                <Image
                  style={styles.image}
                  source={require("../assets/scan-quest-icon.png")}
                  resizeMode="contain"
                />
                <Text style={styles.text}>Register</Text>

                <View style={[styles.formItem, { marginTop: -40 }]}>
                  <Text style={styles.formItemTitle}>Username</Text>
                  <TextInput
                    style={styles.formItemInput}
                    placeholder="must be 4 characters"
                    keyboardType="default"
                    placeholderTextColor="gray"
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formItemTitle}>Email</Text>
                  <TextInput
                    style={styles.formItemInput}
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    placeholderTextColor="gray"
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formItemTitle}>Create a password</Text>
                  <TextInput
                    style={styles.formItemInput}
                    placeholder="must be 8 characters"
                    keyboardType="visible-password"
                    placeholderTextColor="gray"
                    secureTextEntry
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formItemTitle}>Confirm password</Text>
                  <TextInput
                    style={styles.formItemInput}
                    placeholder="repeat password"
                    keyboardType="visible-password"
                    placeholderTextColor="gray"
                    secureTextEntry
                  />
                </View>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text style={styles.loginText}>
                    Already Have an Account?{" "}
                    <Text style={{ color: "white" }}>Login</Text>
                  </Text>
                </Pressable>
                <AuthPageButton
                  onPress={registerHandler}
                  bgColor="#9215D5"
                  color="white"
                  title="Register"
                />
              {/* </View> */}
            </ImageBackground>
          </LinearGradient>
        {/* </View> */}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "30%",
  },
  text: {
    color: "white",
    fontSize: 26,
    position: "relative",
    top: -60,
  },
  formItem: {
    marginBottom: 10,
    height: "10%",
    gap: 5,
    width: "80%", // Ensure items take full width
  },
  formItemTitle: {
    color: "#ccc",
    fontSize: 14,
  },
  formItemInput: {
    borderBottomWidth: 1, // Add a border only at the bottom
    borderColor: "white", // Border color
    paddingVertical: 11, // Optional: Add padding vertically for better layout
    fontSize: 16,
    paddingLeft: 10,
    color: "white", // Text color
    width: "100%", // Ensure input takes full width
  },
  loginText: {
    color: "#ccc",
    marginBottom: 10,
  },
});

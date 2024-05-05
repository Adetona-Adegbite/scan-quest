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

export default function LoginPage({ navigation }) {
  function loginHandler() {
    navigation.navigate("Main");
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#0D0D0D", flex: 1 }}>
      <TouchableWithoutFeedback style={{flex:1}} onPress={Keyboard.dismiss}>
        {/* <View style={styles.page}> */}
          <LinearGradient
            colors={["rgba(146, 21, 213, 0.2)", "rgba(146, 21, 213, 0.2)"]}
            style={StyleSheet.absoluteFill}
          >
            <ImageBackground
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              source={require("../assets/bg1.jpg")}
              imageStyle={{ opacity: 0.1 }}
            >
              <Image
                style={styles.image}
                source={require("../assets/scan-quest-icon.png")}
                resizeMode="contain"
              />
              <Text style={styles.text}>Login</Text>

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
                <Text style={styles.formItemTitle}>Password</Text>
                <TextInput
                  style={styles.formItemInput}
                  placeholder="enter password"
                  keyboardType="visible-password"
                  placeholderTextColor="gray"
                  secureTextEntry
                />
              </View>

              <Pressable
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={{ color: "#ccc" }}>
                  Don't Have an Account?
                  <Text style={{ color: "white" }}> Register</Text>
                </Text>
              </Pressable>
              <AuthPageButton
                onPress={loginHandler}
                bgColor="#9215D5"
                color="white"
                title="Login"
              />
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
  image: {
    width: "30%",
    marginTop:-130
  },
  text: {
    color: "white",
    fontSize: 26,
    position: "relative",
    top: -60,
  },
  formItem: {
    marginBottom: 10,
    height: "13%",
    gap: 5,
    width: "80%", 
  },
  formItemTitle: {
    color: "#ccc",
    fontSize: 14,
  },
  formItemInput: {
    borderBottomWidth: 1, 
    borderColor: "white", 
    paddingVertical: 11,
    fontSize: 16,
    paddingLeft: 10,
    color: "white", 
    width: "100%", 
  },
});

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedPage from "./screens/GetStarted";
import { NavigationContainer } from "@react-navigation/native";
import RegisterPage from "./screens/Register";
import LoginPage from "./screens/Login";
import HomePage from "./screens/Home";
import { Dimensions, Image, Text, View } from "react-native";
import ProfileContainer from "./components/ProfileContainer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Leaderboard from "./screens/Leaderboard";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          backgroundColor: "white",
          color: "white",
        },
        tabBarActiveTintColor: "#9215D5",
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#0d0d0d",
        tabBarActiveBackgroundColor: "#0d0d0d",
        tabBarStyle: {
          backgroundColor: "#0d0d0d",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome6 name="ranking-star" size={size} color={color} />
            );
          },
        }}
        name="Leaderboard"
        component={Leaderboard}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Get-Started"
          component={GetStartedPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#0D0D0D",
              height: 120,
            },
            headerLeft: "",
            headerTitleContainerStyle: {
              paddingBottom: 20,
            },
            headerTitle: () => {
              return (
                <Image
                  style={{
                    height: 45,
                    alignSelf: "center",
                    resizeMode: "contain",
                  }}
                  source={require("./assets/scan-quest-text.png")}
                />
              );
            },
            // headerRight: () => {
            //   return <ProfileContainer />;
            // },
            // headerRightContainerStyle: {
            //   position: "relative",
            //   right: windowWidth * 0.08,

            // },
            // headerStyle: {
            //   backgroundColor: "red",
            //   height:400
            // },
            // headerBackground:"red"
          }}
          name="Main"
          component={BottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

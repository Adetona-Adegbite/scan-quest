import React, { useEffect, useState } from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import ScanButton from "../components/ScanButton";
import ScannedCard from "../components/ScannedCard";
import { LinearGradient } from "expo-linear-gradient";
import { Camera } from "expo-camera";
const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;
export default function HomePage() {
  
  const dummyData = [
    {
      username: "John2007",
      score: 8500,
      rank: 2,
      url: "https://example.com/john",
    },
    {
      username: "Emma",
      score: 7800,
      rank: 12,
      url: "https://example.com/emma",
    },
    {
      username: "Michael",
      score: 7200,
      rank: 37,
      url: "https://example.com/michael",
    },
    {
      username: "Sophia",
      score: 6500,
      rank: 3,
      url: "https://example.com/sophia",
    },
    {
      username: "William",
      score: 6000,
      rank: 48,
      url: "https://example.com/william",
    },
    {
      username: "Olivia",
      score: 5500,
      rank: 1,
      url: "https://example.com/olivia",
    },
    {
      username: "James",
      score: 5000,
      rank: 8,
      url: "https://example.com/james",
    },
    {
      username: "Charlotte",
      score: 4500,
      rank: 32,
      url: "https://example.com/charlotte",
    },
    {
      username: "Daniel",
      score: 4000,
      rank: 5,
      url: "https://example.com/daniel",
    },
    { username: "Mia", score: 3500, rank: 42, url: "https://example.com/mia" },
  ];
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScan = (data) => {
    // Do something with the scanned data
    console.log("Scanned Data:", data);
    // You can add additional logic here, such as navigation or API requests
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <LinearGradient
        colors={["rgba(146, 21, 213, 0.2)", "rgba(146, 21, 213, 0.2)"]}
        style={StyleSheet.absoluteFill}
      >
        <ImageBackground
          source={require("../assets/bg1.jpg")}
          style={styles.backgroundImage}
          imageStyle={{ opacity: 0.1 }}
        >
          <ScrollView
            contentContainerStyle={styles.page}
            showsVerticalScrollIndicator={false}
          >
            <ScanButton width={windowWidth} height={windowHeight} onScan={handleScan} />
            {dummyData.map((item) => {
              return (
                <ScannedCard
                  key={item.username}
                  username={item.username}
                  score={item.score}
                  rank={item.rank}
                  url={item.url}
                  onPress={handlePress.bind(this, item.url)}
                />
              );
            })}
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

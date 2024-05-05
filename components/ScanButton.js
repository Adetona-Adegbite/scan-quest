import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import { Camera, CameraView } from "expo-camera/next";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the close icon

export default function ScanButton({ width, height }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handlePress = () => {
    setModalVisible(true);
  };
  const handleScan = ({ type, data }) => {
    setScanned(true);
    console.log(type, data);
    setModalVisible(false);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>Scan QR Code</Text>
      {/* Your modal can be implemented here */}
      {modalVisible && (
        <>
          <View
            style={{
              width: width,
              height: height * 1.5,
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
          ></View>
          <View
            style={[
              styles.modalContainer,
              {
                position: "absolute",
                width: width * 0.9,
                height: height * 0.5,
                top: "100%",
                zIndex: 10,
              },
            ]}
          >
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={40} color="white" />
            </Pressable>
            <View style={styles.modal}>
              <CameraView
                onBarcodeScanned={scanned ? undefined : handleScan}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr", "pdf417"],
                }}
                style={{...StyleSheet.absoluteFillObject }}
              />
            </View>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },
  text: {
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    zIndex: 100,
  },
  modalText: {
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: -50,

    zIndex: 100000,
  },
});

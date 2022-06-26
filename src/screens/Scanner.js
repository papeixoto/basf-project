import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import Products from "../products/myProducts";

export default function Scanner() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedCode, setScannedCode] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedCode(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scannedCode ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scannedCode && (
        // <Button title={"Tap to Scan Again"} onPress={() => setScannedCode(null)} />
        <View style={styles.resultContainer}>
          {Products[scannedCode].image}
          <View style={styles.resultDetails}>
            <Text>{Products[scannedCode].brand}</Text>
            <Text>{Products[scannedCode].product}</Text>
          </View>
          <TouchableOpacity
            style={styles.plusContainer}
            onPress={() =>
              navigation.navigate("Product", {
                productId: scannedCode,
              })
            }
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  resultContainer: {
    position: "absolute",
    bottom: 100,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.6,
    elevation: 20,
    borderRadius: 16,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultDetails: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  plusContainer: {
    backgroundColor: "#8EC4FD",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  plus: {
    fontSize: 50,
    lineHeight: 50,
    fontWeight: "200",
    paddingBottom: 10,
  },
});

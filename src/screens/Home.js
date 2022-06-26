import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";

import Footer from "../components/Footer";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require("../assets/basf-certificate-slogan.png")}
          style={styles.headerImage}
        />
        <View style={styles.optionsContainer}>
          <View style={styles.optionsPair}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => navigation.navigate("Scanner")}
            >
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/square.png")}
                />
              </View>
              <Text style={styles.textCenter}>Discover your BASF product</Text>
            </TouchableOpacity>
            <View style={styles.optionContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/icons/clock.png")}
                />
              </View>
              <Text style={styles.textCenter}>Recently viewed products</Text>
            </View>
          </View>
        </View>
        <View style={styles.optionsPair}>
          <View style={styles.optionContainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require("../assets/icons/heart.png")}
              />
            </View>
            <Text style={styles.textCenter}>Favourites</Text>
          </View>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() =>
              Linking.openURL("https://www.basf.com/global/en/products.html")
            }
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require("../assets/icons/basf.png")}
              />
            </View>
            <Text style={styles.textCenter}>BASF Products</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#8EC4FD",
    height: "100vh",
    paddingTop: 60,
    flex: 1,
  },
  container2: {
    paddingHorizontal: 30,
    height: "100%",
  },
  headerImage: {
    height: 104,
    width: 266,
  },
  optionsContainer: {
    marginTop: 50,
  },
  optionsPair: {
    flexDirection: "row",
  },
  optionContainer: {
    height: 170,
    width: 150,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  iconContainer: {
    backgroundColor: "#333333",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default Home;

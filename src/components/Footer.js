import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Footer({ active = 0 }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={active === 0 ? styles.iconContainer : undefined}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/icons/home.png")}
          style={[styles.icon, active === 0 ? styles.activeIcon : undefined]}
        />
      </TouchableOpacity>
      <View style={active === 1 ? styles.iconContainer : undefined}>
        <Image
          source={require("../assets/icons/square.png")}
          style={[styles.icon, active === 1 ? styles.activeIcon : undefined]}
        />
      </View>
      <View>
        <Image
          source={require("../assets/icons/clock.png")}
          style={styles.icon}
        />
      </View>
      <View>
        <Image
          source={require("../assets/icons/bell.png")}
          style={[styles.icon, { width: 25 }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 118,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: "#8EC4FD",
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: "lightgrey",
  },
  activeIcon: {
    tintColor: "#333333",
    height: 32,
  },
});

export default Footer;

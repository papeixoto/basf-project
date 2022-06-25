import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Splash() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>English</Text>
        </View>
        <Image
          source={require("../assets/basf-certificate.png")}
          style={{ width: 299, height: 373 }}
        />
        <Text style={styles.title}>Discover more about you</Text>
        <Text style={styles.description}>
          Have you ever wondered what does your daily life products contain?
          What are you exactly buing? With BASF app you can find out this and
          much more!
        </Text>
        <TouchableHighlight
          style={styles.submit}
          onPress={() => navigation.navigate("Home")}
          underlayColor="#fff"
        >
          <Text style={styles.submitText}>START</Text>
        </TouchableHighlight>
        <View style={styles.logoContainer}>
          <Text style={styles.textLogo}>Powered by:</Text>
          <Image
            source={require("../assets/basf-logo.png")}
            style={styles.imageLogo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  languageContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    borderRadius: 3,
    backgroundColor: "#8EC4FD",
    padding: 3,
  },
  languageText: {
    fontSize: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#333333",
    height: "100vh",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    color: "#8EC4FD",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 50,
    color: "#333333",
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    width: "80%",
  },
  submitText: {
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  logoContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  textLogo: {
    color: "white",
    fontSize: 10,
    marginBottom: 2,
  },
  imageLogo: {
    width: 100,
    height: 40,
  },
});

export default Splash;

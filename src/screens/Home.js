import { Text, Image, View } from "react-native";
import { StyleSheet } from "react-native-web";

export default function Home() {
  return (
    <View>
      <Image
        source={require("../assets/basf-logo.png")}
        style={{ width: 299, height: 373 }}
      />
      <Text style={styles.title}>Discover more about you</Text>
      <Text style={styles.description}>
        Have you ever wondered what does your daily life products contain? What
        are you exactly buing? With BASF app you can find out this and much
        more!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  description: {
    fontSize: 16,
  },
});

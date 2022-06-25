import { Text, Image, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Image source={require("../assets/basf-logo.png")} />
      <Text className="homeTitle">Discover more about you</Text>
      <Text className="homeDescription">
        Have you ever wondered what does your daily life products contain? What
        are you exactly buing? With BASF app you can find out this and much
        more!
      </Text>
    </View>
  );
}

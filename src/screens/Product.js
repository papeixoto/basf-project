import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../components/Footer";
import Products from "../products/myProducts";
import productsDB from "../products/productsBasf";

function Product({ route }) {
  const productId = route?.params?.productId;
  const product = Products[productId];

  const inciNames = productsDB.map((product) => product.INCI_Name);
  const numOfIngredients = product.ingredients.length;
  const commonIngredients = product.ingredients.filter((ingredient) =>
    inciNames.find(
      (el) => el && el.toLowerCase().includes(ingredient.toLowerCase())
    )
  );

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {commonIngredients.length ? (
          <>
            {product.headerImage}
            <View style={styles.headerText}>
              <Text style={styles.brandText}>{product.brand}</Text>
              <Text style={styles.productText}>{product.product}</Text>
            </View>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsTitle}>BASF Ingredients</Text>
              {commonIngredients.map((ingredient) => (
                <Text key={ingredient}>&bull; {ingredient}</Text>
              ))}
              <Text style={styles.textConclusion}>
                This product has{" "}
                {Math.floor(
                  (commonIngredients.length / numOfIngredients) * 100
                )}
                % of its ingredients produced by BASF.
              </Text>
            </View>
            <Text style={styles.bottomText}>
              Congratulations on choosing a Sustainable and Innovative solution
              for your daily life!
            </Text>
          </>
        ) : (
          <>
            <View
              style={{
                height: 100,
                backgroundColor: "white",
                width: "100vw",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: 600 }}>
                This product has no BASF ingredients.
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: 18,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                Check out some products with BASF compliance:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                {">  "} Consumer Goods
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                {"v  "} Health and Nutrition
              </Text>
              <View
                style={{ paddingLeft: 30, paddingVertical: 10, fontSize: 16 }}
              >
                <Text>Body Care</Text>
                <Text>Face Care</Text>
                <Text>Hair Coloring</Text>
                <Text>Hair Conditioning</Text>
                <Text>Hair Shampoo</Text>
                <Text>Hair Styling</Text>
                <Text>Oral Care</Text>
                <Text>Skin Rinse-off</Text>
                <Text>Sun Care</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                {">  "} Agriculture
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                {">  "} Energy and Resources
              </Text>
              <Text
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 0, height: 4 },
                  textShadowRadius: 4,
                  paddingHorizontal: 10,
                }}
              >
                {">  "} Transportation
              </Text>
            </View>
          </>
        )}
      </View>
      <Footer active={1} />
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
  },
  headerText: {
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingLeft: 10,
  },
  brandText: {
    fontSize: 30,
    fontWeight: 500,
  },
  ingredientsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontWeight: 600,
    marginBottom: 10,
  },
  textConclusion: {
    marginTop: 30,
  },
  bottomText: {
    color: "white",
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    paddingHorizontal: 10,
  },
});

export default Product;

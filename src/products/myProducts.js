import { Image } from "react-native";

const Products = {
  3574661625379: {
    brand: "Aveeno",
    product: "Cleanser",
    image: (
      <Image
        source={require("../assets/aveeno.jpeg")}
        style={{ width: 30, height: 30 }}
      />
    ),
    headerImage: (
      <Image
        source={require("../assets/aveeno_header.png")}
        style={{ width: "100vw", height: 100 }}
      />
    ),
    ingredients: [
      "Water",
      "Glycerin",
      "Dimethicone",
      "Cetearyl Olivate",
      "Avena Sativa (Oat) Kernel Flour",
      "Sorbitan Olivate",
      "Polyacrylamide",
      "Synthetic Beeswax",
      "Phenoxyethanol",
      "C13-14 Isoparaffin",
      "Butylene Glycol",
      "Dimethicone Crosspolymer",
      "Panthenol",
      "Chlorphenesin",
      "Dimethiconol",
      "Carbomer",
      "Laureth-7",
      "Chrysanthemum Parthenium (Feverfew) Flower/Leaf/Stem Juice",
      "Ethylhexylglycerin",
      "Sodium Hydroxide",
      "Avena Sativa (Oat) Kernel Extract",
      "Centella Asiatica Extract",
    ],
  },
  "0810002114007": {
    brand: "Versed",
    product: "Mosturizer",
    image: (
      <Image
        source={require("../assets/versed.jpeg")}
        style={{ width: 30, height: 30 }}
      />
    ),
    headerImage: (
      <Image
        source={require("../assets/versed_header.png")}
        style={{ width: "100vw", height: 150 }}
      />
    ),
    ingredients: [
      "Water",
      "Glycerin",
      "Propylene Glycol",
      "1,2-Hexanediol",
      "Squalane",
      "Phenoxyethanol",
      "Carbomer",
      "Simmondsia Chinensis (Jojoba) Seed Oil",
      "Aloe Barbadensis Leaf Juice",
      "Polyacrylamide",
      "Triticum Vulgare (Wheat) Germ Oil",
      "C13-14 Isoparaffin",
      "Sodium Hydroxide",
      "Camellia Sinensis Leaf Extract",
      "Sambucus Nigra Flower Extract",
      "Laureth-7",
      "Trisodium Ethylenediamine Disuccinate",
      "Sodium Hyaluronate",
      "Potassium Sorbate",
      "Sodium Benzoate",
      "Citric Acid",
    ],
  },
  8480000421289: {
    brand: "Deliplus",
    product: "Vitamin oil",
    image: (
      <Image
        source={require("../assets/deliplus.jpeg")}
        style={{ width: 30, height: 30 }}
      />
    ),
    ingredients: ["pedritas da calçada", "xixi", "cocó", "fezes"],
  },
};

export default Products;

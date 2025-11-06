import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import "./global.css"

export default function App() {
  return (
    <LinearGradient
      colors={["#86A785", "#ffffff"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
   
        <View style={styles.imageContainer}>
          <View style={styles.imageFrame}>
            <Image
              source={require("./assets/catto.jpg")}
              style={styles.image}
              contentFit="cover"
              transition={300}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text className="text-5xl font-serif text-black">Bryle Miranda</Text>
          <Text className="text-xl text-black/70">~</Text>
          <Text style={styles.paragraph}>19 | BSCS 3-4</Text>
 

          <Text style={styles.label}>About Me:</Text>
          <Text style={styles.paragraph}>
           CS student at Cavite State University 
          </Text>

          <Text style={styles.label}>Achievements:</Text>
          <Text style={styles.paragraph}>
            • Contribute to MonkeyType
          </Text>
          <Text style={styles.label}>Skills:</Text>
          <Text style={styles.paragraph}>
            • Rust, Python, Java, TypeScript{"\n"}
            • Full-Stack Development w NextJS{"\n"}
            • Open-source Contributor{"\n"}
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// tailwind buggin so i use stylsheet lol
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 60,
  },
  header: {
    position: "absolute",
    top: 60,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logo: {
    fontSize: 24,
    fontWeight: "800",
    color: "black",
    letterSpacing: 1,
  },
  imageContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageFrame: {
    width: 190,
    height: 230,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 160,
    height: 210,
    borderRadius: 16,
  },
  section: {
    width: "85%",
    marginTop: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: "#333",
    marginTop: 2,
  },
  paragraph: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
    lineHeight: 20,
  },
  footer: {
    alignItems: "center",
    marginTop: 40,
  },
  footerLine: {
    width: 260,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.2)",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.6)",
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

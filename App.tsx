import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import imageEgg01 from "./assets/egg01.png";
import imageEgg02 from "./assets/egg02.png";
import imageEgg03 from "./assets/egg03.png";

export default function App() {
  // Constants
  const maxHp = 100;
  const borderHit = [75, 50, 25];
  const borderCrush = 0;
  const defaultMessage = "初期メッセージ";
  const messagesOnHit = ["メッセージ75", "メッセージ50", "メッセージ25"];
  const messageOnCrush = "メッセージ0";

  // Variables(States)
  const [currentHp, setCurrentHp] = React.useState(maxHp);
  const [message, setMessage] = React.useState(defaultMessage);
  const [image, setImage] = React.useState(imageEgg01);
  const [isCrushed, setIsCrushed] = React.useState(false);

  // Functions
  const eventHit = () => {
    let newHp = currentHp - 1;
    setCurrentHp(newHp);

    if (borderCrush >= newHp) {
      eventCrush();
    } else if (borderHit.includes(newHp)) {
      setMessage(messagesOnHit[borderHit.indexOf(newHp)]);
      setImage(imageEgg02);
    }
  };
  const eventCrush = () => {
    setCurrentHp(0);
    setMessage(messageOnCrush);
    setImage(imageEgg03);
    setIsCrushed(true);
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Text>
        {currentHp} / {maxHp}
      </Text>
      <Image source={image} style={styles.logo} />
      <Pressable style={styles.button} disabled={isCrushed}>
        <Text style={styles.buttonText} onPress={eventHit}>
          Click
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});

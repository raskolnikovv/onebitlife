import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function ({ habit, frequency, habitArea, checkColor }) {
  const navigation = useNavigation();
  const [habitCheck, setHabitCheck] = useState();
  const [checkImage, setCheckImage] = useState(
    require("../../../assets/icons/Mind.png")
  );

  function handleEdit() {
    console.log("HabitPage")

  function handleCheck() {
    console.log("Botão de check do $(habitArea")
  }

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleEdit}
      >
        <View style={styles.habitText}>
          <Text style={styles.habitTitle}>{habit}</Text>
          <Text style={styles.habitFrequency}>{frequency}</Text>
        </View>
        <TouchableOpacity
          style={[styles.check, { borderColor: checkColor }]}
          onPress={handleCheck}
        />
      </TouchableOpacity>
      
    )
} 

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#151515",
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  habitTitle: {
    color: "white",
    fontWeight: "bold",
  },

  habitFrequency: {
    color: "white",
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  checked: {
    width: 25,
    height: 25,
  },
});
}
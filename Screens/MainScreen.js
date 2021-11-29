import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import BorderIssue from "../components/BorderIssue";
import Flexgrow from "../components/Flexgrow";

export default function MainScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textStyle}>Border</Text>
        <BorderIssue />
        <Text  style={styles.textStyle}>
          Flex Box
        </Text>
        <Flexgrow />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange" 
},
textStyle: { alignSelf: "center", fontSize: 48, color: "white" },
});

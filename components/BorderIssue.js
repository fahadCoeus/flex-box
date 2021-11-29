import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BorderIssue(props) {
  return (
    <>
      <Text style={{ fontSize: 24, alignSelf: "center" }}>Issue</Text>
      <View
        style={{
          backgroundColor: "red",
          width: 350,
          height: 80,
          borderTopEndRadius: 30,
          borderWidth: 5,
        }}
      >
        <View
          style={{ backgroundColor: "blue", height: 50, width: 350 }}
        ></View>
      </View>

      <Text style={{ fontSize: 24, alignSelf: "center" }}>
        solution with miner issue
      </Text>

      <View
        style={{
          backgroundColor: "red",
          width: 350,
          height: 80,
          borderTopEndRadius: 30,
          borderWidth: 5,
          overflow: "hidden",
        }}
      >
        <View
          style={{ backgroundColor: "blue", height: 50, width: 350 }}
        ></View>
      </View>

      <Text style={{ fontSize: 24, alignSelf: "center" }}>
        Somehow solution
      </Text>

      <View
        style={{
          backgroundColor: "red",
          width: 350,
          height: 80,
          borderTopEndRadius: 30,
          borderWidth: 5,
        }}
      >
        <View style={{ overflow: "hidden", borderTopEndRadius: 25 }}>
          <View
            style={{ backgroundColor: "blue", height: 50, width: 350 }}
          ></View>
        </View>
      </View>
    </>
  );
}

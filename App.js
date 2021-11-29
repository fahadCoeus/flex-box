import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BorderIssue from "./components/BorderIssue";
import Flexgrow from "./components/Flexgrow";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  return (
    <SafeAreaView>
      <MainScreen />
    </SafeAreaView>
  );
}



import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Flexgrow(props) {
  return (
    <>
      <Text style={{ color: "white", fontSize: 18 }}>
        Flex is same as flex flexGrow. Flex grow is work only in free or
        remaining space in its container.
      </Text>
      <Text style={{ color: "white", fontSize: 18 }}>
        Below example for both boxes flexBasis is set to 10 ao the maximum space
        cover by both boxes is 10 dp and you can see the fremaining space as
        well
      </Text>
      <View style={styles.container}>
        <View
          style={{
            flexBasis: 100,
            backgroundColor: "red",
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            {" "}
            flexBasis: 100, backgroundColor: "red",
          </Text>
        </View>
        <View
          style={{
            flexBasis: 100,
            backgroundColor: "blue",
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 100, backgroundColor: "blue",
          </Text>
        </View>
      </View>

      <Text style={{ fontSize: 15, color: "white" }}>
        Now its flexGrow is set to 1 so its cover remaing space which means flex
        grow only works in free or empty spcae
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexBasis: 10,
            backgroundColor: "red",
            flexGrow: 1,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 10, backgroundColor: "red", flexGrow: 1,
          </Text>
        </View>
        <View
          style={{
            flexBasis: 10,
            backgroundColor: "blue",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 10, backgroundColor: "blue", flex: 1,
          </Text>
        </View>
      </View>

      <Text style={{ fontSize: 15, color: "white" }}>
        Now we also added flexShrink to 10 for 1st box and flexShrink to 1 for
        second box but it never effects on anything its becaue flexShrink is
        only show its effect when maximum space of a box is more than the
        available space
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexBasis: 10,
            backgroundColor: "red",
            flexGrow: 1,
            flexShrink: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 10, backgroundColor: "red", flexGrow: 1, flexShrink:10,
          </Text>
        </View>
        <View
          style={{
            flexBasis: 10,
            backgroundColor: "blue",
            flex: 1,
            flexShrink: 1,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 10, backgroundColor: "blue", flex: 1, flexShrink:1,
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 15, color: "white" }}>
        So lets increase the size of flex Bases to 300 for both boxes. Now
        maximum size of box is increase then the available space so we can see
        the flex shrink is working now
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexBasis: 300,
            backgroundColor: "red",
            flexGrow: 1,
            flexShrink: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 300, backgroundColor: "red", flexGrow: 1, flexShrink:10,
          </Text>
        </View>
        <View
          style={{
            flexBasis: 300,
            backgroundColor: "blue",
            flex: 1,
            flexShrink: 1,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>
            flexBasis: 300, backgroundColor: "blue", flex: 1, flexShrink:1,
          </Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

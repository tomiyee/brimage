import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppBar, Button } from "@react-native-material/core";

export default function App() {
  return (
    <>
      <AppBar
        title="Title"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => <Icon name="magnify" {...props} />}
              {...props}
            />
            <IconButton
              icon={(props) => <Icon name="dots-vertical" {...props} />}
              {...props}
            />
          </HStack>
        )}
      />
      <View style={styles.container}>
        <Text>Testing</Text>
        <Button title="Click Me" onPress={() => alert("🎉🎉🎉")} />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

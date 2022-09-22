import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { AppBar, Button } from "@react-native-material/core";

import FeedScreen from "./Screens/Feed";
import HomeScreen from "./Screens/Home";

export default function App() {
  return (
    <>
      <NativeRouter>
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
        <Link to="/feed">Feed</Link>

        <Route exact path="/" component={HomeScreen} />
        <Route path="/feed" component={FeedScreen} />
      </NativeRouter>
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

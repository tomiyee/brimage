import React from 'react';
import { Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text>Testing</Text>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")} />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
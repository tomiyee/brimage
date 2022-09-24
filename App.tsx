// import { StyleSheet } from 'react-native';
// import { AppBar } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from './consts';

import RootStackParamList from './screens/RootStackParamList';
import FeedScreen from './screens/Feed';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={Screen.HOME}
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <RootStack.Screen
          name={Screen.PROFILE}
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <RootStack.Screen
          name={Screen.FEED}
          component={FeedScreen}
          options={{ title: 'Feed' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


/* 
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
*/


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

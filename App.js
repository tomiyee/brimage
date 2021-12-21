import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar, Avatar } from 'react-native-paper';
import theme from './CustomProperties/Theme';
import Feed from './Screens/Feed';

export default function App() {

  const _goBack = () => console.log('Went back');
  const _settings = () => console.log('Pressed Settings');
  const _mail = () => console.log('Pressed Mail');

  return (
    <PaperProvider theme={theme}>
      {/* Top Navbar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Action icon='cog' onPress={_settings}/>
        <Appbar.Action icon='mail' onPress={_mail}/>
        {/* Avatar Icon */}
        <Avatar.Icon size={40} icon='account-circle' />
      </Appbar.Header>

      {/* The Content */}
      <Feed />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    flex: 1,
    justifyContent: 'space-between'
  }
});

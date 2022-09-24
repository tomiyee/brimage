import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../RootStackParamList';
import { Screen } from '../../consts';

type HomeProps = NativeStackScreenProps<RootStackParamList, Screen.HOME>;

/**
 * The default landing screen for Brimage.
 */
const HomeScreen: React.FC<HomeProps> = ({route, navigation}) => {
  return (
    <View>
      <Button title="Profile" onPress={() => navigation.navigate(Screen.PROFILE)} />
      <Button title="Feed" onPress={() => navigation.navigate(Screen.FEED)} />
    </View>
  );
};

export default HomeScreen;

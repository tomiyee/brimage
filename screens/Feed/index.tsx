import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Screen } from '../../consts';
import RootStackParamList from '../RootStackParamList';

type FeedProps = NativeStackScreenProps<RootStackParamList, Screen.FEED>;

/**
 * The Screen with the Random Image Feed.
 */
const FeedScreen: React.FC<FeedProps> = () => {
  return <View />;
};

export default FeedScreen;

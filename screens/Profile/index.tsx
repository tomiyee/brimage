import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Screen } from '../../consts';
import RootStackParamList from '../RootStackParamList';

type ProfileProps = NativeStackScreenProps<RootStackParamList, Screen.PROFILE>;

/**
 * The Screen to handle profiles and junk.
 */
const ProfileScreen: React.FC<ProfileProps> = () => {
  return <View />;
};

export default ProfileScreen;

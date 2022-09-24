import React from 'react';
import { Button, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../RootStackParamList';
import { Screen } from '../../consts';
import { useRecoilValue } from 'recoil';
import textAtom from '../../recoil/temporary';

type HomeProps = NativeStackScreenProps<RootStackParamList, Screen.HOME>;

/**
 * The default landing screen for Brimage.
 */
const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const buttonText = useRecoilValue(textAtom);
  return (
    <View>
      <Button
        title={buttonText}
        onPress={() => navigation.navigate(Screen.PROFILE)}
      />
      <Button title="Feed" onPress={() => navigation.push(Screen.FEED)} />
    </View>
  );
};

export default HomeScreen;

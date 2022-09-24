import { Screen } from "../consts";

// To TS annotate React Native Navigation screens, we need to create an object
// that maps the name of each route with the name
type RootStackParamList =  {
  [Screen.HOME]: undefined;
  [Screen.PROFILE]: undefined;
  [Screen.FEED]: undefined;
};

export default RootStackParamList;
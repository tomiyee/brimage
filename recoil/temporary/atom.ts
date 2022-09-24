import { atom } from 'recoil';

const textAtom = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Profile', // default value (aka initial value)
});

export default textAtom;

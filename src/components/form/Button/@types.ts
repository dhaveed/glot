import {TextStyle, ViewStyle} from 'react-native/types';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps {
  type: ButtonVariant;
  label: string;
  onPress: () => void;
}

export interface ButtonStyleProps {
  buttonStyle: ViewStyle;
  textStyle: TextStyle;
}

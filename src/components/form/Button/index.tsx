import {FC} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {ButtonProps} from './@types';
import {getButtonStyles} from './utils';

const Button: FC<ButtonProps> = ({type, label, onPress}) => {
  const {buttonStyle, textStyle} = getButtonStyles(type);

  return (
    <TouchableHighlight style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableHighlight>
  );
};

export default Button;

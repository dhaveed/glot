import type {PropsWithChildren} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';
import {Colors} from '../../../styles/themes/tokens';

type LabelProps = PropsWithChildren<{
  label: string;
  labelStyles?: TextStyle;
}>;

export default function Label({label, labelStyles, children}: LabelProps) {
  return (
    <Text style={[styles.label, labelStyles]}>
      {label}
      {!!children && (
        <Text style={{paddingLeft: 4, color: Colors.textPrimary}}>
          {' '}
          {children}
        </Text>
      )}
    </Text>
  );
}

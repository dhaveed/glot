import {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

type ContainerProps = PropsWithChildren<{
  containerStyles?: ViewStyle;
}>;

function Container({containerStyles, children}: ContainerProps): JSX.Element {
  return <View style={[styles.container, containerStyles]}>{children}</View>;
}

export default Container;

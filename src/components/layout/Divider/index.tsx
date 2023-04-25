import {View, StyleSheet} from 'react-native';
import {Colors} from '../../../styles/themes/tokens';

interface Props {
  color?: string;
  height?: number;
}

const Divider: React.FC<Props> = ({color = Colors.divider, height = 1}) => {
  return (
    <View style={[styles.divider, {backgroundColor: color + 40, height}]} />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;

import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles/themes/tokens';

interface Props {
  title: string;
}

export default function Header({title}: Props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

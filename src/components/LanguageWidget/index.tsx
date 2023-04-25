import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';

interface Props {
  language: string;
  code: string;
}

export default function LanguageWidget({code, language}: Props) {
  return (
    <TouchableHighlight style={styles.languageWidget}>
      <>
        <View style={styles.flagWrapper}>
          <Image
            source={{
              uri: `https://www.countryflagicons.com/FLAT/64/${code}.png`,
            }}
            style={styles.flag}
          />
        </View>
        <Text style={styles.title}>{language}</Text>
      </>
    </TouchableHighlight>
  );
}

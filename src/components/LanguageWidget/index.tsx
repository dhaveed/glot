import {View, Text, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Dispatch} from 'react';
import {NavigationAction} from '@react-navigation/native';

export interface LanguageWidgetProps {
  language: string;
  code: string;
  // onPress: () => Dispatch<NavigationAction>;
  onPress: () => void;
}

export default function LanguageWidget({
  code,
  language,
  onPress,
}: LanguageWidgetProps) {
  return (
    <TouchableHighlight style={styles.languageWidget} onPress={onPress}>
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

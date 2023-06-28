import React from 'react';
import {StyleSheet, View} from 'react-native';
import LanguageWidget from '../../../components/LanguageWidget';
import {LanguagePair} from '../../../@types/language.types';
import {SwapIcon} from '../../../assets/icons';
import {Colors} from '../../../styles/themes/tokens';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../../../navigation/@types';

type LanguagePickerProps = LanguagePair;

function LanguagePickerSection({
  sourceLanguage,
  targetLanguage,
}: LanguagePickerProps) {
  const {navigate} = useNavigation();

  const handleLanguagePress = (languageCode: string) =>
    navigate('LanguagePicker', {
      code: languageCode,
    });

  return (
    <View style={styles.pickerContainer}>
      <LanguageWidget
        language={sourceLanguage.name}
        code={sourceLanguage.code}
        onPress={() => handleLanguagePress(sourceLanguage.code)}
      />
      <View style={styles.swapIconWrapper}>
        <SwapIcon color={Colors.textPrimary} width={20} />
      </View>
      <LanguageWidget
        language={targetLanguage.name}
        code={targetLanguage.code}
        onPress={() => handleLanguagePress(targetLanguage.code)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 16,
  },
  swapIconWrapper: {
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LanguagePickerSection;

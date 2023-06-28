import {useCallback, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import Header from '../../components/layout/Header';
import Container from '../../components/layout/Container';
import {LanguagePickerSection, TranslationTextInputSection} from './components';

import {LanguagePair} from '../../@types/language.types';

const languagePair: LanguagePair = {
  sourceLanguage: {
    name: 'English',
    code: 'GB',
  },
  targetLanguage: {
    name: 'French',
    code: 'FR',
  },
};

export default function TextTranslation(): JSX.Element {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container>
      <Header title="glot." />
      <LanguagePickerSection {...languagePair} />
      <TranslationTextInputSection {...{languagePair}} />

      {/* Language Picker Section */}
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
    </Container>
  );
}

/**
 * @Note For full list of language country codes see the link below
 * @Link https://www.fincher.org/Utilities/CountryLanguageList.shtml
 */

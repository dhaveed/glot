import Header from '../../components/layout/Header';
import {LanguagePair} from '../../@types/language.types';
import Container from '../../components/layout/Container';
import {LanguagePickerSection} from './components';
import TranslationTextInputSection from './components/TranslationTextInputSection';

export default function TextTranslation(): JSX.Element {
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

  return (
    <Container>
      <Header title="glot." />
      <LanguagePickerSection {...languagePair} />

      <TranslationTextInputSection {...{languagePair}} />
    </Container>
  );
}

/**
 * @Note For full list of language country codes see the link below
 * @Link https://www.fincher.org/Utilities/CountryLanguageList.shtml
 */

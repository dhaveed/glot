export type HomeStackParamList = {
  TextTranslation: undefined;
  LanguagePicker: {
    language: string;
    onSelectLanguage: (language: string) => void;
  };
};

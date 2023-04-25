/* eslint-disable quotes */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TranslationTextInput} from '.';
import {LanguagePair} from '../../../@types/language.types';

interface Props {
  languagePair: LanguagePair;
}

export default function TranslationTextInputSection({languagePair}: Props) {
  return (
    <View style={styles.section}>
      {Object.keys(languagePair).map((key, index) => (
        <TranslationTextInput
          language={languagePair[key as keyof typeof languagePair]}
          key={index}
          textInputProps={{
            editable: key.includes('source'),
            ...(key.includes('target') && {
              value:
                "Bonjour, voici un exemple de texte que j'écris pour vérifier à quoi ressembleraient les lignes et maintenant je me rends compte que je devrai ajouter une hauteur de ligne pour améliorer la lisibilité de la zone de texte, alors faisons-le alors et voyons quoi c'est comme et à ce stade, nous avons environ 6 lignes de texte. Et maintenant, je vais continuer à voir jusqu'où cela peut aller pour être honnête, car je pense que cela commence à bien se passer.",
            }),
          }}
          isSource={key.includes('source')}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 10,
    gap: 40,
    marginTop: 25,
  },
});

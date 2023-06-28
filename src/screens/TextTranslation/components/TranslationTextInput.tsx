import React from 'react';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';

import Label from '../../../components/form/Label';
import {Colors} from '../../../styles/themes/tokens';
import {Language} from '../../../@types/language.types';
import TextArea from '../../../components/form/TextArea';
import Divider from '../../../components/layout/Divider';

interface Props {
  language: Language;
  textInputProps?: TextInputProps;
  isSource: boolean;
  // isReadOnly: boolean;
}

export default function TranslationTextInput({
  language,
  textInputProps,
  isSource,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputLabelWrap}>
        <Label
          label={`Translate ${isSource ? 'from' : 'to'}`}
          labelStyles={styles.labelStyles}>
          ({language.name})
        </Label>
      </View>

      <View style={styles.translationTextAreaContainer}>
        <TextArea {...textInputProps} />
        <View>
          <Divider />
          <Text style={styles.charCount}>
            {/* {text.length}/{MAX_CHARS} */}
            52/1500
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  inputLabelWrap: {
    marginLeft: 10,
  },
  labelStyles: {
    fontSize: 12,
  },
  translationTextAreaContainer: {
    borderWidth: 0.5,
    borderColor: Colors.divider + '20',
    backgroundColor: Colors.bgSecondary,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    gap: 15,
  },
  charCount: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 13,
    letterSpacing: 0.5,
    color: Colors.textDisabled,
  },
});

/**
 * Sample text
 * Hello there, this is some sample text I’m writing to check out what the lines would be like and now I realize that I will need to add some line height to improve the legibility of the text area so let’s do that then and see what it’s like and at this point, we have about 6 lines of text. And now I’ll just keep going to see how far it an actually go to be honest because I think it’s actually starting to come together rather nicely.
 *
 *
 * Add a copy icon to the bottom right of the input if it's a readonly input
 */

import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../../styles/themes/tokens';

interface Props {
  isReadOnly?: boolean;
}

const MAX_CHARS = 1500;

export default function TextArea({isReadOnly = false, ...rest}: Props) {
  const [text, setText] = useState<string>('');

  const handleChangeText = (value: string) => {
    if (value.length <= MAX_CHARS) {
      setText(value);
    }
  };
  return (
    <TextInput
      numberOfLines={6}
      style={styles.textInput}
      value={text}
      onChangeText={handleChangeText}
      multiline
      editable={!isReadOnly}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: Colors.textPrimary,
    height: 150,
    fontSize: 14,
    lineHeight: 14 * 0.5 + 14,
  },
});

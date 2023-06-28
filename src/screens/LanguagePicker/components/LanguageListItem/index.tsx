import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Check} from 'react-native-feather';

// import styles from '../../../../components/LanguageWidget/styles';
import {Colors} from '../../../../styles/themes/tokens';
import {LanguageListItemProps} from './@types';
import styles from './styles';

export default function LanguageListItem({
  code,
  language,
  isSelected = false,
}: LanguageListItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.languageListItem,
        {backgroundColor: isSelected ? Colors.bgAccent + 10 : 'transparent'},
      ]}>
      <View
        style={{flexDirection: 'row', flex: 1, alignItems: 'center', gap: 14}}>
        <View style={[styles.flagWrapper]}>
          <Image
            source={{
              uri: `https://www.countryflagicons.com/FLAT/64/${code}.png`,
            }}
            style={styles.flag}
          />
        </View>
        <Text style={{color: 'white', fontSize: 14}}>{language}</Text>
      </View>

      {isSelected && <Check color={Colors.primary100} width={18} height={18} />}
    </TouchableOpacity>
  );
}

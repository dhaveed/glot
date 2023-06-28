import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/global.styles';
import {Colors} from '../../styles/themes/tokens';

import {X} from 'react-native-feather';
import LanguageListItem from './components/LanguageListItem';
import {LanguageListItemProps} from './components/LanguageListItem/@types';
import languages from './languages';

export default function LanguagePicker({navigation, route}) {
  const {
    params: {code},
  } = route;

  const renderLanguageListItem = ({item}: {item: LanguageListItemProps}) => {
    return <LanguageListItem {...item} isSelected={item.code === code} />;
  };

  return (
    <View style={globalStyles.pageContainer}>
      <View
        style={{
          minHeight: 50,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          paddingVertical: 15,
          position: 'relative',
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.divider + '20',
        }}>
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            backgroundColor: '#FFFFFF10',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <X width={16} height={16} color={'white'} />
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontWeight: '600',
          }}>
          Select a language
        </Text>

        <View
          style={{
            height: 32,
            width: 32,
            // backgroundColor: '#FFFFFF20',
            borderRadius: 20,
          }}
        />
      </View>

      <FlatList
        data={languages}
        contentContainerStyle={{gap: 10, paddingTop: 20}}
        renderItem={renderLanguageListItem}
      />
    </View>
  );
}

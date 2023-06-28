import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from '../../styles/themes/tokens';
import TextTranslation from '../../screens/TextTranslation';
import LanguagePicker from '../../screens/LanguagePicker';
import {HomeStackParamList} from '../@types';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        // contentStyle: {
        //   backgroundColor: 'black',
        // },
        headerShown: false,
      }}>
      <Stack.Screen name="TextTranslation" component={TextTranslation} />
      <Stack.Screen
        name="LanguagePicker"
        component={LanguagePicker}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

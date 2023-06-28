import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from './src/styles/themes/tokens';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './src/navigation';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.bgPrimary,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={'light-content'} />
        <HomeStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

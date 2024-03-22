import {View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <RootNavigation />
    </View>
  );
};

export default App;

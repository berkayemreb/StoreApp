import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Product from './components/Product';
const App = () => {

  return (
    <SafeAreaView>
      <Text>Store_App projesi olusturuldu.</Text>
      <Product />
      <StatusBar style='auto' />
    </SafeAreaView>
  )

}

export default App;
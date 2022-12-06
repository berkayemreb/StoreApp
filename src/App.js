import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';
import Product from './components/Product';
import INFOPRODUCTDATA from './info_product.json';

const App = () => {

  const renderProduct = ({ item }) => (
    <Product product={item} />
  )

  return (
    <SafeAreaView style={styles.contaniner}>

      <Text style={styles.app_title}>STORE APP</Text>

      <FlatList
        numColumns={2}
        data={INFOPRODUCTDATA}
        renderItem={renderProduct} />

      <StatusBar style='auto' />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  contaniner: {
    paddingTop: 30,
    paddingLeft: 5,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  app_title: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default App;
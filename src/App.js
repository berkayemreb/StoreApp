import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';
import Product from './components/Product';
import INFOPRODUCTDATA from './info_product.json';
import Search from './components/Search';

const App = () => {

  const renderProduct = ({ item }) => (
    <Product product={item} />
  )

  return (
    <SafeAreaView style={styles.contaniner}>

      <Text style={styles.app_title}>STORE APP</Text>

      <View style={styles.container_of_cards}>
        <FlatList
          numColumns={2}
          data={INFOPRODUCTDATA}
          renderItem={renderProduct}
          ListHeaderComponent={<Search />}
        />
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  contaniner: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  app_title: {
    color: '#dc3535',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container_of_cards: {
    alignItems: 'center'
  }
})

export default App;
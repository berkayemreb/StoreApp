import React from "react";
import { SafeAreaView, Text } from 'react-native';
import styles from './Product.style';
import INFO_PRODUCT_DATA from '../../info_product.json';

const Product = () => {

    return (
        <SafeAreaView>
            <Text style={styles.text}>Deneme:{INFO_PRODUCT_DATA[0].title}</Text>
        </SafeAreaView>
    )
}

export default Product;
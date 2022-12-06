import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './Product.style';

const Product = ({ product }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: product.imgURL,
                }}
            />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
        </View>
    )
}

export default Product;
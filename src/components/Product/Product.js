import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './Product.style';

const Product = ({ product }) => {

    return (
        <View style={styles.container}>
            <View style={styles.container_of_image}>
                <Image
                    style={styles.image}
                    source={{
                        uri: product.imgURL,
                    }}
                />
            </View>
                <Text style={styles.product_title}>{product.title}</Text>
                <View style={styles.view_of_priceAndStock}>
                    <Text style={styles.product_price}>{product.price}</Text>
                    <Text style={styles.controlStock_of_product}>{product.inStock ? '' : 'STOKTA YOK'}</Text>
                </View>
        </View>
    )
}

export default Product;
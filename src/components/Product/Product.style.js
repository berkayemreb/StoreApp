import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#b0b0b0',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.2,
        backgroundColor: '#ffffff'
    },
    container_of_image: {
        alignItems: 'center',
    },
    image: {
        margin: 10,
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get('window').height / 5,
        borderRadius: 10,
    },
    product_title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    product_price: {
        fontSize: 14,
    },
    controlStock_of_product: {
        color: '#dc3535',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    view_of_priceAndStock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },

})
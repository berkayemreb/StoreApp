import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#b0b0b0',
        margin: 5,
        padding: 5,
    },
    image: {
        margin: 10,
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get('window').height / 5
    }
})
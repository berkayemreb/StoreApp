import styles from './Search.style';
import React from 'react';
import { View, TextInput } from 'react-native';


const Search = () => {
    return (
        <View>
            <TextInput
                placeholder='Ara...'
                style={styles.container}
            />
        </View>
    )

}

export default Search;
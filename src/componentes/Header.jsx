import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../style/Styles';

export default function Header(){
    return(
        <View style={styles.viewHeader}>
            <Text style={styles.textHeader}>MyAppSoulHealth</Text>
        </View>
    )
}
import React from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import {styles} from '../style/Styles'


export default function Footer(){
    return(
        <View>
            <Text style={styles.footerTitle}>Rodrigo de Andrade Rauen-SoulCode-BCW3</Text>
            <View style={styles.ViewFooter}>
                <TouchableOpacity style={styles.footerButton}
                    onPress={() => Linking.openURL('https://www.instagram.com/rodrigorauen/')}>
                        <Image
                            style={styles.icon}
                            source={require('../images/InstagramIcon.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/rodrigo-de-andrade-rauen-02687a20b/')}>
                        <Image
                            style={styles.icon}
                            source={require("../images/LinkedInIcon.png")}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}


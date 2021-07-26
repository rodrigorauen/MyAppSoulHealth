import React from 'react';
import {Text, View, Image } from 'react-native';
import { styles } from '../style/Styles';

export default function Infos(informacoes){
    return(
        <View style={styles.viewInfos}>
            <View style={styles.viewInfoText}> 
                <Text style={styles.textInfosTitle}>{informacoes.titulo}</Text> 
                <Text style={styles.textInfosAutor}> {informacoes.autor}</Text>
                <Text style={styles.textInfosContent}>{informacoes.conteudo}</Text>
            </View>
        </View>
    )
}
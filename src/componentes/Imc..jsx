import React,{useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../style/Styles';
import Infos from './Infos';


export default function Imc(){
    const [dados, setDados]=useState({
        altura: 0,
        peso:0,
        resultado:0,
    });
    const handleInputChange = (param, valor) => {
        setDados({
            ...dados, [param]: valor
        })
    };
    const textimc = () => {
        if(dados.resultado <= 18.4){
            return(
                <Text> Abaixo do peso - Sintomas: Fadiga, stress, ansiedade...</Text>
            )}
        else if(dados.resultado > 18.4 && dados.resultado <= 24.9){
            return(
                <Text> Peso normal - Menor chance de doenças cardíacas e vasculares</Text>
            )}
        else if(dados.resultado >= 25){
            return(
                <Text> Acima do peso Fadiga, má circulação, varizes...</Text>
            )}
        };
       
    
    return(
        <View>
            {/* Input de dados */}
            <View style={styles.viewImc}>
                <Infos titulo="IMC?" autor="Rodrigo Rauen" conteudo="IMC significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura, o que pode interferir diretamente na saúde e qualidade de vida da pessoa. Assim, a partir do resultado do IMC é possível saber também se a pessoa está dentro do peso ideal e também identificar sobrepeso, obesidade ou desnutrição em crianças, adolescentes, adultos ou idosos. "/>
                <Text style={styles.imcTextTitle}>Calculadora Imc</Text>
                
                <TextInput 
                    style={
                        [styles.imcInput,styles.imcInputBorder]
                    }
                    placeholder='Altura'
                    keyboardType='numeric'
                    onChangeText={
                        (valor)=> handleInputChange('altura', Number  (valor))
                    }
                />
                <TextInput 
                        style={
                            [styles.imcInput,styles.imcInputBorder]
                        }
                        placeholder='Peso'
                        keyboardType='numeric'
                        onChangeText={
                            (valor)=> handleInputChange('peso',     Number  (valor))
                        }
                />
                <TouchableOpacity
                    style={styles.imcButton}
                    onPress={
                        () => {
                            handleInputChange('resultado', Number(dados.peso/(dados.altura*dados.altura)).toFixed(1))
                    }}
                >
                    <Text style={styles.imcButtonText}>Calcular</Text></TouchableOpacity> 
{/* Fim input dados */}
{/* Display Imc */}
                <View style={styles.imcResultVisor}>
                    <Text>{dados.resultado} kg/m2</Text>
                    <Text style={styles.imcResultText}>{textimc()}</Text>
                </View>
{/* Fim display Imc */}
            </View>
           

           
        </View>
    )
}
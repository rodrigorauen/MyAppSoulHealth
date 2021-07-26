import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView> 
        <LinearGradient  
            colors={['rgba(0,0,255,0.1)','rgba(0,0,255,0.3)','rgba(255,255,255,0.3)']}
        >
          <StatusBar style="auto" />
          <Header/>
          <Content/>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});

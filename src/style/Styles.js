import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles= StyleSheet.create({
// Header
    viewHeader: {
        height:150,
        borderBottomWidth:1,
        justifyContent:'center',
    },
    textHeader: {
        fontSize: 40,
        textAlign:'center',
        fontFamily: 'monospace'
    },
//Fim Header 
// Infos
    viewInfos: {
        textAlign:'center',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical:20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    viewInfoText:{
        minWidth: 400,
        maxWidth: 600,
        marginHorizontal: 20,
    },
    textInfosAutor: {
        fontSize: 15,
        fontStyle: 'italic',
        color: 'blue',
        textAlign:'center',
    },
    textInfosTitle: {
        fontSize: 30,
        fontFamily: 'monospace',
        borderBottomWidth:1,
        textAlign:'center',
    },
    textInfosContent: {
        fontSize: 20,
        textAlign:'center',
        padding: 10,
        textAlign:'center',
    },
// Fim infos
// Imc
    viewImc: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10,
        borderWidth:1,
        maxWidth:800,
        borderColor: 'rgba(0,0,200,1)'

    },
    imcTextTitle: {
        fontSize: 30,
        color: 'blue',
        marginBottom: 10,
        fontFamily: 'monospace'
    },
    imcInput: {
        backgroundColor: 'white',
        width:150,
        height: 50,
        textAlign: 'center',
        borderRadius: 10,
    },
    imcInputBorder: {
        borderBottomWidth:1,
    },
    imcButton: {
        backgroundColor: 'black',
        height:40,
        width:100,
        justifyContent: 'center',
        marginVertical:5,
        borderRadius: 10,
    },
    imcButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    imcResultVisor: {
        backgroundColor: 'white',
        alignItems:'center',
        width:150,
        padding: 10,
        borderRadius: 10,
    },
    imcResultText: {
        textAlign: 'center',
        fontSize:18,
        marginVertical: 10
    },
// Fim Imc 
// Content
    viewContent: {
        justifyContent:'center',
        alignItems: 'center',
    },
// Fim Content
    img:{
        width:'100%',
        height:200,
        marginHorizontal:20,
        marginVertical:20,
        borderRadius:10,
    },
    bannerHorizontal:{
        width:'100%',
        height: 150,
        marginBottom:10,
        maxWidth:600,
        borderRadius: 10,
    },
    ViewFooter:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    footerTitle:{
        fontSize:15,
        fontStyle:"italic",
        fontWeight:'bold',
    },
    footerButton:{
        backgroundColor: 'white',
        height:40,
        width:40,
        justifyContent: 'center',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius: 10,  
    },
    icon:{
        width: 40,
        height: 40,
    }
})
import { StyleSheet } from "react-native";

export const styleLogin = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBack:{
        flex: 1,
        justifyContent: 'center',
    },
    secaoInicial:{
        // flex: 0.1,
    },
    divPrincipal:{
        flex: 1,
        alignItems:'center',
        backgroundColor: '#fff',
        gap: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingBottom: 15, 
        padding: 10,   
    },
     botao1:{
        height: 50,
        width: '80%',
        backgroundColor: '#A2C2FF',
        color: '#fff',
        borderRadius: 40,
    },
    textoBotao1:{
        color: 'white',
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputText:{
        height: 80,
        width: '70%',
        margin: 10,
        borderWidth: 3,
        padding: 15,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        color: '#0e0e0e',
    },
    tituloPrincipal:{
        fontSize: 40,
        lineHeight: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    textoDescricao:{
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: '400',
    },
});
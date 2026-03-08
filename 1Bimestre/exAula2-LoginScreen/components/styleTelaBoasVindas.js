import { StyleSheet } from 'react-native';

export const stylesBoasVindas = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBack:{
        flex: 1,
        justifyContent: 'center',
    },
    divTexto:{
        flex: 0.6,
    },
    divBotoes:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems:'center',
        gap: 30,
    },
    tituloPrincipal:{
        fontSize: 35,
        lineHeight: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    textoDescricao:{
        fontSize: 20,
        lineHeight: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: '400',

    },
    botao1:{
        height: 50,
        width: '80%',
        backgroundColor: '#A2C2FF',
        color: '#fff',
        borderRadius: 40,
    },
    botao2:{
        height: 50,
        width: '80%',
        color: '#fff',
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#A2C2FF',
    },
    textoBotao1:{
        color: 'white',
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoBotao2:{
        color: '#A2C2FF',
        fontSize: 20,
        lineHeight: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
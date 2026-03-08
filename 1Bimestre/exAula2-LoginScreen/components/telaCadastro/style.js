import { StyleSheet } from 'react-native';

export const styleCadastro = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBack:{
        flex: 1,
        justifyContent: 'center',
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
    secaoInicial:{
        flex: 0.2,
    },
    divBotoes:{
        flex: 0.4,
        alignItems:'center',
        backgroundColor: '#fff',
        gap: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 15,
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
        height: 60,
        width: '60%',
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        color: '#0e0e0e',
    }
});


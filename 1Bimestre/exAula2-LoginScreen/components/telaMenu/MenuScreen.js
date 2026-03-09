import * as React from 'react';
import { TextInput, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native-web';
import { styleCadastro } from './style';

//constante da imagem background
const image = {uri: 'https://adesivo.com.br/cdn/shop/products/papel-de-parede-adesivo-degrade-azul-e-branco-n05134-748447_1445x.jpg?v=1643335693'};

export function MenuScreen (){

    const [valNome, setNome] = React.useState('');
    const [valEmail, setEmail] = React.useState('');
    const [valSenha, setSenha] = React.useState('');
    const [valConfirma, setConfirma] = React.useState('');

    return (
         <View style={[styleCadastro.container]} edges={['left', 'right']}>
              <ImageBackground source={image} resizeMode="cover" style={styleCadastro.imageBack}>
                    <View style={styleCadastro.secaoInicial}>
                        {/* onPress={() => navigation.popToTop() */}
                        {/* onPress={() => navigation.goBack()} */}
                    </View>
                    <View style={styleCadastro.divBotoes}>
                        <View>
                          <Text style={styleCadastro.tituloPrincipal}>Crie sua Conta</Text>
                          <Text style={styleCadastro.textoDescricao}>Crie sua conta para salvar os seus registros em nosso aplicativo e tals</Text>
                        </View>
                        <TextInput style={styleCadastro.inputText}
                            onChangeText={setNome}
                            value={valNome}
                            placeholder='Seu nome'
                            />
                        <TextInput style={styleCadastro.inputText}
                            onChangeText={setEmail}
                            value={valEmail}
                            placeholder='Seu e-mail'
                            />
                        <TextInput style={styleCadastro.inputText}
                            onChangeText={setSenha}
                            value={valSenha}
                            placeholder='Sua senha'
                            />
                        <TextInput style={styleCadastro.inputText}
                            onChangeText={setConfirma}
                            value={valConfirma}
                            placeholder='Confirmar senha'
                            />
                        <TouchableOpacity style={styleCadastro.botao1} onPress={() => navigation.navigate('Home')}><Text style={styleCadastro.textoBotao1}>Começar</Text></TouchableOpacity>
                    </View>
                    
              </ImageBackground>
        </View>
    );

}

export default MenuScreen;

import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import { styleLogin } from './style';

const image = {uri: 'https://adesivo.com.br/cdn/shop/products/papel-de-parede-adesivo-degrade-azul-e-branco-n05134-748447_1445x.jpg?v=1643335693'};

export function TelaLogin () {

  const [valEmail, setEmail] = React.useState('');
  const [valSenha, setSenha] = React.useState('');

    return (
         <View style={styleLogin.container} edges={['left', 'rigth']}>
              <ImageBackground source={image} resizeMethod='cover' style={styleLogin.imageBack}>
              </ImageBackground>
              <View style={styleLogin.secaoInicial}></View>
                <View style={styleLogin.divPrincipal}>
                  <Text style={styleLogin.tituloPrincipal}>Bem Vindo de Volta!</Text>
                  <Text style={styleLogin.textoDescricao}>Pronto para continuar sua jornada diaria? Se mantenha organizado com nosso app</Text>
                      <TextInput style={styleLogin.inputText} placeholder='Seu e-mail'
                        onChangeText={setEmail}
                        value={valEmail}
                      />
                      <TextInput style={styleLogin.inputText} placeholder='Sua senha'
                        onChangeText={setSenha}
                        value={valSenha}
                      />
                 <TouchableOpacity><Text>Esqueceu a senha?   </Text></TouchableOpacity>
                 <TouchableOpacity style={styleLogin.botao1} onPress={() => navigation.navigate('Home')}><Text style={styleLogin.textoBotao1}>Começar</Text></TouchableOpacity>
               </View>
            </View>
    );
}
export default TelaLogin;
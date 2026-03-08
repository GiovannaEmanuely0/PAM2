import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importações dos componentes

import { TelaLogin } from './components/telaLogin/telaLogin';
import { TelaCadastro } from './components/telaCadastro/telaCadastro';
import { stylesBoasVindas } from './components/styleTelaBoasVindas';

//style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
const image = {uri: 'https://adesivo.com.br/cdn/shop/products/papel-de-parede-adesivo-degrade-azul-e-branco-n05134-748447_1445x.jpg?v=1643335693'};

function HomeScreen({ navigation }) {
  return (
     <View style={[stylesBoasVindas.container]} edges={['left', 'right']}>
        <ImageBackground  source={image} resizeMode="cover" style={stylesBoasVindas.imageBack}>
          <View style={stylesBoasVindas.divTexto}>
            <Text style={stylesBoasVindas.tituloPrincipal}>Bem Vindo!</Text>
                <Text style={stylesBoasVindas.textoDescricao}>Nós somos muito incriveis, confiaveis, prezamos pela sua organização e tals, esperamos que goste!
                </Text>
          </View>
              <View style={stylesBoasVindas.divBotoes}>
                <TouchableOpacity style={stylesBoasVindas.botao1} onPress={() => navigation.navigate('Details')}> <Text style={stylesBoasVindas.textoBotao1}>Criar Conta</Text></TouchableOpacity>
                <TouchableOpacity style={stylesBoasVindas.botao2} onPress={() => navigation.navigate('Log In')}><Text style={stylesBoasVindas.textoBotao2}>Log In</Text></TouchableOpacity>
              </View>
        </ImageBackground>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View><TelaCadastro></TelaCadastro></View>
  );
}
function LoginScreen({ navigation }) {
  return (
    <View>
        <TelaLogin></TelaLogin>
    </View>
  );
}
function MenuScreeen({ navigation }) {
  return (
    <View>
        <Text>Hi</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Log In" component={LoginScreen} />
      </Stack.Navigator>
      <Stack.Screen 
        name='menu'
        component={MenuScreeen}
      ></Stack.Screen>
    </NavigationContainer>
  );
}

export default App;

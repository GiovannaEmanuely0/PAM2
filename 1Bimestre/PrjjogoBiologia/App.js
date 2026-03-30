import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style={styles.div_img}>
              <Text>oi</Text>
          </View>
          <View style={styles.div_text}>
              <View style={styles.img}>
              </View>
              <View style={styles.text}>
                <Text>Meiose</Text>
                <Text>
                  A meiose é a divisão celular que ocorre na formação dos gametas, reduzindo o número de cromossomos de uma espécie pela metade.

                  Assim, uma célula-mãe diploide origina 4 células-filhas haploides.

                  O processo ocorre por meio de duas etapas de divisões celulares sucessivas, dando origem a quatro células:
                </Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={{uri:'https://s1.static.brasilescola.uol.com.br/be/2020/03/duplicacao-do-cromossomo.jpg'}}
                ></Image>
              </View>
              <View style={styles.text}>
                <Text>
                  Meiose I: Etapa reducional, pois o número de cromossomos é reduzido pela metade.
                  Meiose II: Etapa equacional, o número de cromossomos das células que se dividem mantém-se o mesmo nas células que se formam.

                  A meiose ocorre quando a célula entra em fase de reprodução, sendo o processo essencial para a formação de gametas, esporos e nas divisões do zigoto.
                </Text>
              </View>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'black',
  },
  div_img:{
    backgroundColor: '#f00',
    height: 200,
    width: '100%',
  },
  div_text:{
    backgroundColor: '#00f',
  },
});

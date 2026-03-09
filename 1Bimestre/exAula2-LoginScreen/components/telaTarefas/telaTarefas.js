import * as React from 'react';
import { TextInput, Text, View, TouchableOpacity, ImageBackground, ScrollView, FlatList} from 'react-native-web';

export function telaTarefas (){

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba' ,
            nome: 'fazer lição matemática' ,
            prazoconclusao: '02/04/2026' ,
            datacriacao: '09/03/2026' ,
            statustarefa: 'não concluida' ,
            prioridade: 'não urgente' ,
            categoria: 'Escola' ,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba' ,
            nome: 'levar carro no mecanico' ,
            prazoconclusao: '11/03/2026' ,
            datacriacao: '09/03/2026' ,
            statustarefa: 'não concluida' ,
            prioridade: 'urgente' ,
            categoria: 'Casa' ,
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba' ,
            nome: 'fazer redação sobre meio ambiente' ,
            prazoconclusao: '20/03/2026' ,
            datacriacao: '09/03/2026' ,
            statustarefa: 'não concluida' ,
            prioridade: 'não urgente' ,
            categoria: 'Estudos' ,
        },
    ];

    const Item = ({nome}, {prazoconclusao}, {datacriacao}, {statustarefa}, {prioridade}, {categoria}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{nome}</Text>
          <Text style={styles.title}>{prazoconclusao}</Text>
          <Text style={styles.title}>{datacriacao}</Text>
          <Text style={styles.title}>{statustarefa}</Text>
          <Text style={styles.title}>{prioridade}</Text>
          <Text style={styles.title}>{categoria}</Text>
        </View>
      );

      return(
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item nome={item.nome} prazo={item.prazoconclusao} data={item.datacriacao}
            status={item.statustarefa} prioridade={item.prioridade} categoria={item.categoria}
            />}
            keyExtractor={item => item.id}
          />
        </View>
        )  
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        },
        item: {
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
      });
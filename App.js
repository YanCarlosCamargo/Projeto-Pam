import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import Lancamentos from "./src/components/Lancamentos";
import Cabecalho from "./src/components/cabecalho";
import Botao from './src/components/botao';
import dados from './dados';
import Jogos from "./src/components/Jogos";

export default function App() {
  return (
  <ScrollView >
  <Cabecalho></Cabecalho>
  
<Botao
  Logo="logo-android"
  texto="APLICATIVOS"
  cor="#9FE2BF"
  Logo2="game-controller"
  texto2="JOGOS"
  cor2="#820066"
/>
<Botao
  Logo="film"
  texto="FILMES"
  cor="#FF7F50"
  Logo2="musical-notes"
  texto2="MUSICAS"
  cor2="#6495ED"
/>
<Botao
  Logo="book"
  texto="LIVROS"
  cor="#CCCCFF"
  Logo2="journal"
  texto2="NOTICIAS"
  cor2="#FFBF00"
/>
    <View style={{backgroundColor: "#D3D3D3", flex: 1,}} >
    <Text style={styles.h1}>Lançamentos</Text>
    <Lancamentos/>
   
         
    <Text style={styles.h1}>Apps Gratuitos</Text>
    <Lancamentos/>
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    marginTop: '7%',
    marginLeft: '7%'
  }
});

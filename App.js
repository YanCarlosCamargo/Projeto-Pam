import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/Jogos";
import dados from "./dados";

export default function App() {
  return (
    <View style={{ backgroundColor: "#D3D3D3", flex: 1 }}>
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

      <FlatList 
        horizontal={true} 
        data={dados} 
        keyExtractor={item => item.id}
        renderItem={({item}) => (

          <Jogos
            titulo={item.nome}
            valor={item.valor == 0 ? "Grátis": `R$ ${item.valor}`}
            imagem={item.imagem}
          />
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({});

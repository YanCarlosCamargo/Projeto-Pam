import { FlatList, StyleSheet, Text, View } from "react-native";

import Jogos from "../Jogos";
import dados from "../../../dados";

export default function Lancamentos() {
  return (
    <>
      
        <FlatList
          horizontal={true}
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Jogos
              titulo={item.nome}
              valor={item.valor == 0 ? "Grátis" : `R$ ${item.valor}`}
              imagem={item.imagem}
            />
          )}
        />
      
    </>
  );
}

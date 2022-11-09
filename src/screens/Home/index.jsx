import React, { useEffect, useState } from "react";
import { Button, FlatList, Text } from "react-native";
import firebase from '../../../firebase/Connection';
import Card from "../../components/Card";
import { Container } from "./style";

export function Home({ navigation }) {

  const [listaAlunos, setListaAlunos] = useState([])

  useEffect(() => {
    console.log(listaAlunos)
  }, [listaAlunos])

  useEffect(() => {

    async function buscarAlunos() {
      console.log("rodou")

      await firebase.database().ref('Alunos').on('value', (snapshot) => {
        snapshot.forEach((childItem) => {
          var data = {
            key: childItem.key,
            nome: childItem.val().nome,
            imagem: childItem.val().imagem,
            nota1: childItem.val().nota1,
            nota2: childItem.val().nota2,
            nota3: childItem.val().nota3,
          }
          setListaAlunos(alunos => [...alunos, data]);
        })
      })
    }
    buscarAlunos();
  }, [])



  return <Container >
    <Text>Home</Text>
    <Card />
    <Card />
    <Button
      title="Tela para mostrar Alunos"
      onPress={() => navigation.navigate("Cadastrar")}
    />
    <FlatList />
  </Container>
}
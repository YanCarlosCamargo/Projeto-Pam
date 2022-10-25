import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from '../../../firebase/Connection'

export default function Cadastrar() {

  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [imagem, setImagem] = useState('');
  const [listaAlunos, setListaAlunos] = useState([])



  async function cadastrar() {
    const alunos = await firebase.database().ref('Alunos');
    alunos.push({
      nome,
      nota1,
      nota2,
      nota3,
      imagem,
    });
    console.log({
      nome,
      nota1,
      nota2,
      nota3,
      imagem,
    })
  }


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



  return (

      <View style={estilos.container}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Cadastro de Alunos </Text>
        <Text style={estilos.texto}>Nome :</Text>
        <TextInput
          style={estilos.entradas}
          placeholder='Digite o nome do aluno'
          onChangeText={(texto) => setNome(texto)} />

        <Text style={estilos.texto}>Nota1 :</Text>

        <TextInput
          style={estilos.entradas}
          placeholder='Digite a Nota 1 do aluno'
          onChangeText={setNota1} />

        <Text style={estilos.texto}>Nota2 :</Text>
        <TextInput style={estilos.entradas} placeholder='Digite a Nota 2 do aluno'
          onChangeText={setNota2}/>

        <Text style={estilos.texto}>Nota3 :</Text>
        <TextInput style={estilos.entradas} placeholder='Digite a Nota 3 do aluno'
          onChangeText={setNota3}/>

        <Text style={estilos.texto}>Imagem :</Text>

        <TextInput style={estilos.entradas} placeholder='Digite o link com a foto do aluno'
          onChangeText={setImagem}/>



        <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
          <Text style={{ fontWeight: 'bold  ' }} >Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
          <Text style={{ fontWeight: 'bold  ' }} >Mostrar Alunos</Text>
        </TouchableOpacity>

      </View>
      
   

    ); 

}

const estilos = StyleSheet.create({

  container:{
      flex:1,
      alignItems:'center'

  },
  entradas :{
      width:'85%',
      height:30,
      borderWidth:2
  },
  botao:{
      width:'85%',
      height:60,
      alignItems:'center',
      backgroundColor:'orange',
      marginTop:20,
      justifyContent:'center',
      fontWeight:'bold'
  },
  texto:{
      marginTop:20,
      marginLeft:-252,
      fontSize:15,
      fontWeight:'bold'


  }


})
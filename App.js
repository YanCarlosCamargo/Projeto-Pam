import React, {useEffect, useState} from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from './firebase/Connection'

export default function Cadastrar(){

  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [imagem, setImagem] = useState('');



  async function cadastrar(){
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



    return(

        <View style ={estilos.container}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos </Text>
        <Text style ={estilos.texto}>Nome :</Text>
        <TextInput  
        style ={estilos.entradas} 
        placeholder='Digite o nome do aluno' 
        onChangeText = {(texto) => setNome(texto)}
        ></TextInput>
    
        <Text style ={estilos.texto}
        >Nota1 :</Text>

        <TextInput  
        style ={estilos.entradas} 
        placeholder='Digite a Nota 1 do aluno'
        onChangeText = {setNota1}
        
        ></TextInput>

        <Text style ={estilos.texto}>Nota2 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 2 do aluno'
        onChangeText = {setNota2}
        ></TextInput>

        <Text style ={estilos.texto}>Nota3 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 3 do aluno'
        onChangeText = {setNota3}
        ></TextInput>

        <Text style ={estilos.texto}>Imagem :</Text>

        <TextInput style ={estilos.entradas} placeholder='Digite o link com a foto do aluno' 
        onChangeText={setImagem}
        ></TextInput>



    <TouchableOpacity style ={estilos.botao} onPress={cadastrar}>
        <Text style={{fontWeight:'bold  '}} >Cadastrar</Text></TouchableOpacity>
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
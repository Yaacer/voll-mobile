import { Image, VStack, Text, Link, Box, useToast } from 'native-base';
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutenticacaoServicos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

export default function Login({ navigation }:any) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if(token) {
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  },[])

  async function login(){
    const resultado = await fazerLogin(email,senha)
    if(resultado) {
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)

      navigation.replace('Tabs')
      toast.show({
        title: "Login efetuado com sucesso!",
        backgroundColor: "green.500"
      })
      
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if(carregando) {
    return null;
  }
  
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="logo" />
      <Titulo>
        Faça login em sua conta
      </Titulo>
      <EntradaTexto placeholder='Email' label='Email' value={email} onChangeText={setEmail}></EntradaTexto>
      <EntradaTexto placeholder='Insira sua senha!' label='Senha' secureTextEntry={true} value={senha} onChangeText={setSenha}></EntradaTexto>
      <Botao onPress={login}>
        Entrar
      </Botao>
      <Link mt={5} href='https://www.google.com.br'>Esqueceu sua senha?</Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={2}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
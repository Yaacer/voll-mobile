import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar source={{
                uri: "https://github.com/Yaacer.png"
                }} mt={5} size="xl"/>
                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg">Roberto Lindo</Titulo>
                <Titulo>25/01/2006</Titulo>
                <Titulo>Votuporanga / SP</Titulo>

                <Divider mt={5} />

                <Titulo color="blue.500">Historico Médico</Titulo>
                <Text fontSize={18}>Bronquite</Text>
                <Text fontSize={18}>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}
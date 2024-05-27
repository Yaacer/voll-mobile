import { VStack, Text, ScrollView, Divider, Box } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";

export default function Explorar() {
    return (
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Box w="100%" borderRadius="xl" p={3} mt={5} shadow={1} borderRightRadius="md" bg={"white"}>
                    <EntradaTexto placeholder='Digite a especialidade'></EntradaTexto>
                    <EntradaTexto placeholder='Digite sua localização'></EntradaTexto>
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>

                <Titulo color="blue.500" fontSize="xl" alignSelf="center">Resultado da busca</Titulo>
                {[1, 2, 3].map((_, index) => (
                    <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index} mt={5}>
                        <CardConsulta
                            especialidade="Cardiologista"
                            foto="https://github.com/Yaacer.png"
                            nome="Dr. Roberto Moraes"
                        />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}
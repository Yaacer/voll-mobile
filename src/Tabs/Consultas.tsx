import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";

export default function Consultas() {
    return(
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome="Dr. Roberto Moraes" data="05/06/2024" especialidade="Urologista" foto="https://github.com/Yaacer.png" foiAtendido foiAgendado/>
        </VStack>
    )
}
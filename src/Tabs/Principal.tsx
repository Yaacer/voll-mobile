import { Image, VStack, Text, ScrollView, Box, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import Logo from '../assets/Logo.png'

export default function Principal() {
    return (
        <ScrollView flex={1} bgColor="white">
            <Image source={Logo} alt="logo" />
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Titulo color="blue.500">Boas-vindas!</Titulo>
                <Box w="100%" borderRadius="xl" p={3} mt={5} shadow={1} borderRightRadius="md" bg={"white"}>
                    <EntradaTexto placeholder='Digite a especialidade'></EntradaTexto>
                    <EntradaTexto placeholder='Digite sua localização'></EntradaTexto>
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>
                <Box w="100%" borderRadius="xl" p={3} mt={5} shadow={1} borderRightRadius="md" flex={1} alignItems="center">
                    <Titulo color="blue.700">Depoimentos</Titulo>
                    <Text color="gray.300" mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id quam quis felis sodales lacinia sit amet ac ligula. Vivamus sem quam, aliquet at lorem et, imperdiet consequat mauris. Quisque sodales sodales elit vitae dictum. Donec auctor quam nec lorem euismod, eget vehicula tellus semper. Etiam nec turpis leo. Proin at porta purus, eget tincidunt felis. Cras semper nisi vel ante finibus, vel molestie quam lacinia. Etiam eget mattis libero, vel molestie sem. Etiam hendrerit ipsum lacus, eu auctor massa mollis et.</Text>
                    <Text color="gray.600" fontWeight={"bold"} mt={5}>Júlio, 40 anos, São Paulo/SP.</Text>
                    <Divider mt={5} />
                    <Text color="gray.300" mt={3}>Suspendisse potenti. Fusce eu arcu mi. Praesent tincidunt mauris diam, luctus tincidunt ante euismod eu. Pellentesque viverra tincidunt sem, et tincidunt metus semper quis. Nam ornare vitae dolor et interdum. Proin ultrices facilisis neque a interdum. Etiam et mauris elit. Aliquam ac lectus quis leo maximus pellentesque. Duis ornare fermentum libero ac pharetra. Nulla id posuere sem. Morbi a urna at erat malesuada pharetra non a sapien. Etiam aliquet convallis felis, vel hendrerit dolor porttitor et.</Text>
                    <Text color="gray.600" fontWeight={"bold"} mt={5}>Maria, 37 anos, São Paulo/SP.</Text>
                    <Divider mt={5} />
                    <Text color="gray.300" mt={3}>Quisque a imperdiet nisl. Mauris tristique id lectus nec volutpat. Donec venenatis bibendum risus nec tincidunt. Sed ante sapien, egestas ut condimentum mattis, ullamcorper ac orci. Donec viverra risus ex, sit amet tempor metus fermentum id. Donec aliquet consectetur lacus sed aliquet. Praesent malesuada sapien leo, vel semper augue faucibus non. Quisque sed rhoncus mauris, sed lobortis enim. Praesent bibendum magna vitae neque maximus, non consequat metus suscipit. Pellentesque at orci quis risus sollicitudin fringilla at eget lectus. Etiam at pretium libero. Aenean elit turpis, semper id leo nec, lobortis sodales neque. Vestibulum laoreet consequat ante, ut dictum erat egestas sit amet. Etiam at cursus ex, sit amet imperdiet augue. Nam neque mauris, pretium a sollicitudin sit amet, malesuada a erat. Ut pharetra, odio dapibus suscipit molestie, tortor nisi condimentum metus, in facilisis justo ipsum ac sem.</Text>
                    <Text color="gray.600" fontWeight={"bold"} mt={5}>Rafaela, 21 anos, São Paulo/SP.</Text>
                    <Divider mt={5} />
                    <Text color="gray.300" mt={3}>Donec gravida purus ipsum, scelerisque viverra tellus dictum vel. Nulla interdum pretium nibh vel accumsan. Maecenas fringilla vel sem in finibus. Nam nunc orci, vulputate non blandit ac, imperdiet ut orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed congue lectus. Quisque vel gravida metus. Sed semper sed felis at bibendum.</Text>
                    <Text color="gray.600" fontWeight={"bold"} mt={5}>José, 18 anos, São Paulo/SP.</Text>
                </Box>
            </VStack>
        </ScrollView>
    )
}
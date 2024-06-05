import api from "./api";

export async function deletaConsulta(consultaId: string) {
    try {
        const resultado = await api.delete(`/consulta/${consultaId}`)
        console.log(resultado.data)
        return resultado.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
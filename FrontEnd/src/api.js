const API_URL = "http://127.0.0.1:8000";  

export const getFornecedores = async (consumo_mensal) => {
    try {
        const response = await fetch(`${API_URL}/fornecedores/?consumo_mensal=${consumo_mensal}`);
        if (!response.ok) {
            throw new Error("Não obtemos retorno da rede");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching fornecedores:", error);
        throw error;
    }
};

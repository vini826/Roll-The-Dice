// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const diceTypeSelect = document.getElementById('diceType');
    const rollButton = document.getElementById('rollButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const errorDisplay = document.getElementById('errorDisplay');

    // URL base do seu backend
    const API_BASE_URL = 'http://localhost:3000'; // Mude para o endereço do seu backend se ele estiver em outro lugar

    rollButton.addEventListener('click', async () => {
        const selectedDice = diceTypeSelect.value;
        errorDisplay.textContent = ''; // Limpa mensagens de erro anteriores
        resultDisplay.textContent = 'Rolando...'; // Mensagem de carregamento

        try {
            const response = await fetch(`${API_BASE_URL}/roll/${selectedDice}`);

            if (!response.ok) {
                // Se a resposta não for OK (ex: status 400, 500)
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao rolar o dado.');
            }

            const data = await response.json();
            resultDisplay.textContent = `${data.message}`; // Exibe a mensagem do backend
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            errorDisplay.textContent = `Ocorreu um erro: ${error.message}`;
            resultDisplay.textContent = 'Falha na rolagem.';
        }
    });
});
// backend/src/server.js
const express = require('express');
const cors = require('cors'); // Importa o pacote CORS

const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor, usando 3000 como padrão

// Middleware para permitir requisições JSON no corpo da requisição
app.use(express.json());

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());

// Rota de teste simples para verificar se o servidor está online
app.get('/', (req, res) => {
    res.send('Servidor Roll The Dice rodando!');
});

// Lógica de rolagem de dados
function rollDice(sides) {
    if (sides <= 0 || isNaN(sides)) {
        throw new Error("Número de lados do dado inválido.");
    }
    return Math.floor(Math.random() * sides) + 1;
}

// Rota para a rolagem de dados
app.get('/roll/:sides', (req, res) => {
    const sides = parseInt(req.params.sides, 10); // Converte o parâmetro para número inteiro

    try {
        const result = rollDice(sides);
        res.json({
            diceType: `d${sides}`,
            result: result,
            message: `Você rolou um d${sides} e obteve ${result}.`
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
# Desafio: Roll The Dice - Simulador de Rolagem de Dados de RPG

Este projeto é uma implementação do desafio "Roll The Dice", um simulador de rolagem de dados de RPG. Ele foi desenvolvido com o objetivo de demonstrar a capacidade de integrar um front-end com um back-end através de uma API.

## Habilidades Demonstradas

* **API (Application Programming Interface):** Criação de um servidor back-end com um endpoint RESTful (`/roll/:sides`) para processar as requisições de rolagem de dados e comunicação assíncrona do front-end com essa API.
* **Estruturação:** Organização clara do projeto em módulos front-end e back-end, seguindo boas práticas de separação de responsabilidades.
* **Lógica:** Implementação da lógica de geração de números aleatórios para simular a rolagem de diferentes tipos de dados de RPG (d4, d6, d8, d10, d12, d20, d100).

## Tecnologias Utilizadas

* **Front-end:**
    * **HTML5:** Estrutura da página web.
    * **CSS3:** Estilização e layout da interface do usuário.
    * **JavaScript (Puro):** Lógica de interação com o usuário e consumo da API do back-end.
* **Back-end:**
    * **Node.js:** Ambiente de execução JavaScript para o servidor.
    * **Express.js:** Framework web leve e flexível para construir a API RESTful.
    * **CORS:** Middleware para permitir requisições cross-origin entre o front-end e o back-end.

## Estrutura do Projeto

A estrutura do diretório é organizada para facilitar a navegação e a compreensão das diferentes partes da aplicação:

```
roll-the-dice/
├── backend/                  # Contém todo o código do back-end (servidor Node.js/Express)
│   ├── src/
│   │   └── server.js         # Onde o servidor Express é configurado e a lógica da API reside.
│   ├── package.json          # Arquivo de configuração do projeto Node.js e lista de dependências.
│   └── node_modules/         # (Gerado após 'npm install') Contém as bibliotecas instaladas.
│
├── frontend/                 # Contém todo o código do front-end (HTML, CSS, JavaScript puro)
│   ├── index.html            # A página principal do simulador.
│   ├── style.css             # Os estilos CSS para a interface.
│   └── script.js             # O JavaScript que lida com a interação do usuário e as chamadas à API.
│
└── README.md                 # Este arquivo, com informações sobre o projeto.
```

## Como Rodar o Projeto (Passo a Passo)

Siga estas instruções para configurar e executar a aplicação em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) (que é instalado junto com o Node.js) instalados em seu sistema.

### 1. Clonar o Repositório (ou Baixar)

Primeiro, obtenha o código do projeto. Se estiver usando Git:

```bash
git clone <URL_DO_SEU_REPOSITORIO> # Substitua <URL_DO_SEU_REPOSITORIO> pela URL real do seu repositório Git
cd roll-the-dice
```

### 2. Configurar e Iniciar o Back-end

Abra um terminal e navegue até a pasta backend:

```bash
cd backend
```

```bash
npm install
```

```bash
node src/server.js
```

### 3. Acessar o Front-end

Abra um novo terminal e navegue até a pasta frontend:

```bash
cd ../frontend
```

Para visualizar o front-end, você pode simplesmente abrir o arquivo index.html em seu navegador web preferido.

```bash
# Na pasta 'frontend'
python -m http.server
```
### 4. Interagindo com o Simulador

Isso iniciará um servidor geralmente em http://localhost:8000. Acesse esta URL no seu navegador.

Uma vez que o front-end estiver carregado no seu navegador:

**Você verá um dropdown para selecionar o tipo de dado (d4, d6, d8, d10, d12, d20, d100).**
**Selecione o dado desejado.**
**Clique no botão "Rolar Dado".**
**O resultado da rolagem, processado pelo seu back-end, será exibido na seção "Resultado".**

Contato
Para dúvidas, sugestões ou mais informações, sinta-se à vontade para entrar em contato:

Vinicius Chiabai Fernandes
Email: vinicius.chiabai@gmail.com
LinkedIn: www.linkedin.com/in/vinícius-chiabai

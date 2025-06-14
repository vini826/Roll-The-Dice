# Desafio: Roll The Dice - Simulador de Rolagem de Dados de RPG

Este projeto é uma implementação do desafio "Roll The Dice", um simulador de rolagem de dados de RPG. Ele foi desenvolvido com o objetivo de demonstrar a capacidade de integrar um front-end com um back-end através de uma API RESTful.

## Habilidades Demonstradas

* **API (Application Programming Interface):** Criação de um servidor back-end com um endpoint RESTful (`/roll/:sides`) para processar as requisições de rolagem de dados e comunicação assíncrona do front-end com essa API.
* **Estruturação:** Organização clara do projeto em módulos front-end e back-end, seguindo boas práticas de separação de responsabilidades para um código mais modular e sustentável.
* **Lógica:** Implementação da lógica de geração de números aleatórios para simular a rolagem de diferentes tipos de dados de RPG (d4, d6, d8, d10, d12, d20, d100).
* **Design Visual:** Implementação de uma interface de usuário com tema escuro e elementos visuais inspirados em jogos de RPG, buscando uma estética profissional e imersiva, conforme exemplos fornecidos.

## Diferenciais

* **Histórico de Rolagens:** Foi implementado um sistema de histórico que registra as últimas rolagem e permite sua visualização e limpeza, agregando um recurso "bem-visto" ao projeto.
* [cite_start]**Flexibilidade de Tecnologia:** Embora o uso de React e Node.js fosse um diferencial, a escolha de Node.js no back-end já se alinha a essa preferência, enquanto o uso de JavaScript puro no front-end demonstra a capacidade de construir interfaces dinâmicas sem a necessidade de frameworks complexos para este escopo.

## Tecnologias Utilizadas

* **Front-end:**
    * **HTML5:** Estrutura fundamental da página web.
    * **CSS3:** Estilização e layout responsivo da interface do usuário.
    * **JavaScript (Puro):** Responsável pela lógica de interação com o usuário e pelo consumo assíncrono da API do back-end.
* **Back-end:**
    * **Node.js:** Ambiente de execução JavaScript robusto e escalável para o servidor.
    * **Express.js:** Framework web leve e flexível, utilizado para construir a API RESTful de forma eficiente.
    * **CORS (Cross-Origin Resource Sharing):** Middleware configurado para permitir requisições seguras entre o front-end e o back-end, operando em diferentes portas/origens.

## Estrutura do Projeto

A estrutura do diretório é organizada de forma intuitiva para facilitar a navegação e a compreensão das diferentes partes da aplicação:

```
roll-the-dice/
├── backend/                  # Contém todo o código do back-end (servidor Node.js/Express)
│   ├── src/
│   │   └── server.js         # Lógica principal do servidor Express e dos endpoints da API.
│   ├── package.json          # Arquivo de configuração do projeto Node.js e lista de dependências.
│   └── node_modules/         # (Gerado automaticamente após 'npm install') Contém as bibliotecas de terceiros.
│
├── frontend/                 # Contém todo o código do front-end (HTML, CSS, JavaScript puro)
│   ├── assets/               # Imagens dos dados utilizadas na interface.
│   ├── index.html            # A página HTML principal do simulador.
│   ├── style.css             # As regras de estilo CSS para a interface.
│   └── script.js             # O JavaScript que gerencia a interação do usuário e as chamadas à API.
│
└── README.md                 # Este arquivo, fornecendo uma visão geral e instruções detalhadas 
```

## Como Rodar o Projeto Localmente

Siga estas instruções passo a passo para configurar e executar a aplicação em sua máquina.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/get-npm) (que é instalado junto com o Node.js) instalados em seu sistema.

### 1. Obter o Código-Source

Primeiro, obtenha o código do projeto. Se estiver utilizando Git, clone o repositório:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd roll-the-dice
```

## 2. Configurar e Iniciar o Back-end
Abra um primeiro terminal e navegue até a pasta backend do projeto:

```Bash
cd backend
```
Instale as dependências do Node.js:

```Bash
npm install
```

Inicie o servidor back-end:

```Bash
node src/server.js
```

Você deverá ver uma mensagem no terminal indicando que o servidor está rodando (ex: Servidor rodando em http://localhost:3000). Mantenha este terminal aberto, pois o back-end precisa estar ativo para o front-end funcionar.

## 3. Acessar o Front-end
Abra um segundo terminal e navegue até a pasta frontend do projeto:

```Bash
cd ../frontend
```

Para visualizar a interface do simulador no seu navegador, você tem duas opções:

Opção A: Abrir diretamente o arquivo HTML (simples):
Simplesmente arraste o arquivo index.html para a janela do seu navegador web. A URL na barra de endereços começará com file://.

Opção B: Usar um servidor HTTP local (recomendado):
Para evitar possíveis problemas de CORS (Cross-Origin Resource Sharing) que podem ocorrer ao acessar arquivos locais diretamente em alguns navegadores, é recomendado usar um servidor HTTP simples. Se você tiver Python instalado, pode fazer isso com:

```Bash
python -m http.server
```

Este comando iniciará um servidor HTTP local, geralmente acessível em http://localhost:8000. Abra esta URL no seu navegador.

## 4. Interagindo com o Simulador
Uma vez que o front-end estiver carregado no seu navegador (seja via file:// ou http://localhost:8000):

Selecione o Dado: Utilize o dropdown para escolher o tipo de dado que deseja rolar (d4, d6, d8, d10, d12, d20, d100).
Rolar: Clique no botão "Rolar Dado".
Visualizar Resultado: O resultado da rolagem, processado pelo seu back-end, será exibido na seção "Resultado" da interface. As rolagem também serão adicionadas ao histórico.
Limpar Histórico: Se desejar, clique no botão "Limpar" na área do histórico para remover os registros anteriores.
Contato
Para dúvidas, sugestões ou mais informações, sinta-se à vontade para entrar em contato:

## Contato

Para dúvidas, sugestões ou mais informações, sinta-se à vontade para entrar em contato:

* **Vinicius Chiabai Fernandes**
* **Email:** vinicius.chiabai@gmail.com
* **LinkedIn:** [www.linkedin.com/in/vinícius-chiabai](https://www.linkedin.com/in/vinícius-chiabai)
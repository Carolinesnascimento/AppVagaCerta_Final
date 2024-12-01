# VagaCerta API  

Este projeto é uma API RESTful criada com *Node.js, **Express* e *Sequelize, que implementa operações CRUD (Create, Read, Update, Delete) para as entidades **Usuários* e *Vagas. O banco de dados utilizado é o **SQLite*.  

---

## Tecnologias Utilizadas  

- *Node.js*  
- *Express*  
- *Sequelize*  
- *SQLite*  
- *Body-parser*  
- *UUID* (para geração de IDs únicos)  

---

## Estrutura do Projeto  

- *server.js*: Arquivo principal da aplicação que inicia o servidor.  
- *config/database.js*: Configuração do Sequelize e do banco de dados SQLite.  
- *routes/usuarios.js*: Rotas para o CRUD de Usuários.  
- *routes/vagas.js*: Rotas para o CRUD de Vagas.  

---

## Como Baixar o Código da API do Aplicativo VagaCerta  

1. Instale o Git no seu computador.  
2. Execute o seguinte comando no terminal:  

bash
git clone https://github.com/Carolinesnascimento/VAGAS-API.git
  

---

## Como Executar a API do Aplicativo VagaCerta  

1. Acesse o diretório do projeto:  

bash
cd VAGAS-API
  

2. Instale as dependências do projeto:  

bash
npm install
  

3. Inicie a aplicação:  

bash
npm start
  

### Observações:  

- A API foi configurada para rodar na porta *3000* do computador.  
- O repositório no GitHub já inclui o arquivo *database.sqlite* povoado com dados de exemplo.  

---

## Endpoints  

### Usuários  

Endpoint para listar todos os usuários:  

bash
GET http://localhost:3000/api/usuarios
  

#### Exemplo de resposta:  

json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123",
    "createdAt": "2024-11-30T16:09:24.617Z",
    "updatedAt": "2024-12-01T01:29:47.242Z"
  },
  {
    "id": 2,
    "nome": "Carol Souza",
    "email": "carol@gmail.com",
    "senha": "senha123",
    "createdAt": "2024-11-30T16:13:38.799Z",
    "updatedAt": "2024-12-01T13:43:33.212Z"
  },
  {
    "id": 3,
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "senha": "senha456",
    "createdAt": "2024-11-30T16:23:28.896Z",
    "updatedAt": "2024-11-30T16:23:28.896Z"
  },
  {
    "id": 5,
    "nome": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "senha": "senha789",
    "createdAt": "2024-11-30T17:55:12.322Z",
    "updatedAt": "2024-11-30T17:55:12.322Z"
  }
]
  

### Vagas  

Endpoint para listar todas as vagas:  

bash
GET http://localhost:3000/api/vagas
  

#### Exemplo de resposta:  

json
[
  {
    "id": 2,
    "titulo": "Desenvolvedor Back-end",
    "descricao": "Desenvolvimento de APIs RESTful utilizando Node.js.",
    "dataCadastro": "2024-06-28T00:00:00.000Z",
    "telefone": "8765-4321",
    "status": "aberta",
    "empresa": "Innovative Tech",
    "createdAt": "2024-11-30T16:21:06.379Z",
    "updatedAt": "2024-11-30T16:21:06.379Z"
  },
  {
    "id": 3,
    "titulo": "Analista de Sistemas",
    "descricao": "Análise e levantamento de requisitos de sistemas.",
    "dataCadastro": "2024-06-25T00:00:00.000Z",
    "telefone": "9988-7766",
    "status": "encerrada",
    "empresa": "System Analysts Inc.",
    "createdAt": "2024-11-30T16:21:20.254Z",
    "updatedAt": "2024-11-30T16:21:20.254Z"
  },
  {
    "id": 4,
    "titulo": "Engenheiro de Software",
    "descricao": "Desenvolvimento de software em diversas linguagens.",
    "dataCadastro": "2024-06-20T00:00:00.000Z",
    "telefone": "5544-3322",
    "status": "aberta",
    "empresa": "Global Software Solutions",
    "createdAt": "2024-11-30T16:21:27.097Z",
    "updatedAt": "2024-11-30T16:21:27.097Z"
  },
  {
    "id": 5,
    "titulo": "Suporte Técnico",
    "descricao": "Atendimento e suporte a clientes.",
    "dataCadastro": "2024-06-15T00:00:00.000Z",
    "telefone": "4433-2211",
    "status": "encerrada",
    "empresa": "Customer Support Ltd.",
    "createdAt": "2024-11-30T16:21:33.313Z",
    "updatedAt": "2024-11-30T16:21:33.313Z"
  },
  {
    "id": 6,
    "titulo": "Gerente de Projetos",
    "descricao": "Gestão e coordenação de projetos de TI.",
    "dataCadastro": "2024-06-10T00:00:00.000Z",
    "telefone": "1122-3344",
    "status": "aberta",
    "empresa": "Project Managers Corp.",
    "createdAt": "2024-11-30T16:21:52.029Z",
    "updatedAt": "2024-11-30T16:21:52.029Z"
  },
  {
    "id": 7,
    "titulo": "Designer UX/UI",
    "descricao": "Criação de interfaces e experiências de usuário.",
    "dataCadastro": "2024-06-05T00:00:00.000Z",
    "telefone": "6677-8899",
    "status": "encerrada",
    "empresa": "Creative Designs",
    "createdAt": "2024-11-30T16:21:58.895Z",
    "updatedAt": "2024-11-30T16:21:58.895Z"
  },
  {
    "id": 8,
    "titulo": "Analista de Dados",
    "descricao": "Análise e interpretação de dados empresariais.",
    "dataCadastro": "2024-06-01T00:00:00.000Z",
    "telefone": "5566-7788",
    "status": "aberta",
    "empresa": "Data Analysts LLC",
    "createdAt": "2024-11-30T16:22:06.517Z",
    "updatedAt": "2024-11-30T16:22:06.517Z"
  }
]

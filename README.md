![image](https://github.com/user-attachments/assets/11d0e0de-efd7-4220-ac3b-13e7247bdc40)


# Flask API com SQLite

## 📌 Sobre o Projeto

Este projeto é uma API RESTful simples desenvolvida com Flask e SQLite. A API permite a criação, leitura, atualização e exclusão (CRUD) de registros armazenados em um banco de dados SQLite.

## 🚀 Tecnologias Utilizadas

Python 3

Flask

SQLite

## Flask-SQLAlchemy

📂 Estrutura do Projeto

flask_api_sqlite/
│-- app.py             # Arquivo principal da aplicação
│-- requirements.txt   # Dependências do projeto
│-- README.md          # Documentação

## 🔧 Instalação e Configuração

1️⃣ Clonar o Repositório

git clone https://github.com/MariaClaravalotti/ProjetoFinalLivrosVNW.git
cd flask_api_sqlite

2️⃣ Criar um Ambiente Virtual (Opcional, mas Recomendado)

python3 -m venv venv
source venv/bin/activate  # Para Linux/macOS
venv\Scripts\activate     # Para Windows

3️⃣ Instalar Dependências

pip install -r requirements.txt

4️⃣ Executar o Servidor Flask

python app.py

A API estará disponível em http://127.0.0.1:5000/

## 📌 Rotas da API

Método

Endpoint

Descrição

GET

/items

Retorna todos os itens

GET

/items/<id>

Retorna um item específico

POST

/items

Cria um novo item

PUT

/items/<id>

Atualiza um item existente

DELETE

/items/<id>

Remove um item do banco

## 💾 Exemplo de Uso

Criar um Item (POST /items)

{
    "name": "Notebook",
    "price": 2500.00
}

Retorno Esperado (JSON)

{
    "id": 1,
    "name": "Notebook",
    "price": 2500.00
}

![image](https://github.com/user-attachments/assets/f3912b55-37d8-476e-b979-6b76a3df255c)

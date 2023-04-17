from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from flask import Flask, jsonify, request
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy



if __name__ == '__main__':
    db.create_all() # Cria as tabelas do banco de dados
    app.run(debug=True)



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///personagens.db'  # Configuração do banco de dados (no exemplo, SQLite)
db = SQLAlchemy(app)  # Instância do banco de dados
app = Flask(__name__)

class Personagem(db.Model):

    def __init__(self, nome, descricao, link_imagem, programa, animador, id=None):
        self.id = id
        self.nome = nome
        self.descricao = descricao
        self.link_imagem = link_imagem
        self.programa = programa
        self.animador = animador



#CONSULTAR TODOS OS PERSONAGENS
@app.route('/personagens', methods=['GET'])
def consultar_personagens():
    personagens = []
    for personagem in personagens_cadastrados:
        personagens.append({'nome': personagem.nome, 'descricao': personagem.descricao, 'link_imagem': personagem.link_imagem, 'programa': personagem.programa, 'animador': personagem.animador})
    return jsonify(personagens)

#consultar personagem por id
@app.route('/personagens/<int:id>', methods=['GET'])
def consultar_personagem(id):
    for personagem in personagens_cadastrados:
        if personagem.id == id:
            return jsonify({'nome': personagem.nome, 'descricao': personagem.descricao, 'link_imagem': personagem.link_imagem, 'programa': personagem.programa, 'animador': personagem.animador})

#editar personagem      
@app.route('/personagens/<int:id>', methods=['PUT'])
def editar_personagem(id):
    personagem_editar = request.get_json()
    for personagem in personagens_cadastrados:
        if personagem.id == id:
            personagem.nome = personagem_editar['nome']
            personagem.descricao = personagem_editar['descricao']
            personagem.link_imagem = personagem_editar['link_imagem']
            personagem.programa = personagem_editar['programa']
            personagem.animador = personagem_editar['animador']
            return jsonify({'nome': personagem.nome, 'descricao': personagem.descricao, 'link_imagem': personagem.link_imagem, 'programa': personagem.programa, 'animador': personagem.animador})

#criar personagem
@app.route('/personagens', methods=['POST'])
def criar_personagem():
    novo_personagem = request.get_json()
    personagem = Personagem(novo_personagem['nome'], novo_personagem['descricao'], novo_personagem['link_imagem'], novo_personagem['programa'], novo_personagem['animador'])
    personagens_cadastrados.append(personagem)
    return jsonify({'nome': personagem.nome, 'descricao': personagem.descricao, 'link_imagem': personagem.link_imagem, 'programa': personagem.programa, 'animador': personagem.animador})

#excluir personagem
@app.route('/personagens/<int:id>', methods=['DELETE'])
def excluir_personagem(id):
    for indice, personagem in enumerate(personagens_cadastrados):
        if personagem.id == id:
            del personagens_cadastrados[indice]
            return jsonify({'message': 'Personagem excluído com sucesso!'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

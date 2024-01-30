-- Criar o banco de dados BlogDB se não existir
CREATE DATABASE IF NOT EXISTS BlogDB;

-- Usar o banco de dados BlogDB
USE BlogDB;

-- Criar a tabela autautoror
CREATE TABLE autor (
    AutorID INT AUTO_INCREMENT PRIMARY KEY,
    NomeAutor VARCHAR(255) NOT NULL,
    Email VARCHAR(255)
);

-- Criar a tabela post
CREATE TABLE post (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES autor(AutorID)
);

-- Criar a tabela comentario
CREATE TABLE comentario (
    ComentarioID INT AUTO_INCREMENT PRIMARY KEY,
    TextoComentario TEXT,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES post(PostID)
);livrodevoluçãoautorempréstimoempréstimo

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

-- Criar a tabela de autores
CREATE TABLE IF NOT EXISTS autores (
    AutorID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    nacionalidade VARCHAR(100)
);

-- Criar a tabela de livros
CREATE TABLE IF NOT EXISTS livros (
    livroID INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES autores(AutorID)
);

-- Inserção de dados
INSERT INTO autores (nome, nacionalidade) VALUES 
('Autor 1', 'Brasil'),
('Autor 2', 'EUA'),
('Autor 3', 'França');

INSERT INTO livros (titulo, AnoPublicacao, AutorID) VALUES
('Livro 1', 2000, 1),
('Livro 2', 2010, 1),
('Livro 3', 2005, 2),
('Livro 4', 2015, 2),
('Livro 5', 2018, 3);

-- Consulta com INNER JOIN
SELECT livros.titulo, livros.AnoPublicacao, autores.nome AS Autor, autores.nacionalidade
FROM livros
INNER JOIN autores ON livros.AutorID = autores.AutorID;

-- Consulta com LEFT JOIN
SELECT autores.nome AS Autor, autores.nacionalidade, livros.titulo AS Livro, livros.AnoPublicacao
FROM autores
LEFT JOIN livros ON autores.AutorID = livros.AutorID;

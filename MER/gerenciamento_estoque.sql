-- Inserção de Produtos
INSERT INTO produtos (nome_do_produto, preço, quantidade_em_estoque) VALUES
('smartphone', 799.99, 20),
('tablet', 349.99, 10),
('fone de ouvido', 49.99, 50);

-- Atualização de Estoque e Preço do Smartphone
UPDATE produtos 
SET quantidade_em_estoque = 25, preço = 849.99 
WHERE ProdutoID = 1;

-- Venda de Produtos
-- Venda do tablet (removendo 5 unidades)
UPDATE produtos 
SET quantidade_em_estoque = quantidade_em_estoque - 5 
WHERE ProdutoID = 2;

-- Venda do fone de ouvido (removendo 10 unidades)
UPDATE produtos 
SET quantidade_em_estoque = quantidade_em_estoque - 10 
WHERE ProdutoID = 3;

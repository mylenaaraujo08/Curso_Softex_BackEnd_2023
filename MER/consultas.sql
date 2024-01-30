-- 1. Seleção de todos os dados de transações da tabela de transações:
SELECT * FROM transações;

-- 2. Renomeando as colunas:
SELECT 
    ID_Transacao AS ID,
    data AS Data_Transacao,
    valor AS Valor_Transacao,
    produto AS Produto_ID
FROM transações;

-- 3. Filtragem com a cláusula WHERE:
SELECT * 
FROM transações
WHERE valor > 100.00;

-- 4. Ordenação com a cláusula ORDER BY:
SELECT * 
FROM transações
ORDER BY valor DESC;

-- 5. Agregação com funções SQL:
SELECT 
    AVG(valor) AS Média_Valor,
    MAX(valor) AS Valor_Máximo,
    MIN(valor) AS Valor_Mínimo,
    COUNT(*) AS Total_Transações
FROM transações;

-- 6. Agrupamento com a cláusula GROUP BY:
SELECT 
    produto,
    AVG(valor) AS Média_Valor_Produto
FROM transações
GROUP BY produto;

-- 7. Consulta combinada:
SELECT 
    COUNT(*) AS Total_Produtos_Vendidos,
    SUM(valor) AS Valor_Total_Vendas,
    AVG(valor) AS Média_Valor_Transação,
    categoria_produto
FROM transações
GROUP BY categoria_produto;

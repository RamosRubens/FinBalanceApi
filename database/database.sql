CREATE DATABASE FinBalance;

CREATE TABLE target(
    id SERIAL PRIMARY KEY,
    targetType VARCHAR(40),
    targetDescription VARCHAR(130),
    targetValue FLOAT(5)	
);

INSERT INTO target (targetType, targetDescription, targetValue) VALUES 
('Ações', 'Defina a porcentagem de ações', 0.0),
('FIIs', 'Defina a porcentagem de fiis', 0.0),
('ETFs', 'Defina a porcentagem de etfs', 0.0),
('Stocks', 'Defina a porcentagem de Stocks', 0.0),
('Reits', 'Defina a porcentagem de Reits', 0.0),
('Criptomoedas', 'Defina a porcentagem de Criptomoedas', 0.0);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    uuid VARCHAR(120),
    email VARCHAR(120)
);

CREATE TABLE assets(
    id SERIAL PRIMARY KEY,
    symbol VARCHAR(10),
    cotation VARCHAR(10),
    type VARCHAR(10)
);

INSERT INTO assets (symbol, cotation, type) VALUES 
('TAEE3', '13.06', 'equity'),
('TAEE11', '39.82', 'equity'),
('TRPL4', '25.06', 'equity'),
('CGRA4', '30,82', 'equity'),
('BBDC4', '24,71', 'equity'),
('ABEV3', '17,11', 'equity');

CREATE TABLE aport(
    id SERIAL PRIMARY KEY,
    assetsSymbol VARCHAR(10),
    valueAssets VARCHAR(30),
    quantityAssets VARCHAR(30)
)

INSERT INTO aport (assetsSymbol,valueAssets,quantityAssets) VALUES 
('TAEE3', '78.36', '6'),
('TAEE11', '353.52', '9'),
('TRPL4', '100.24', '4'),
('CGRA4', '264.00', '8'),
('BBDC4', '49.42', '2'),
('ABEV3', '85.55', '5');

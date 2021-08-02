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

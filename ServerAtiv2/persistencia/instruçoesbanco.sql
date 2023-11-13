CREATE TABLE usuario(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    username varchar(30) not null,
    cidade varchar(100) not null,
    estado varchar(3) not null,
    cep varchar(10) not null,
);
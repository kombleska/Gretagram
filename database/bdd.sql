CREATE DATABASE gretagram;

-- ALTER USER 'root'@'localhost' IDENTIFIED BY 'gretagram'; --

USE gretagram;

CREATE TABLE addr (
    idAd INT NOT NULL,
    libele VARCHAR(255),
    distric VARCHAR(255),
    city VARCHAR(100),
    postalCode INT, 
    PRIMARY KEY ( idAd )
);

CREATE TABLE gretaUser (
    idUser VARCHAR(50) NOT NULL,
    mail VARCHAR(110) NOT NULL,
    pw VARCHAR(255) NOT NULL,
    phone INT, 
    addr INT, 
    PRIMARY KEY ( idUser ),
    FOREIGN KEY (addr) REFERENCES addr(idAd)
);

INSERT INTO gretaUser (idUser,mail,pw,phone) values('admin','admin@admin.fr','adminA',0634612900);
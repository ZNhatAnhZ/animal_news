CREATE TABLE news
(
    id         INT AUTO_INCREMENT NOT NULL,
    title      VARCHAR(255) NULL,
    date       VARCHAR(255) NULL,
    images     JSON NULL,
    content    TEXT NULL,
    created_on TIMESTAMP NULL,
    CONSTRAINT pk_news PRIMARY KEY (id)
);
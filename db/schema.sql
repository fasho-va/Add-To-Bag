DROP DATABASE IF EXISTS Fashova;

CREATE DATABASE Fashova;

USE Fashova;


CREATE TABLE products (
    id integer DEFAULT PRIMARY KEY,
    name character varying NOT NULL,
    url character varying NOT NULL,
    price integer NOT NULL,
    details text NOT NULL,
    image character varying NOT NULL
);

CREATE TABLE users (
    id integer PRIMARY KEY REFERENCES products(id),
    name character varying NOT NULL,
    quantity integer NOT NULL,
    total integer NOT NULL DEFAULT 0
);

--Database
CREATE DATABASE desafio
    WITH
    OWNER = jorgemo
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Users table
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  user_name varchar(255) NOT NULL UNIQUE,
  first_name varchar(45) NOT NULL, 
  surname varchar(100),
  email varchar(45) NOT NULL UNIQUE, 
  hashed_password varchar(200) NOT NULL, 
  admin boolean NOT NULL, 
  logged boolean NOT NULL
);
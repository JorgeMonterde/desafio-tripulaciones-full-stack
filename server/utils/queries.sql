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
  first_name varchar(45) NOT NULL, 
  surname varchar(100) NOT NULL,
  email varchar(45) NOT NULL UNIQUE, 
  user_position varchar(45) NOT NULL,
  hashed_password varchar(200) NOT NULL, 
  admin boolean NOT NULL, 
  logged boolean NOT NULL
);

/* -- Account table
CREATE TABLE account (
  user_id int UNIQUE,
  account_holder varchar(200) NOT NULL,
  account_number varchar(200) NOT NULL UNIQUE
  FOREIGN KEY (user_id) REFERENCES users(user_id)
  ON DELETE CASCADE
); */

-- Buildings table
CREATE TABLE buildings (
  user_id int UNIQUE,
  address_number number NOT NULL,
  street varchar(100) NOT NULL,
  postal_code number NOT NULL,
  city varchar(100) NOT NULL,
  province varchar (100) NOT NULL,
  autonomous_community varchar (100) NOT NULL,
  cif varchar(12) NOT NULL UNIQUE,

  total_area int NOT NULL,
  communal_areas_area int NOT NULL,
  housing_area int NOT NULL,
  number_of_apartments int NOT NULL,
  year_of_construction int NOT NULL,
  cadastre_number varchar(100) NOT NULL UNIQUE,
  energy_efficiency_certificate varchar(100),
  project_state varchar(50) NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(user_id)
  ON DELETE CASCADE
);
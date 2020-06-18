CREATE DATABASE budget;

USE budget;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  monthly_budget INT
);

CREATE TABLE banking (
  id INT AUTO_INCREMENT PRIMARY KEY,
  i_date TEXT,
  i_description TEXT,
  amount INT,
  i_transaction TEXT,
  category TEXT,
  account_name TEXT,
  user_name VARCHAR(255) NOT NULL
);
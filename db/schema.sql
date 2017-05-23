-- Create the database foods_db and specified it for use.
CREATE DATABASE foods_db;
USE foods_db;

-- Create the table foods.
CREATE TABLE foods (
  id INT NOT NULL AUTO_INCREMENT,
  food_name VARCHAR(255) NOT NULL,
  devoured  BOOLEAN,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
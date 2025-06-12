CREATE DATABASE [testdb_api_nodejs];
GO

USE [testdb_api_nodejs];
GO

CREATE TABLE usuarios (
  id INT PRIMARY KEY IDENTITY(1,1),
  nombre VARCHAR(100),
  correo VARCHAR(100)
);
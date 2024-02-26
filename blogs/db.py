from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

config = dotenv_values(".venv")

connection = MySQLdb.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "test",
    autocommit = True 
)

cursor  = connection.cursor()

if connection:
    print("Connection is succesful")
else:
    print("no connection")
    
cursor.execute("SHOW TABLES")

tables = cursor.fetchall()

for i in tables:
    print(i)

cursor.execute("SHOW TABLES LIKE 'blogs';")

table_blogs = cursor.fetchone()

if not table_blogs :
    table_query = """
    CREATE TABLE blogs (
    blogId INT AUTO_INCREMENT PRIMARY KEY,
    authName VARCHAR(32) NOT NULL,
    blog VARCHAR(512) NOT NULL,
    image VARCHAR(128),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    """
    cursor.execute(table_query)
    print("table created succesfully")
else:
    print("table already exist")


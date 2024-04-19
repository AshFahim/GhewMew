from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

config = dotenv_values(".venv")

connection = MySQLdb.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "ghewmew",
    autocommit = True 
)

cursor  = connection.cursor()

if connection:
    print("Connection is succesful")
else:
    print("no connection")
    
create_tabel_query = """
    CREATE TABLE IF NOT EXISTS `blogs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) NOT NULL,
    `content` varchar(2048) NOT NULL,
    `author` varchar(32) NOT NULL,
    `created_at` varchar(16) NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
"""

cursor.execute(create_tabel_query)








## mysql connection here
from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

# load_dotenv()
config   = dotenv_values(".env")
# config["DB_HOST"][0]


connection = MySQLdb.connect(
    host="localhost",
    user="root",
    password="",
    database="ghewmew",
    autocommit = True
)

cursor = connection.cursor()

# Check if connection is okay
if connection:
    print("Database Connection successful")
else:
    print("Database Connection unsuccessful")

# Print all tables of the database
cursor.execute("SHOW TABLES")
tables = cursor.fetchall()
for table in tables:
    print(table[0])
    
    
def __test__():
  if connection: print("Database Connection successful"); return True
  else: print("Database Connection unsuccessful"); return False 
  
  
# Check if Users table exists
cursor.execute("SHOW TABLES LIKE 'Users'")
table_exists = cursor.fetchone()

# If Users table does not exist, create it
if not table_exists:
    create_table_query = """
    CREATE TABLE Users (
    serial INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type VARCHAR(16),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
"""
    cursor.execute(create_table_query)
    print("Users table created successfully")
else:
    print("Users table already exists")


def __test__():
  if connection: print("Database Connection successful"); return True
  else: print("Database Connection unsuccessful"); return False

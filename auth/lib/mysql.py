## mysql connection here
from dotenv import load_dotenv, dotenv_values
import MySQLdb
import os

# load_dotenv()
config   = dotenv_values(".env")
# config["DB_HOST"][0]

""" connection =  MySQLdb.connect(
        host     = str(config["DB_HOST"]), # os.environ.get("HOST"),
        user     = str(config["DB_USERNAME"]), # os.environ.get("USERNAMER"),
        passwd   = str(config["DB_PASSWORD"]), # os.environ.get("PASSWORD"),
        db       = str(config["DB_NAME"]), # os.environ.get("DATABASE"),
        autocommit = True,
        ssl_mode = "VERIFY_IDENTITY",
        ssl      = {
          "ca": "etc/ssl/cacert.pem"
        }
    ) """
    
def connect_to_db():
    # Load environment variables from .env file
    load_dotenv()
    
    # Get database configuration from environment variables
    db_host = os.environ.get("DB_HOST")
    db_username = os.environ.get("DB_USERNAME")
    db_password = os.environ.get("DB_PASSWORD")
    db_name = os.environ.get("DB_NAME")
    
    # Create a MySQL connection
    connection = MySQLdb.connect(
        host=db_host,
        user=db_username,
        passwd=db_password,
        db=db_name,
        autocommit=True,
        ssl_mode="VERIFY_IDENTITY",
        ssl={
            "ca": "etc/ssl/cacert.pem"
        }
    )
        
        # Return the connection object
    return connection
    
cursor = connect_to_db.cursor()

def __test__():
  if connection: print("Database Connection successful"); return True
  else: print("Database Connection unsuccessful"); return False
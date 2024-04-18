import threading
from db.database import cursor
import re
import bcrypt

#email validation regular expression 
def validate_email(email):  
    if re.match(r"[^@]+@[^@]+\.[^@]+", email):  
        return True  
    return False 

def RegisterUser(data):
    
    cursor.execute("SELECT * FROM Users WHERE email = %s", (data["email"],))
    existing_user = cursor.fetchone()
    
    
    # Validate email
    if not validate_email(data["email"]):
        return "Invalid email"
    # Check if email already exists
    
    elif existing_user:
        return "Email exists"
    
    # If email doesn't exist, ok for registration
    else:
   
        try:
            threaded_query = threading.Thread(
                target=cursor.execute,
                args=(
                    """
                    INSERT INTO Users
                    (name, email, password, user_type, date)
                    VALUES (%s, %s, %s, %s, %s)
                    """,
                    (
                        data["name"],
                        data["email"],
                        bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt()),
                        data["user_type"],
                        data["date"]
                    )
                ))
            threaded_query.start()
            return True
        except Exception as e:
            print(e)
            return False

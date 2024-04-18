from db.database import cursor

def get_user(id):
    try:
        cursor.execute("SELECT * FROM Users WHERE serial = %s", (id,))
        user = cursor.fetchone()
        return {
            "status": True,
            "data": user
        }
    except Exception as e:
        print(e)
        return {
            "status": False,
        }
# not in use 
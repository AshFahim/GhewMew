from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta 
from jose import JWTError, jwt
from passlib.context import CryptContext

key = "eee5182049f947f00c91a44ce94b6ad039f1e73c4e37ee1227e62da27b21ecd5" # generate key with "openssl  rand -hex 32"
algo = "HS256"
accessTokenExpireMinuites = 30

fakeDB = {
    tim: {
        "username" : "tim",
        "fullname" : "tim gg",
        "email" : "timgg@gmail.com",
        "hashedpass" : "",
        "disabled" : False
     }
}
class token(BaseModel):
    accessToken: str
    tokenType: str

class tokenData(BaseModel):
    username: str or None = None
    
class user(BaseModel):
    username: str
    email: str or None = None
    fullname: str or None = None 
    disable: bool or None = None

class userInDB(user):
    hashedPass: str
    
    
passContext = CryptContext(schemes=["bcrypt"], deprecated = "auto")
oAuth2Scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

def verifyPassword(plainPass, hashPass):
     return passContext.verify(plainPass, hashPass)
 
def getPassHash(password):
    return passContext.hash(password)

def getUser(db, username:str):
    if username in db:
        userdata = db[username]
        return userInDB(**userdata)
         
def authenticateUser(db, username: str, password: str):
    user = getUser(db, username)
    if not user:
        return False
    if not verifyPassword(password, user.hashedPass):
        return False
    return user 

def createAccessToken(data: dict, expireDelta: timedelta or None = None):
    toEncode = data.copy()
    if expireDelta:
        expire = datetime.utcnow() + expireDelta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
        
    toEncode.update({"exp": expire})
    encodeJWT = jwt.encode(toEncode, key, algorithm = algo)
    
    return encodeJWT

    
#to run in uvicorn server 
#uvicorn main:app --reload --port 3500    

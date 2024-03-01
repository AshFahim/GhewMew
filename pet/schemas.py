

from typing import List, Optional
from pydantic import BaseModel

class PetBase(BaseModel):
    pet_type: str
    pet_gender: str
    pet_age: int
    description: str
    location_city: str

class PetCreate(PetBase):
    pass

class Pet(PetBase):
    pet_id: int
    owner_id: Optional[int]

    class Config:
        orm_mode = True

class PetType(BaseModel):
    pet_type: str

class PetGender(BaseModel):
    pet_gender: str

class PetLocation(BaseModel):
    location_city: str

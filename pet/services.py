
from typing import List, Optional
from sqlalchemy.orm import Session
from models import Pet
from schemas import PetCreate
from fastapi import HTTPException, UploadFile


def create_pet(db: Session, pet_data: PetCreate):
    try:
        pet = Pet(**pet_data.dict())
        db.add(pet)
        db.commit()
        db.refresh(pet)
        return pet.pet_id
    except Exception as e:
        db.rollback()
        raise e

# Function to get details of a specific pet based on its ID
def get_pet_by_id(db: Session, pet_id: int) -> Optional[Pet]:
    pet = db.query(Pet).filter(Pet.pet_id == pet_id).first()
    return pet

# Function to get pets based on their type
def get_pets_by_type_from_db(db: Session, pet_type: str) -> List[Optional[Pet]]:
    pets = db.query(Pet).filter(Pet.pet_type == pet_type).all()
    return pets

# Function to get pets based on their gender
def get_pets_by_gender_from_db(db: Session, pet_gender: str) -> List[Optional[Pet]]:
    pets = db.query(Pet).filter(Pet.pet_gender == pet_gender).all()
    return pets

# Function to get pets based on their location (city)
def get_pets_by_location_from_db(db: Session, location_city: str) -> List[Optional[Pet]]:
    pets = db.query(Pet).filter(Pet.location_city == location_city).all()
    return pets

# Upload pet image 
def upload_pet_image(db: Session, pet_id: int, image: UploadFile):
    try:
        pet = db.query(Pet).filter(Pet.pet_id == pet_id).first()
        if not pet:
            raise HTTPException(status_code=404, detail="Pet not found")
        file_location = f"H:/pet images/{image.filename}"
        with open(file_location, "wb+") as file_object:
            file_object.write(image.file.read())
        pet.pet_image = file_location
        db.commit()
        db.refresh(pet)
    except Exception as e:
        db.rollback()
        raise e

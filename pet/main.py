
from fastapi import FastAPI, HTTPException,  Depends,Path
from services import create_pet, get_pet_by_id, get_pets_by_gender_from_db, get_pets_by_location_from_db,  get_pets_by_type_from_db
import schemas
from models import Pet 
from schemas import PetCreate
from database import SessionLocal
from sqlalchemy.orm import Session
from typing import List 

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app = FastAPI()

# Add a pet details in the database
@app.post("/pets/")
def add_pet(pet_data: PetCreate, db: Session = Depends(get_db)):
    try:
        pet_id = create_pet(db, pet_data)
        return {"message": "Pet added successfully", "pet_id": pet_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get all pet details    
@app.get("/pets/")
def get_all_pets(db: Session = Depends(get_db)):
    pets = db.query(Pet).all()
    return [{"pet_id": pet.pet_id, "owner_id": pet.owner_id, "pet_type": pet.pet_type, "pet_gender": pet.pet_gender, "pet_age": pet.pet_age, "description": pet.description, "location_city": pet.location_city} for pet in pets]

# Get details of a specific pet based on its ID
@app.get("/pets/{pet_id}")
def get_pet(pet_id: int, db: Session = Depends(get_db)):
    pet = get_pet_by_id(db, pet_id)
    if pet is None:
        raise HTTPException(status_code=404, detail="Pet not found")
    return pet

# Get pets based on their type
@app.get("/pets/type/{pet_type}")
def get_pets_by_type(pet_type: str = Path(..., title="The type of the pet to filter by"), db: Session = Depends(get_db)):
    pets = get_pets_by_type_from_db(db, pet_type)  # Updated function call
    if not pets:
        raise HTTPException(status_code=404, detail="No pets found for this type")
    return pets

# Get pets based on their gender
@app.get("/pets/gender/{pet_gender}")
def get_pets_by_gender(pet_gender: str = Path(..., title="The gender of the pet to filter by"), db: Session = Depends(get_db)):
    pets = get_pets_by_gender_from_db(db, pet_gender)
    if not pets:
        raise HTTPException(status_code=404, detail="No pets found for this gender")
    return pets

# Get pets based on their location (city)
@app.get("/pets/location/{location_city}")
def get_pets_by_location(location_city: str = Path(..., title="The city to filter pets by"), db: Session = Depends(get_db)):
    pets = get_pets_by_location_from_db(db, location_city)
    if not pets:
        raise HTTPException(status_code=404, detail="No pets found for this location")
    return pets

# Delete a pet based on its ID
@app.delete("/pets/{pet_id}")
def delete_pet_by_id(pet_id: int, db: Session = Depends(get_db)):
    pet = get_pet_by_id(db, pet_id)
    if pet is None:
        raise HTTPException(status_code=404, detail="Pet not found")
    db.delete(pet)
    db.commit()
    return {"message": "Pet deleted successfully"}
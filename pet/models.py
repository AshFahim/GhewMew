from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import  relationship
from database import Base,engine

class User(Base):
    __tablename__ = "USER"
    id = Column(Integer, primary_key=True, index=True)
    pets = relationship("Pet", back_populates="owner")

class Pet(Base):
    __tablename__ = "pets"
    pet_id = Column(Integer, primary_key=True, index=True)
    owner_id = Column(Integer, ForeignKey("USER.id"), nullable=True)
    pet_type = Column(String(10))
    pet_gender = Column(String(10))
    pet_age = Column(Integer)
    description = Column(String(50))
    location_city = Column(String(10))

    owner = relationship("User", back_populates="pets")

Base.metadata.create_all(bind=engine)
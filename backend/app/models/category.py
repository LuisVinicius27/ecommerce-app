from sqlalchemy import Column, Integer, String
from app.database.session import Base

class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, index=True)
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base

class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    description = Column(String, index=True)
    value = Column(Float, index=True)
    stock_quantity = Column(Integer, index=True)
    category_id = Column(Integer, ForeignKey("category.id"))

    category = relationship("Category")
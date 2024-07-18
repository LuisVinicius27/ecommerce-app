from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base

class Sale(Base):
    __tablename__ = "sale"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("sale.id"))
    quantity = Column(Integer, index=True)

    product = relationship("Product")
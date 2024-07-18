from pydantic import BaseModel
from app.schemas.category import Category

class ProductBase(BaseModel):
    descrition: str
    value: float
    stock_quantity: int
    category_id: int

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    categoria: Category

    class Config:
        orm_mode = True
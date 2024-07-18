from pydantic import BaseModel
from app.schemas.product import Product

class SaleBase(BaseModel):
    product_id: int
    quantidade: int

class SaleCreate(SaleBase):
    pass

class Sale(SaleBase):
    id: int
    product: Product

    class Config:
        orm_mode = True
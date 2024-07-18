from pydantic import BaseModel

class CategoryBase(BaseModel):
    descricao: str

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int

    class Config:
        orm_mode = True
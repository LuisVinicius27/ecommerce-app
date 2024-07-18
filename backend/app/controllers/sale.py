from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.sale import Sale, SaleCreate
from app.models.sale import Sale as SaleModel
from app.database.session import get_db

router = APIRouter()

@router.post("/", response_model=Sale)
def create_sale(venda: SaleCreate, db: Session = Depends(get_db)):
    db_venda = SaleModel(**venda.dict())
    db.add(db_venda)
    db.commit()
    db.refresh(db_venda)
    return db_venda

@router.get("/", response_model=list[Sale])
def read_sale(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    sale = db.query(SaleModel).offset(skip).limit(limit).all()
    return sale

@router.get("/{sale_id}", response_model=Sale)
def read_sale(sale_id: int, db: Session = Depends(get_db)):
    sale = db.query(SaleModel).filter(SaleModel.id == sale_id).first()
    if sale is None:
        raise HTTPException(status_code=404, detail="Sale not found")
    return sale
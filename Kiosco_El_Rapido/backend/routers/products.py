from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter(prefix="/api/products", tags=["products"])
@router.get("", response_model=List[schemas.ProductResponse])
def get_products(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(models.Product)
    if category:
        query = query.filter(models.Product.category == category)
    return query.all()
@router.get("/{product_id}", response_model=schemas.ProductResponse)
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return product
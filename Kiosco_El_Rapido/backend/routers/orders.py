import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas

router = APIRouter(prefix="/api/orders", tags=["orders"])
@router.post("", response_model=schemas.OrderResponseSchema)
def create_order(order_data: schemas.OrderCreateSchema, db: Session = Depends(get_db)):
    if not order_data.items:
        raise HTTPException(status_code=400, detail="El pedido no contiene ítems.")
    total = 0.0
    items_summary = []
    for item in order_data.items:
        product = db.query(models.Product).filter(models.Product.id == item.product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail=f"Producto con ID {item.product_id} no encontrado")
        
        if product.stock < item.quantity:
            raise HTTPException(
                status_code=400, 
                detail=f"Stock insuficiente para '{product.name}'. Disponible: {product.stock}, solicitado: {item.quantity}"
            )
        subtotal = product.price * item.quantity
        total += subtotal
        items_summary.append({
            "product_id": product.id,
            "name": product.name,
            "price": product.price,
            "quantity": item.quantity,
            "subtotal": subtotal
        })
    for item in order_data.items:
        product = db.query(models.Product).filter(models.Product.id == item.product_id).first()
        product.stock -= item.quantity
    new_order = models.Order(
        total=total,
        items_json=json.dumps(items_summary)
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order
from typing import List, Optional
from pydantic import BaseModel, Field

class ProductBase(BaseModel):
    name: str = Field(..., min_length=1)
    category: str
    price: float = Field(..., gt=0)
    stock: int = Field(..., ge=0)
    description: Optional[str] = None
class ProductResponse(ProductBase):
    id: int
    class Config:
        from_attributes = True
class OrderItemSchema(BaseModel):
    product_id: int
    quantity: int = Field(..., gt=0)
class OrderCreateSchema(BaseModel):
    items: List[OrderItemSchema]
class OrderResponseSchema(BaseModel):
    id: int
    total: float
    items_json: str
    class Config:
        from_attributes = True
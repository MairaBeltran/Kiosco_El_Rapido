import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    stock = Column(Integer, nullable=False, default=0)
    description = Column(String, nullable=True)

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    total = Column(Float, nullable=False)
    items_json = Column(Text, nullable=False)
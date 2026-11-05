from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base, SessionLocal
import models
from routers import products, orders

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Kiosco El Rápido API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(products.router)
app.include_router(orders.router)
@app.on_event("startup")
def seed_data():
    db = SessionLocal()
    if db.query(models.Product).count() == 0:
        initial_products = [
            models.Product(name="Coca-Cola 500ml", category="bebidas", price=1200.0, stock=20, description="Gaseosa refrescante"),
            models.Product(name="Agua mineral 500ml", category="bebidas", price=800.0, stock=30, description="Agua mineral sin gas"),
            models.Product(name="Papas Lays Clásicas", category="snacks", price=1500.0, stock=15, description="Papas fritas saladas"),
            models.Product(name="Alfajor Jorgito", category="golosinas", price=900.0, stock=40, description="Alfajor de dulce de leche"),
            models.Product(name="Chicles Beldent", category="golosinas", price=600.0, stock=50, description="Chicles menta"),
            models.Product(name="Cigarrillos", category="varios", price=2500.0, stock=10, description="Atado de cigarrillos"),
            models.Product(name="Gatorade 500ml", category="bebidas", price=1800.0, stock=25, description="Bebida isotónica"),
            models.Product(name="Maní salado", category="snacks", price=1100.0, stock=18, description="Maní tostado y salado"),
        ]
        db.add_all(initial_products)
        db.commit()
    db.close()
@app.get("/")
def read_root():
    return {"message": "API Kiosco El Rápido en funcionamiento"}
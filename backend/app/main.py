from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import category, product, user, sale
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
)

# CORS settings
origins = [
    "http://localhost",
    "http://localhost:4200",  # Frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Routers
app.include_router(user.router, prefix="/api/user", tags=["user"])
app.include_router(category.router, prefix="/api/category", tags=["category"])
app.include_router(product.router, prefix="/api/product", tags=["product"])
app.include_router(sale.router, prefix="/api/sale", tags=["sale"])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
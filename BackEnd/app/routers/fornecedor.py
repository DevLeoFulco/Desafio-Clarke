from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, services, database

router = APIRouter()

@router.post("/fornecedores/", response_model=schemas.Fornecedor)
def create_fornecedor(fornecedor: schemas.FornecedorCreate, db: Session = Depends(database.get_db)):
    return services.create_fornecedor(fornecedor, db)

@router.get("/fornecedores/", response_model=List[schemas.Fornecedor])
def read_fornecedores(consumo_mensal: int, db: Session = Depends(database.get_db)):
    return services.get_qualified_fornecedores(consumo_mensal, db)

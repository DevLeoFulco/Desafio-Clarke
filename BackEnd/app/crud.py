from sqlalchemy.orm import Session
from . import models, schemas

def get_fornecedores(db: Session, consumo_mensal: int):
    return db.query(models.Fornecedor).filter(models.Fornecedor.limite_min_kwh <= consumo_mensal).all()

def create_fornecedor(db: Session, fornecedor: schemas.FornecedorCreate):
    db_fornecedor = models.Fornecedor(**fornecedor.dict())
    db.add(db_fornecedor)
    db.commit()
    db.refresh(db_fornecedor)
    return db_fornecedor

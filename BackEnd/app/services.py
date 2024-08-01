from typing import List
from sqlalchemy.orm import Session
from . import crud, schemas

def get_qualified_fornecedores(consumo_mensal: int, db: Session) -> List[schemas.Fornecedor]:
    return crud.get_fornecedores(db, consumo_mensal)

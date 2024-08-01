from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Fornecedor(Base):
    __tablename__ = "fornecedores"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    logo = Column(String)
    estado = Column(String)
    custo_kwh = Column(Float)
    limite_min_kwh = Column(Integer)
    total_clientes = Column(Integer)
    avaliacao_media = Column(Integer)

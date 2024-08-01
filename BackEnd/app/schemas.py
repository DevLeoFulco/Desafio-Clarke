from pydantic import BaseModel

class FornecedorBase(BaseModel):
    nome: str
    logo: str
    estado: str
    custo_kwh: float
    limite_min_kwh: int
    total_clientes: int
    avaliacao_media: float

class FornecedorCreate(FornecedorBase):
    pass

class Fornecedor(FornecedorBase):
    id: int

    class Config:
        orm_mode = True

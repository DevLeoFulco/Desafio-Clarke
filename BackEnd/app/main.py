import graphene
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette_graphene3 import GraphQLApp, make_graphiql_handler
from sqlalchemy.orm import Session

from .routers import fornecedor
from .database import engine, Base, SessionLocal
from .models import Fornecedor as FornecedorModel

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(fornecedor.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FornecedorType(graphene.ObjectType):
    id = graphene.Int()
    nome = graphene.String()
    logo = graphene.String()
    estado = graphene.String()
    custo_por_kwh = graphene.Float()
    limite_min_kwh = graphene.Int()
    total_clientes = graphene.Int()
    avaliacao_media = graphene.Int()

class Query(graphene.ObjectType):
    fornecedoresByConsumo = graphene.List(FornecedorType, consumo=graphene.Int(required=True))

    def resolve_fornecedoresByConsumo(self, info, consumo):
        db: Session = SessionLocal()
        fornecedores = db.query(FornecedorModel).filter(FornecedorModel.limite_min_kwh <= consumo).all()
        #print("Fornecedores encontrados:", fornecedores)
        for fornecedor in fornecedores:
            print(f"id: {fornecedor.id}, nome: {fornecedor.nome}, logo: {fornecedor.logo}, estado: {fornecedor.estado}, custo_kwh: {fornecedor.custo_kwh}, limite_min_kwh: {fornecedor.limite_min_kwh}, total_clientes: {fornecedor.total_clientes}, avaliacao_media: {fornecedor.avaliacao_media}")
        return fornecedores

schema = graphene.Schema(query=Query)

app.mount("/graphql", GraphQLApp(schema=schema, on_get=make_graphiql_handler()))

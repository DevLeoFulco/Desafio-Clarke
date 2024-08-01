# tests/test_fornecedores.py
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_fornecedores():
    response = client.get("/fornecedores/?consumo_mensal=30000")
    assert response.status_code == 200
    fornecedores = response.json()
    assert isinstance(fornecedores, list)
    assert len(fornecedores) > 0

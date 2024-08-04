export interface Fornecedor {
    id: number;
    nome: string;
    logo: string;
    estado: string;
    custoPorKwh: number;
    limite_min_kwh: number;
    totalClientes: number;
    avaliacaoMedia: number;
  }
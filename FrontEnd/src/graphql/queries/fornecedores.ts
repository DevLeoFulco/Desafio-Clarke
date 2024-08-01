import { gql } from '@apollo/client';

export const GET_FORNECEDORES_BY_CONSUMO = gql`
  query GetFornecedoresByConsumo($consumo: Int!) {
    fornecedoresByConsumo(consumo: $consumo) {
      id
      nome
      logo
      estado
      custoPorKwh
      limiteMinKwh
      totalClientes
      avaliacaoMedia
    }
  }
`;

import React from 'react';
import styles from './ListaFornecedor.module.css';
import { Fornecedor } from '../../type';



interface ListaFornecedorProps {
  fornecedores: Fornecedor[];
}

const ListaFornecedor: React.FC<ListaFornecedorProps> = ({ fornecedores }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nome</th>
            <th>Estado</th>
            <th>Custo por kWh</th>
            <th>Limite Mínimo de kWh</th>
            <th>Total de Clientes</th>
            <th>Avaliação Média</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor, index) => (
            <tr key={index}>
              <td>
                <img src={fornecedor.logo} alt={`${fornecedor.nome} logo`} className={styles.logo} />
              </td>
              <td>{fornecedor.nome}</td>
              <td>{fornecedor.estado}</td>
              <td>{fornecedor.custoPorKwh}</td>
              <td>{fornecedor.limite_min_kwh}</td>
              <td>{fornecedor.totalClientes}</td>
              <td>{fornecedor.avaliacaoMedia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaFornecedor;

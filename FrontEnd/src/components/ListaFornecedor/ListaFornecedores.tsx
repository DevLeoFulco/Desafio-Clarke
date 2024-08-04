import React from 'react';
import styles from './ListaFornecedor.module.css';
import { Fornecedor } from '../../type';

import logoDefault from '../../assets/logoClarke.png';
import logo1 from '../../assets/Aneel.png';
import logo2 from '../../assets/COPEL.jpg';
import logo3 from '../../assets/CPFL.png';
import logo4 from '../../assets/Energiza.png';
import logo5 from '../../assets/Gambiarras.png';
import logo6 from '../../assets/NEOENERGIA.png';
import logo7 from '../../assets/Light.png';
import logo8 from '../../assets/Nomus.jpg';
import logo9 from '../../assets/Grau.png';

const logos:{ [key: string]: string } = {
  "Aneel": logo1,
  "COPEL": logo2,
  "CPFL": logo3,
  "Energiza": logo4,
  "Gambiarras": logo5,
  "Neo Energia": logo6,
  "LIGHT": logo7,
  "Nomus": logo8,
  "Grau": logo9,
  
};

const getLogo = (nome: string): string => {
  return logos[nome] || logoDefault; 
};
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
                <img src={getLogo(fornecedor.nome)} alt={`${fornecedor.nome} logo`} className={styles.logo} />
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

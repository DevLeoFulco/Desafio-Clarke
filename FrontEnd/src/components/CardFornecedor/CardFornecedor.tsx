import React from 'react';
import styles from './CardFornecedor.module.css';

interface CardFornecedorProps {
  nome: string;
  logo: string;
  estado: string;
  custoPorKwh: number;
  minKwh: number;
  totalClientes: number;
  classificacaoMedia: number;
}

const CardFornecedor: React.FC<CardFornecedorProps> = ({
  nome,
  logo,
  estado,
  custoPorKwh,
  minKwh,
  totalClientes,
  classificacaoMedia,
}) => {
  return (
    <div className="fornecedor-card">
      <img src={logo} alt={`${nome} logo`} className={styles.logo}/>
      <div className={styles.details}>
        <span className={styles.nome}>{nome}</span>
        <span className={styles.stado}>Estado: {estado}</span>
        <span className={styles.custo}>Custo por kWh: ${custoPorKwh}</span>
        <span className={styles.minKwh}>Minimo kWh: {minKwh}</span>
        <span className={styles.totalCli}>Total Clientes: {totalClientes}</span>
        <span className={styles.avaliacao}>Classificação média: {classificacaoMedia}</span>
       
      </div>
    </div>
  );
};

export default CardFornecedor;

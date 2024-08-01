import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_FORNECEDORES_BY_CONSUMO } from '../../graphql/queries/fornecedores';
import styles from './EnergyForm.module.css';
import ListaFornecedor from '../ListaFornecedor/ListaFornecedores';


const EnergyForm: React.FC = () => {
  const [consumo, setConsumo] = useState<number>(0);
  const [getFornecedores, { loading, error, data }] = useLazyQuery(GET_FORNECEDORES_BY_CONSUMO);

  const handleSubmit = (event: React.FormEvent <HTMLFormElement>) => {
    event.preventDefault();
    if (consumo > 0) {
      getFornecedores({ variables: { consumo: Number(consumo) } });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Escolha o seu fornecedor de energia</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="consumo">Consumo Mensal de Energia (kWh):</label>
        <input
          type="number"
          id="consumo"
          value={consumo}
          onChange={(e) => setConsumo(Number(e.target.value))}
          className={styles.input}
          required
          min="1"
        />
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      {loading && <p>Carregando fornecedores...</p>}
      {error && <p>Erro ao buscar fornecedores: {error.message}</p>}
      {data && <ListaFornecedor fornecedores={data.fornecedoresByConsumo} />}
    </div>
  );
};


export default EnergyForm;

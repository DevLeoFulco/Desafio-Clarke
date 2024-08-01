import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EnergyForm from '../EnergyForm/EnergyForm';
import ListaFornecedor from '../ListaFornecedor/ListaFornecedores';
import styles from './App.module.css';
import { Fornecedor } from '../../type';



const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('message');
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    // Função para buscar fornecedores do meu servidor
    const fetchFornecedores = async () => {
      try {
        const response = await fetch('/api/fornecedores'); // URL da API 
        const data = await response.json();
        setFornecedores(data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
      }
    };

    fetchFornecedores();
  }, []);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className={styles.app}>
      <Sidebar onMenuClick={handleMenuClick} />
      <div className={styles.mainContent}>
        {activeMenu === 'message' && (
          <div className={styles.messageContainer}>
            <h1>Economize até 40% na conta de luz da sua empresa sem precisar investir</h1>
          </div>
        )}
        {activeMenu === 'consumo' && <EnergyForm />}
        {activeMenu === 'fornecedores' && <ListaFornecedor fornecedores={fornecedores}/>}
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { FaBolt, FaIndustry, FaHome } from 'react-icons/fa';
import styles from './Sidebar.module.css';
import logo from '../../assets/logoClarke.png';

interface SidebarProps {
  onMenuClick: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick }) => {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="Clarke Logo" className={styles.logo} />
      <div className={styles.menu}>
      <button className={styles.menuButton} onClick={() => onMenuClick('message')}>
        <FaHome /> Home
      </button>
        <div className={styles.menuItem} onClick={() => onMenuClick('consumo')}>
          <FaBolt /> Consumo
        </div>
        <div className={styles.menuItem} onClick={() => onMenuClick('fornecedores')}>
          <FaIndustry /> Fornecedores
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

function Assets() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/account');
  };
  return (
    <div>
      <Header />
      <div>
        Assets
        <button
          type="button"
          onClick={handleClick}
        >
          Depósito/Retirada
        </button>
      </div>
    </div>
  );
}

export default Assets;

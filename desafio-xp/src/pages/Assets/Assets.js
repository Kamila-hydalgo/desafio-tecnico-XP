import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import MyAssets from '../../components/MyAssets/MyAssets';
import AllAssets from '../../components/AllAssets/AllAssets';

function Assets() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <MyAssets />
      <AllAssets />
      <div>
        <button type="button" name="goAccountBtn" onClick={() => navigate('/account')}>
          Depósito/Retirada
        </button>
      </div>
    </div>
  );
}

export default Assets;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import MyAssets from '../../components/MyAssets/MyAssets';
import AllAssets from '../../components/AllAssets/AllAssets';
import * as S from './style';

function Assets() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Header />
      <MyAssets />
      <AllAssets />
      <S.ContentButton>
        <S.Button type="button" name="goAccountBtn" onClick={() => navigate('/account')}>
          Depósito/Saque
        </S.Button>
      </S.ContentButton>
    </S.Container>
  );
}

export default Assets;

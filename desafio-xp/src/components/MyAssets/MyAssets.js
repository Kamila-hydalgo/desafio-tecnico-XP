import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

function MyAssets() {
  const navigate = useNavigate();
  const objAssets = useSelector((state) => state.asset);
  const myAssets = objAssets.myAsset;

  return (
    <S.Container>
      <h3>MINHAS AÇÕES</h3>
      <S.Table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          { myAssets.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ (asset.price).toFixed(2) }</td>
              <td>
                <S.Button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  C
                </S.Button>
                <S.Button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  V
                </S.Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
}

export default MyAssets;

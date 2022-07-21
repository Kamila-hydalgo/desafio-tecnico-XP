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
      <h2>MINHAS AÇÕES</h2>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          { myAssets.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ asset.price }</td>
              <td>
                <button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  C
                </button>
                <button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  V
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}

export default MyAssets;

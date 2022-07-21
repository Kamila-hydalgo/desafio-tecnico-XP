import React from 'react';
import { useNavigate } from 'react-router-dom';

import assets from '../../utils/assets.json';
import * as S from './style';

function AllAssets() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <h2>LISTA DE AÇÕES</h2>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          { assets.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ asset.price }</td>
              <td>
                <button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  C
                </button>
                <button type="button" disabled>
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

export default AllAssets;

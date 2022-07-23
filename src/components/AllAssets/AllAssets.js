import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as S from './style';

function AllAssets() {
  const navigate = useNavigate();

  const allAssets = useSelector((state) => state.asset.allAssets);

  return (
    <S.Container>
      <h3>LISTA DE AÇÕES</h3>
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
          { allAssets.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ (asset.price).toFixed(2) }</td>
              <td>
                <S.Button type="button" onClick={() => navigate(`${asset.asset}/${asset.id}`)}>
                  Comprar
                </S.Button>
                <S.ButtonDisabled type="button" disabled>
                  Vender
                </S.ButtonDisabled>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
}

export default AllAssets;

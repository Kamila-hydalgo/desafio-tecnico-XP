import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import assets from '../../utils/assets.json';

function TradeAsset() {
  const navigate = useNavigate();
  const { id } = useParams();

  const assetSelected = assets.filter((asset) => asset.id === +id);

  return (
    <main>
      <p>COMPRAR/VENDER AÇÕES</p>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
      </table>
      <tbody>
        { assetSelected.map((asset) => (
          <tr key={asset.id}>
            <td>{ asset.asset }</td>
            <td>{ asset.quantity }</td>
            <td>{ asset.price }</td>
          </tr>
        ))}
      </tbody>
      <form>
        <label htmlFor="buyAsset">
          <button
            type="button"
            id="buyAsset"
          >
            Comprar
          </button>
          <input
            placeholder="Insira a quantidade"
            type="text"
          />
        </label>
        <label htmlFor="sellAsset">
          <button
            type="button"
            id="sellAsset"
          >
            Vender
          </button>
          <input
            placeholder="Insira a quantidade"
            type="text"
          />
        </label>
      </form>
      <div>
        <button
          type="button"
          onClick={() => navigate('/assets')}
        >
          Voltar
        </button>
        <button
          type="button"
        >
          Confirmar
        </button>
      </div>
    </main>
  );
}

export default TradeAsset;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import assets from '../../utils/assets.json';

function TradeAsset() {
  const navigate = useNavigate();
  const { id } = useParams();

  const assetSelected = assets.filter((asset) => asset.id === +id);

  return (
    <main>
      <h2>COMPRAR/VENDER AÇÃO</h2>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
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
          <button type="button" name="buyAssetBtn" id="buyAsset">
            Comprar
          </button>
          <input placeholder="Insira a quantidade" type="text" />
        </label>
        <label htmlFor="sellAsset">
          <button type="button" id="sellAsset" name="sellAssetBtn">
            Vender
          </button>
          <input placeholder="Insira a quantidade" type="text" />
        </label>
      </form>
      <div>
        <button type="button" name="returnAssetsBtn" onClick={() => navigate('/assets')}>
          Voltar
        </button>
        <button type="button" name="confirmTradeBtn">
          Confirmar
        </button>
      </div>
    </main>
  );
}

export default TradeAsset;

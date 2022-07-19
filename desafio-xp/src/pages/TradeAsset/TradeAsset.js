import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { buyAsset, sellAsset } from '../../redux/slices/asset';
import { addMoney, withdrawMoney } from '../../redux/slices/user';
import assets from '../../utils/assets.json';

function TradeAsset() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const objAssets = useSelector((state) => state.asset);
  const balance = useSelector((state) => state.user.balance);
  const myAssets = objAssets.myAsset;

  const [buyQuantity, setBuyQuantity] = useState();
  const [sellQuantity, setSellQuantity] = useState();
  const inputBuyValue = Number(buyQuantity) || 0;
  const inputSellValue = Number(sellQuantity || 0);

  const assetSelected = assets.filter((asset) => asset.id === +id);
  const selected = assetSelected[0];

  const hasAsset = myAssets.some((asset) => id.includes(asset.id));

  const selectBuyBtn = () => {
    const stock = {
      id: selected.id,
      asset: selected.asset,
      quantity: inputBuyValue,
      price: selected.price,
    };

    dispatch(buyAsset(stock));
    dispatch(withdrawMoney(stock.price * stock.quantity));
  };

  const selectSellBtn = () => {
    const stock = {
      id: selected.id,
      asset: selected.asset,
      quantity: inputSellValue,
      price: selected.price,
    };

    if (inputSellValue && inputSellValue <= selected.quantity) {
      dispatch(sellAsset(stock));
      dispatch(addMoney(stock.price * stock.quantity));
    }
  };

  return (
    <div>
      <Header />
      <h2>COMPRAR/VENDER AÇÃO</h2>
      <p>
        {' '}
        Saldo disponível:
        {' '}
        {balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          { assetSelected.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ asset.price }</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <label htmlFor="buyAsset">
          <button type="button" name="buyAssetBtn" id="buyAsset" onClick={selectBuyBtn}>
            Comprar
          </button>
          <input
            type="text"
            placeholder="Insira a quantidade"
            value={buyQuantity}
            onChange={(event) => setBuyQuantity(event.target.value)}
          />
        </label>
        <label htmlFor="sellAsset">
          <button type="button" name="sellAssetBtn" id="sellAsset" onClick={selectSellBtn} disabled={hasAsset ? '' : 'disabled'}>
            Vender
          </button>
          <input
            placeholder="Insira a quantidade"
            type="text"
            value={sellQuantity}
            onChange={(event) => setSellQuantity(event.target.value)}
          />
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
    </div>
  );
}

export default TradeAsset;

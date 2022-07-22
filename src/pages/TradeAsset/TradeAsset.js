import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import * as S from './style';
import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';
import {
  buyAsset, sellAsset, removeAsset, decreaseAssetQnt, increaseAssetQnt,
} from '../../redux/slices/asset';

function TradeAsset() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AllAssets = useSelector((state) => state.asset.allAssets);
  const balance = useSelector((state) => state.user.balance);
  const objAssets = useSelector((state) => state.asset);
  const myAssets = objAssets.myAsset;

  const [buyQuantity, setBuyQuantity] = useState();
  const [sellQuantity, setSellQuantity] = useState();

  const assetSelected = AllAssets.filter((asset) => asset.id === +id);
  const selected = assetSelected[0];

  const hasAsset = myAssets.some((asset) => id.includes(asset.id));

  const selectBuyBtn = () => {
    const stock = {
      id: selected.id,
      asset: selected.asset,
      quantity: +buyQuantity,
      price: selected.price,
    };

    if (balance < (stock.price * stock.quantity)) {
      toast.error('Seu saldo não é suficiente para realizar essa compra');
    }
    if (balance >= (stock.price * stock.quantity)) {
      dispatch(buyAsset(stock));
      dispatch(withdrawMoney(stock.price * stock.quantity));
      dispatch(decreaseAssetQnt(stock));
      toast.success(`Compra de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso`);
    }
  };

  const selectSellBtn = () => {
    const stock = {
      id: selected.id,
      asset: selected.asset,
      quantity: +sellQuantity,
      price: selected.price,
    };

    const selectedAsset = myAssets.filter((asset) => asset.id === +id);
    const avaiableQuant = selectedAsset[0].quantity;

    if (avaiableQuant && +sellQuantity === avaiableQuant) {
      dispatch(increaseAssetQnt(stock));
      dispatch(addMoney(stock.price * stock.quantity));
      dispatch(removeAsset(stock));
      toast.success(`Venda de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso`);
    }
    if (avaiableQuant && +sellQuantity < avaiableQuant) {
      dispatch(sellAsset(stock));
      dispatch(addMoney(stock.price * stock.quantity));
      dispatch(increaseAssetQnt(stock));
      toast.success(`Venda de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso`);
    }
  };

  return (
    <S.Container>
      <Header />
      <h2>HOME BROKER</h2>
      <p>
        {' '}
        Saldo disponível:
        {' '}
        {balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </p>
      <S.Table>
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
      </S.Table>
      <form>
        <label htmlFor="buyAsset">
          <S.Button type="button" name="buyAssetBtn" id="buyAsset" onClick={selectBuyBtn}>
            Comprar
          </S.Button>
          <input
            type="text"
            placeholder="Insira a quantidade"
            value={buyQuantity}
            onChange={(event) => setBuyQuantity(event.target.value)}
          />
        </label>
        <label htmlFor="sellAsset">
          <S.Button type="button" name="sellAssetBtn" id="sellAsset" onClick={selectSellBtn} disabled={hasAsset ? '' : 'disabled'}>
            Vender
          </S.Button>
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
      </div>
      <Toaster />
    </S.Container>
  );
}

export default TradeAsset;

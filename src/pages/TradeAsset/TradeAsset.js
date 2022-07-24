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

  const allAssets = useSelector((state) => state.asset.allAssets);
  const balance = useSelector((state) => state.user.balance);
  const objAssets = useSelector((state) => state.asset);
  const myAssets = objAssets.myAsset;

  const [buyQuantity, setBuyQuantity] = useState('');
  const [sellQuantity, setSellQuantity] = useState('');

  const assetSelected = allAssets.filter((asset) => asset.id === +id);
  const selected = assetSelected[0];

  const hasAsset = myAssets.some((asset) => id.includes(asset.id));

  const selectBuyBtn = () => {
    const stock = {
      id: selected.id,
      asset: selected.asset,
      quantity: +buyQuantity,
      price: selected.price,
    };

    if (stock.quantity <= 0) {
      toast.error('Digite um valor válido!');
    }
    if (balance < (stock.price * stock.quantity)) {
      toast.error('Atenção! Seu saldo não é suficiente para realizar essa compra.');
    }
    if (stock.quantity > 0 && balance >= (stock.price * stock.quantity)) {
      dispatch(buyAsset(stock));
      dispatch(withdrawMoney(stock.price * stock.quantity));
      dispatch(decreaseAssetQnt(stock));
      toast.success(`Compra de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso!`);
    }
    setBuyQuantity('');
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

    if (stock.quantity <= 0) {
      toast.error('Digite um valor válido!');
    }
    if (avaiableQuant && +sellQuantity > 0 && +sellQuantity === avaiableQuant) {
      dispatch(increaseAssetQnt(stock));
      dispatch(addMoney(stock.price * stock.quantity));
      dispatch(removeAsset(stock));
      toast.success(`Venda de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso!`);
    }
    if (avaiableQuant && +sellQuantity > 0 && +sellQuantity < avaiableQuant) {
      dispatch(sellAsset(stock));
      dispatch(addMoney(stock.price * stock.quantity));
      dispatch(increaseAssetQnt(stock));
      toast.success(`Venda de ${stock.quantity} unidades do ativo ${stock.asset} realizada com sucesso!`);
    }
    setSellQuantity('');
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
              <td>{ (asset.price).toFixed(2) }</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <form>
        <div>
          <S.Button type="button" name="buyAssetBtn" id="buyAsset" onClick={selectBuyBtn}>
            Comprar
          </S.Button>
          <label htmlFor="buyAsset">
            <input
              type="text"
              placeholder="Insira a quantidade"
              value={buyQuantity}
              onChange={({ target }) => setBuyQuantity(target.value)}
            />
          </label>
        </div>
        <div>
          <S.Button type="button" name="sellAssetBtn" id="sellAsset" onClick={selectSellBtn} disabled={hasAsset ? '' : 'disabled'}>
            Vender
          </S.Button>
          <label htmlFor="sellAsset">
            <input
              placeholder="Insira a quantidade"
              type="text"
              value={sellQuantity}
              onChange={({ target }) => setSellQuantity(target.value)}
            />
          </label>
        </div>
      </form>
      <section>
        <S.ReturnButton type="button" name="returnAssetsBtn" onClick={() => navigate('/assets')}>
          Voltar
        </S.ReturnButton>
      </section>
      <Toaster />
    </S.Container>
  );
}

export default TradeAsset;

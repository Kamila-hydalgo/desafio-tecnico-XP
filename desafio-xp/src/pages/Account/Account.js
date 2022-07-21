import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';
import * as S from './style';

function Account() {
  const [inputAmount, setInputAmount] = useState();
  const balance = useSelector((state) => state.user.balance);
  const inputValue = Number(inputAmount) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isSelected = true;

  const handleSelect = ({ target: { name } }) => {
    if (name === 'depositBtn' && inputValue > 0) {
      // return isSelected;
      dispatch(addMoney(inputValue));
    }
    if (name === 'withdrawBtn' && inputValue > 0 && inputValue <= balance) {
      // return !isSelected;
      dispatch(withdrawMoney(inputValue));
    }
    return [];
  };

  // const confirmTransaction = () => {
  //   if (isSelected) {
  //     dispatch(addMoney(incrementValue));
  //   }
  //   if (!isSelected) {
  //     dispatch(withdrawMoney(incrementValue));
  //   }
  // };

  return (
    <S.Container>
      <Header />
      <S.Content>
        <p>
          Saldo Disponível:
          {balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <S.Button type="button" className="depositBtn" name="depositBtn" onClick={handleSelect}>
          Depósito
        </S.Button>
        <S.Button type="button" className="withdrawBtn" name="withdrawBtn" onClick={handleSelect}>
          Retirada
        </S.Button>
        <input
          id="value"
          name="accountValue"
          placeholder="Informe o valor"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
      </S.Content>
      <div>
        <S.Button type="button" className="returnBtn" name="returnAssetsBtn" onClick={() => navigate('/assets')}>
          Voltar
        </S.Button>
        <S.Button type="button" className="confirmBtn" name="confirmTransactionBtn">
          Confirmar
        </S.Button>
      </div>
    </S.Container>
  );
}

export default Account;

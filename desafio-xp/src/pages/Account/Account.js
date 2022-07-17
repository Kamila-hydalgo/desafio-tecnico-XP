import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';

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
    <div>
      <Header />
      <div>
        <div>
          Saldo: R$: $
          {balance}
          ,00
        </div>
        <button type="button" name="depositBtn" onClick={handleSelect}>
          Depósito
        </button>
        <button type="button" name="withdrawBtn" onClick={handleSelect}>
          Retirada
        </button>
        <input
          id="value"
          name="accountValue"
          placeholder="Informe o valor"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
      </div>
      <div>
        <button type="button" name="returnAssetsBtn" onClick={() => navigate('/assets')}>
          Voltar
        </button>
        <button type="button" name="confirmTransactionBtn">
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default Account;

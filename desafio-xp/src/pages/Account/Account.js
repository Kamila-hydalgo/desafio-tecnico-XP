import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';

function Account() {
  const [incrementAmount, setIncrementAmount] = useState();
  const balance = useSelector((state) => state.user.balance);
  const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const isSelected = true;

  const handleSelect = ({ target: { name } }) => {
    if (name === 'depositBtn') {
      // return isSelected;
      dispatch(addMoney(incrementValue));
    }
    if (name === 'withdrawBtn') {
      // return !isSelected;
      dispatch(withdrawMoney(incrementValue));
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
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
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

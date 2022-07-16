import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import { addingMoney } from '../../redux/slices/user';

function Account() {
  const [incrementAmount, setIncrementAmount] = useState();
  const balance = useSelector((state) => state.user.balance);
  const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div>
        <div>
          Saldo: R$: $
          {balance}
          ,00
        </div>
        <button
          type="button"
          onClick={() => dispatch(addingMoney(incrementValue))}
        >
          Depósito
        </button>
        <button
          type="button"
        >
          Retirada
        </button>
        <input
          id="value"
          placeholder="Informe o valor"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Account;

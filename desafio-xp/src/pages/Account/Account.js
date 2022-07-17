import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { addMoney } from '../../redux/slices/user';

function Account() {
  const [incrementAmount, setIncrementAmount] = useState();
  const balance = useSelector((state) => state.user.balance);
  const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleChange = ({ target: { value } }) => {

  // };

  // const decrementAmount = () => {
  //   if (incrementAmount >= balance) {
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
        <button
          type="button"
          onClick={() => dispatch(addMoney(incrementValue))}
        >
          Depósito
        </button>
        <button
          type="button"
          // onClick={decrementAmount}
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
    </div>
  );
}

export default Account;

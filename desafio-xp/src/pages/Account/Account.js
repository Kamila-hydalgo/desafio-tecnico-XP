import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';
import * as S from './style';

function Account() {
  const [inputAmount, setInputAmount] = useState();
  const balance = useSelector((state) => state.user.balance);
  const inputValue = Number(inputAmount) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = ({ target: { name } }) => {
    if (name === 'depositBtn' && inputValue > 0) {
      dispatch(addMoney(inputValue));
      toast.success(`Depósito de R$ ${inputValue} reais realizado com sucesso`);
    }
    if (name === 'withdrawBtn' && inputValue > 0 && inputValue <= balance) {
      dispatch(withdrawMoney(inputValue));
      toast.success(`Saque de R$ ${inputValue} reais realizado com sucesso`);
    }
    if (name === 'withdrawBtn' && inputValue > balance) {
      toast.error('Saldo insuficiente');
    }
    return [];
  };

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
          Saque
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
      </div>
      <Toaster />
    </S.Container>
  );
}

export default Account;

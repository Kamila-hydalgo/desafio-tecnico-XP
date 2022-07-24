import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header/Header';
import { addMoney, withdrawMoney } from '../../redux/slices/user';
import * as S from './style';

function Account() {
  const [inputAmount, setInputAmount] = useState('');
  const balance = useSelector((state) => state.user.balance);
  const inputValue = Number(inputAmount) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = ({ target: { name } }) => {
    if (inputValue <= 0) {
      toast.error('Digite um valor válido!');
    }
    if (name === 'depositBtn' && inputValue > 0) {
      dispatch(addMoney(inputValue));
      toast.success(`Depósito de R$ ${inputValue} reais realizado com sucesso!`);
    }
    if (name === 'withdrawBtn' && inputValue > 0 && inputValue <= balance) {
      dispatch(withdrawMoney(inputValue));
      toast.success(`Saque de R$ ${inputValue} reais realizado com sucesso!`);
    }
    if (name === 'withdrawBtn' && inputValue > balance) {
      toast.error('Atenção, saldo insuficiente!');
    }
    setInputAmount('');
  };

  return (
    <S.Container>
      <Header />
      <h2>MINHA CONTA</h2>
      <S.Content>
        <p>
          {' '}
          Saldo Disponível:
          {' '}
          {balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <form>
          <div>
            <S.Button type="button" className="depositBtn" name="depositBtn" onClick={handleSelect}>
              Depósito
            </S.Button>
            <S.Button type="button" className="withdrawBtn" name="withdrawBtn" onClick={handleSelect}>
              Saque
            </S.Button>
          </div>
          <div>
            <label htmlFor="accountValue">
              <input
                type="number"
                id="value"
                name="accountValue"
                placeholder="Informe o valor"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
              />
            </label>
          </div>
        </form>
      </S.Content>
      <section>
        <S.ReturnButton type="button" className="returnBtn" name="returnAssetsBtn" onClick={() => navigate('/assets')}>
          Voltar
        </S.ReturnButton>
      </section>
      <Toaster />
    </S.Container>
  );
}

export default Account;

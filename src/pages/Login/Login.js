import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { validate } from 'react-email-validator';
import { changeName } from '../../redux/slices/user';
import * as S from './style';
import Logo from '../../images/loginLogo.svg';
import LogoRico from '../../images/logo-rico.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const isButtonDisabled = () => !validate(email) || (password.length < 6);

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(changeName(email));

    navigate('/assets');
  };

  return (
    <S.Container>
      <S.Content>
        <img src={LogoRico} alt="logotipo rico investimentos" />
        <form>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={handleChange}
            />
          </label>
          <S.Button
            type="button"
            disabled={isButtonDisabled()}
            onClick={handleClick}
          >
            Entrar
          </S.Button>
        </form>
      </S.Content>
      <S.Aside>
        <img src={Logo} alt="Imagem gráfico de trade" />
      </S.Aside>
    </S.Container>
  );
}

export default Login;

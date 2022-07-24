import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Logo from '../../images/logo-rico.svg';

function Header() {
  const user = localStorage.getItem('email');

  return (
    <S.Container>
      <img src={Logo} alt="logotipo rico investimentos" />
      <nav>
        <Link to="/assets">Home</Link>
        <Link to="/account">Conta Digital</Link>
      </nav>
      <S.User>
        Olá,
        {' '}
        { user }
        !
      </S.User>
    </S.Container>
  );
}

export default Header;

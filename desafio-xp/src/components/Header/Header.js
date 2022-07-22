import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import Logo from '../../images/logo-rico.svg';

function Header() {
  const user = useSelector((state) => state.user.email);

  return (
    <S.Container>
      <img src={Logo} alt="logotipo rico investimentos" />
      <S.User>
        Olá,
        {' '}
        { user }
      </S.User>
    </S.Container>
  );
}

export default Header;

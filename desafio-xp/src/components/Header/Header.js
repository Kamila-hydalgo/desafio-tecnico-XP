import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';

function Header() {
  const user = useSelector((state) => state.user.email);

  return (
    <S.Container>
      <h5>Trade-X</h5>
      <S.User>
        Olá,
        {' '}
        { user }
      </S.User>
    </S.Container>
  );
}

export default Header;

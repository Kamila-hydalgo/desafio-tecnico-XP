import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.user.email);

  return (
    <div>
      <div>
        Usuário:
        {' '}
        { user }
      </div>
    </div>
  );
}

export default Header;

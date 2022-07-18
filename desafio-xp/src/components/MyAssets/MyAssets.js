import React from 'react';
import { useSelector } from 'react-redux';

function MyAssets() {
  const myAssets = useSelector((state) => state.asset.myAssets);
  console.log(myAssets);

  return (
    <div>
      Minhas ações
    </div>
  );
}

export default MyAssets;

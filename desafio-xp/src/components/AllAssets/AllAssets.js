import React from 'react';
import assets from '../../utils/assets.json';

function AllAssets() {
  console.log(assets);
  return (
    <div>
      <p>Todas as ações</p>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default AllAssets;

import React from 'react';
import assets from '../../utils/assets.json';

function AllAssets() {
  return (
    <div>
      <p>LISTA DE AÇÕES</p>
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          { assets.map((asset) => (
            <tr key={asset.id}>
              <td>{ asset.asset }</td>
              <td>{ asset.quantity }</td>
              <td>{ asset.price }</td>
              <td>
                <button
                  type="button"
                >
                  C
                </button>
                <button
                  type="button"
                  disabled
                >
                  V
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllAssets;

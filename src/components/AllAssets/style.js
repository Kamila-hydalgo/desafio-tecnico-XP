import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  h3 {
    color: #060A28;
    font-weight: bold;
    margin-top: 25px;
  }
  `;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 30px;
  table-layout: fixed;
  text-align: center;
  width: 60%;

  th {
    color: #060A28;
  }

  td {
    color: #E74F19;
  }
`;

export const Button = styled.button`
  background-color: #060A28;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #E74F19;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  margin: 10px;
  padding: 0.9em 1.5em;
  text-transform: uppercase;
  transition: all 0.2s ease-in;

  hover {
  background-color: #E74F19;
  color: #fff;
  transform: translateY(-7px);
}
`;

export const ButtonDisabled = styled.button`
  background-color: #C4C4D2;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #E74F19;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  margin: 30 px;
  padding: 0.9em 1.5em;
  text-transform: uppercase;
`;

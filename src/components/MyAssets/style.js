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
    justify-content: space-around;
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
  padding: 0.9em 1.5em;
  margin: 10px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #E74F19;
  background-color: #060A28;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  hover {
  background-color: #060A28;
  color: #fff;
  transform: translateY(-7px);
}

  active {
  transform: translateY(-1px);
}
`;

import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;

  h2 {
    color: #060A28;
    margin-top: 25px;
    justify-content: space-around;
  }
  
  p {
    color: #060A28;
    margin: 30px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Table = styled.table`
text-align: center;
margin-top: 30px;
width: 45%;
table-layout: fixed;
border-collapse: collapse;

th {
  color: #060A28;
  background-color: #E74F19;
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

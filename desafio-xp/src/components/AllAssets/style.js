import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;

  h3 {
    color: #060A28;
    margin-top: 25px;
    justify-content: space-around;
  }
  `;

export const Content = styled.table`
align-items: center;
`;

export const Table = styled.table`
align-items: center;
margin-top: 30px;

th, td {
  color: #060A28;
  background-color: #E74F19;
}
`;

export const Button = styled.button`
  padding: 0.9em 1.5em;
  font-size: 12px;
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
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

  active {
  transform: translateY(-1px);
}
`;

export const ButtonDisabled = styled.button`
padding: 0.9em 1.5em;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: #E74F19;
  background-color: #C4C4D2;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
`;

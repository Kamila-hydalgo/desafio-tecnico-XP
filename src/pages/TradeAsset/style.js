import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  section {
    padding: 50px;
  }

  h2 {
    color: #060A28;
    margin-top: 25px;
  }
  
  p {
    color: #060A28;
    border: solid #E74F19 2px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    margin: 30px;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 30%;

    div {
      display: flex;
    }

    label {
      color: #C4C4D2;
      display: flex;
      font-size: 15px;

      input {
        height: 40px;
        width: 200px;
        margin: 10px 0 30px;
        outline: none;
        background-color: transparent;
        border: 2px solid #060A28;
        border-radius: 10px;
        color: #060A28;
        font-size: 16px;
        padding-left: 20px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #060A28;
          font-size: 15px;
        }

        :hover {
          border: 2px solid #E74F19;
          color: #E74F19;
        }
        :focus {
          border: 2px solid #E74F19;
          color: #060A28;
        }
      }
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  table-layout: fixed;
  text-align: center;
  width: 50%;

  th {
    color: #060A28;

  }
  td {
    color: #E74F19;
    padding: 20px;
  }
`;

export const Button = styled.button`
  background-color: #060A28;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #E74F19;
  cursor: pointer;
  height: 40px;
  font-size: 13px;
  font-weight: bold;
  margin: 10px;
  outline: none;
  padding: 0.9em 1.5em;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  width: 250px;

  hover {
  background-color: #060A28;
  color: #fff;
  transform: translateY(-7px);
  }

  active {
  transform: translateY(-1px);
  }
`;

export const ReturnButton = styled.button`
  background-color: #C14113;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  height: 45px;
  transition: all 0.2s ease-in;
  width: 150px;

  :hover {
    background-color: #C14113;
  }
  :active {
    background-color: #C4C4D2;
  }
`;

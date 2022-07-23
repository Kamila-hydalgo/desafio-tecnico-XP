import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: #060A28;
    margin-top: 25px;
  }

  section {
    padding: 20px;
  }
`;

export const Content = styled.div`
  align-items: center;
  margin-top: 30px;
  justify-content: center;

  p {
    color: #060A28;
    border: solid #E74F19 2px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    width: 100%;

    div {
      display: flex;
      justify-content: center;
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #C4C4D2;

      input {
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 2px solid #060A28;
        border-radius: 10px;
        color: #060A28;
        font-size: 16px;
        height: 45px;
        margin: 20px 0 30px;
        outline: none;
        padding-left: 20px;
        transition: all 0.4s ease-in-out;
        width: 310px;

        ::placeholder {
          color: #060A28;
          font-size: 15px;
          font-weight: bold;
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

export const Button = styled.button`
  background-color: #C14113;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  height: 45px;
  margin: 15px;
  transition: all 0.2s ease-in;
  width: 120px;

  :hover {
    background-color: #C14113;
  }
  :active {
    background-color: #C4C4D2;
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

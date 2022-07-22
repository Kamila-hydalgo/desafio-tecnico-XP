import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div`
  width: calc(100vw - 580px);
  margin-top: 50px;
  margin-left: 60px;
  align-items: center;
  /* border: solid #060A28 1px */


  p {
    margin: 20px 20 40px;
    font-size: 26px;
    font-weight: bold;
    color: #060A28;
    padding: 20px;
  }
  
  form {
    width: 80%;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #C4C4D2;

      input {
        height: 55px;
        width: 200px;
        margin: 20px 120px 20px;
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
  width: 200px;
  height: 50px;
  background-color: #C14113;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in;
  margin: 15px;

  :hover {
    background-color: #C14113;
  }
  :active {
    background-color: #222222;
  }
`;

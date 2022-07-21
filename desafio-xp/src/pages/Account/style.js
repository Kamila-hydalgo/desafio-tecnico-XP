import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: calc(100vw - 580px);
  margin-top: 50px;
  margin-left: 60px;


  p {
    margin: 20px 20 40px;
    font-size: 26px;
    color: #FFFFFF;
    padding: 20px;
  }
  input {
        height: 55px;
        margin: 20px 0 70px;
        outline: none;
        background-color: transparent;
        border: 2px solid #ffffff40;
        border-radius: 10px;
        color: #ffffff40;
        font-size: 16px;
        padding: 20px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #ffffff40;
        }

        :hover {
          border: 2px solid #F6C103;
          color: #F7C606;
        }
        :focus {
          border: 2px solid #F6C103;
          color: #F7C606;
        }
      }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #F6C103;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in;
  margin: 15px;

  :hover {
    background-color: #F7C606;
  }
  :active {
    background-color: #222222;
  }

  :disabled {
    background-color: #ffe2ed;
    color: #00000040;
    cursor: not-allowed;
  }
`;

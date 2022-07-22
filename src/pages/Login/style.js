import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 1980px;
  height: 100vh;


  display: flex;
  align-items: center;
`;

export const Aside = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: calc(100% - 250px)
  }
`;

export const Content = styled.div`
  min-width: 40%;
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.background};

  padding: 100px 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: calc(100% - 300px)
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
        margin: 10px 0 20px;
        outline: none;
        background-color: transparent;
        border: 2px solid #ffffff40;
        border-radius: 10px;
        color: #ffffff40;
        font-size: 16px;
        padding-left: 20px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #ffffff40;
        }

        :hover {
          border: 2px solid #E74F19;
          color: #E74F19;
        }
        :focus {
          border: 2px solid #E74F19;
          color: #C4C4D2;
        }
      }
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 55px;
  background-color: #C14113;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #C14113;
  }
  :active {
    background-color: #C4C4D2;
  }

  :disabled {
    background-color: #ffe2ed;
    color: #00000040;
    cursor: not-allowed;
  }
`;

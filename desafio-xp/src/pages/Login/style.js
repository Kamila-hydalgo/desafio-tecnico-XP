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

  h1 {
    color: #F6C103;
    font-size: 50px;
    font-weight: 900;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: #ffffff90;

      input {
        height: 55px;
        margin: 10px 0 20px;
        outline: none;
        background-color: transparent;
        border: 2px solid #ffffff40;
        border-radius: 10px;
        color: #ffffff40;
        font-size: 24px;
        padding-left: 20px;
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
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 55px;
  background-color: #F6C103;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #F7C606;
  }
  :active {
    background-color: #b20425;
  }

  :disabled {
    background-color: #ffe2ed;
    color: #00000040;
    cursor: not-allowed;
  }
`;

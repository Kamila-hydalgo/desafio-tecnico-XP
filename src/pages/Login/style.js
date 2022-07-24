import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  max-width: 1980px;
  width: 100vw;
`;

export const Aside = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    width: calc(100% - 250px)
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 100%;
  min-width: 40%;
  width: 40%;

  padding: 100px 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: calc(100% - 300px)
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;

    label {
      color: #C4C4D2;
      display: flex;
      flex-direction: column;
      font-size: 18px;

      input {
        height: 55px;
        margin: 10px 0 20px;
        outline: none;
        background-color: transparent;
        border: 2px solid #ffffff40;
        border-radius: 10px;
        color: #060A28;
        font-size: 16px;
        padding-left: 20px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #060A28;
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
  color: #C4C4D2;
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
    background-color: #C4C4D2;
    color: #C14113;
    cursor: not-allowed;
  }
`;

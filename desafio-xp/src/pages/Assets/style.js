import styled from 'styled-components';

export const Container = styled.div`
background-color: #C4C4D2;
`;
export const ContentButton = styled.div`
align-items: center;
justify-content: center;
margin-left: 550px;
margin-top: 70px;
`;
export const Button = styled.button`
  width: 200px;
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

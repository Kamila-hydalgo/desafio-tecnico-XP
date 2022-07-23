import styled from 'styled-components';

export const Container = styled.div`
  background-color: #C4C4D2;
`;
export const ContentButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 40px;
  width: 100%;
`;
export const Button = styled.button`
  align-items: center;
  background-color: #C14113;
  border: none;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  height: 45px;
  justify-content: center;
  transition: all 0.2s ease-in;
  text-align: center;
  width: 200px;

  :hover {
    background-color: #C14113;
  }
  :active {
    background-color: #C4C4D2;
  }
`;

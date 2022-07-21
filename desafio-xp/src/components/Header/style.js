import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px;

  h5 {
    color: #F6C103;
    display: flex;
    font-size: 35px;
    font-weight: 100;
    justify-content: center;
    align-items: center;
  }
`;

export const User = styled.div`
  font-size: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px;
  align-items: center;

  nav {
    a {
      text-decoration: none;
      color: #C4C4D2;
      font-size: 20px;
      padding: 5px 20px 5px 0;
      transition: all 0.2s ease-in;

      & + a {
        border-left: 2px solid #C4C4D2;
        padding-left: 20px;
      }

      :hover {
        color: #E74F19;
        }
      :focus {
        color: #E74F19;
      }
    }
  }
`;

export const User = styled.div`
  font-size: 18px;
  color: #C4C4D2;
  display: flex;
  align-items: center;
`;

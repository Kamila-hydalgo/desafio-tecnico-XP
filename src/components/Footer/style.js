import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 10px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 30px;
  align-items: center;

  nav {
    a {
      text-decoration: none;
      color: #C4C4D2;
      font-size: 15px;
      padding: 5px 20px 5px 0;
      transition: all 0.2s ease-in;

      :hover {
        color: #E74F19;
        }
      :focus {
        color: #E74F19;
      }
    }
  }
`;

export default Footer;

import styled, { css } from 'styled-components';
import backgroundImg from '../../images/background_header.jpg';

export const Header = styled.div`
  padding: 15px;
`;

export const HeaderWrapper = styled.div`
  background-color: black;
  background-image: url(${backgroundImg});
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;








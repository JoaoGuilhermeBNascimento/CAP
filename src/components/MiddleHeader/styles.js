import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  justify-content: space-around;

  img {
    width: 200px;
    height: 82px;
  }

  span {

    color: ${({theme}) => theme.colors.primary.background};
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
  }

  h3 {
    color: ${({theme}) => theme.colors.primary.lighter};
  }

`;
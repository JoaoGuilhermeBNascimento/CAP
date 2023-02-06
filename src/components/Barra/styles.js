import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 256px;
  font-size: 12px;


`;

export const Titles = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: row;

  .order-items {

    a {
      outline:none ;
      text-decoration: none;
      margin-left: 24px;
      font-size: 12px;
    }

  }



`;

export const SecondTitle = styled.div`
  display: flex;
  gap: 18px;
  margin-left: 48px;

  a {
    outline: none;
    text-decoration: none;
    color: currentColor;
    font-size: 12px;

  }


`;
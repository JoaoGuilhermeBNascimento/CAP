import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 256px;
  font-size: 12px;
  height: 26px;




`;

export const Titles = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: row;


  .order-items {

    a {
      color: ${({theme}) => theme.colors.primary.letters};
      outline:none ;
      text-decoration: none;
      margin-left: 24px;
      font-size: 12px;
      transition: 0.6s ease-in-out;


      &:hover {
        color: ${({theme})=> theme.colors.primary.letterColor};
      }
    }

  }



`;

export const SecondTitle = styled.div`
  display: flex;
  gap: 18px;
  margin-left: 48px;
  color: ${({theme}) => theme.colors.primary.letters};

  a {

    outline: none;
    text-decoration: none;
    color: currentColor;
    font-size: 12px;
    transition: 0.6s ease-in-out;


    &:hover {
        color: ${({theme})=> theme.colors.primary.letterColor};
      }

  }


`;
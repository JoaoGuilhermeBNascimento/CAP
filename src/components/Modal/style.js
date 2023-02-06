import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 24px;



  .box {
    display: flex;
    margin-left: 300px;
    padding: 20px;
    gap: 18px;


  }

`;

export const Link = styled.a`
   display: flex;
  width: 220px;
  height: 300px;
  left: 39px;
  top: 42px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition:  1s ease-in-out ;
  padding: 20px;



  &:hover {
    background: ${({theme}) => theme.colors.primary.cardColor};
    color: aliceblue;
    text-decoration: underline;
  }



`;
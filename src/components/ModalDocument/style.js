import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 24px;



  .box {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;




  }

`;

export const Link = styled.a`
  display: flex;
  width: 140px;
  height: 160px;

  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition:  1s ease-in-out ;
  padding: 20px;
  gap: 12px;
  overflow-wrap: break-word;
  font-size: 14px;


  & + a {
    display: flex;
    margin: 4px 8px;
    align-items: center;
    justify-content: center;

  }


  &:hover {
    background: ${({theme}) => theme.colors.primary.cardColor};
    color: aliceblue;
    text-decoration: underline;
  }


`;
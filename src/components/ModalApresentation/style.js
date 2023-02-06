import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 24px 24px;



  .box {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items:center;


  }

  .buttons {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    align-items: center;
    justify-content: center;
  }

`;

export const Link = styled.a`
  display: flex;
  width: 1640px;
  height: 52px;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition:  1s ease-in-out ;
  padding: 20px;
  gap: 12px;
  overflow-wrap: break-word;
  font-size: 14px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 4px;


  & + a {
    display: flex;
    margin: 4px 8px;
    align-items: center;
    justify-content: flex-start;

  }


  &:hover {
    background: ${({theme}) => theme.colors.primary.cardColor};
    color: aliceblue;
    text-decoration: underline;
  }


`;

export const ButtonCheck = styled.button`
  width: 100%;
  max-width: 1660px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 18px;
  padding: 16px;
  margin-left: 12px;
  background: ${({theme})=> theme.colors.primary.light};
  color: ${({theme})=> theme.colors.primary.letterColor};
  border-radius: 12px;
  border: none;
  margin: 12px;





`;
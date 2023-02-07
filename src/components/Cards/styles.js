import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: '#020000';


   .box {
    display: flex;
    gap: 24px;
    max-width: 100%;
    margin: 60px auto;
    align-items: center;
    justify-content: center;
  }


`;




export const Card = styled.button`
  display: flex;
  width: 220px;
  height: 300px;
  left: 39px;
  top: 42px;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: white;
  color: inherit;
  transition:  0.5s ease-out ;
  margin-top: 16px;
  border: none;



  &:hover {
    background: ${({theme}) => theme.colors.primary.cardColor};
    color: ${({theme}) => theme.colors.primary.letterColor};
    height: 300px;
    width: 240px;
    transform: scale3d(1.2,1.2,1.6);
    font-size: 20px;
    padding: 12px;
    margin: 0 12px;




  };

  &:not(:hover) {
    color: '#ffffff';

    opacity: 0.8;
    transform: scale3d(1);


  }






  img {
    display: flex;
    width: 85px;
    height: 85px;
    margin: 12px 0;
  }



  h3 {
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 20px;
    color: '#020000';

  }


  span {
    display: flex;
    flex: 1;
    width: 200px;
    height: 180px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin: 18px 24px;
    color: '#020000';


  }



`;


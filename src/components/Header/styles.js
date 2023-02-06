import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 48px;
    width: 116px;
    height: 57px;
  }
  .secretaria {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: ${({theme})=> theme.colors.primary.light};

    span {
      margin-left: 28px;
    }
  }

`;
export const CapContainer = styled.div`
  display: flex;
  margin-right: 48px;


.buttonConfig {
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #ffff;
    background: ${({theme}) => theme.colors.primary.dark};
    border: 1px solid #A4A4A4;
    border-radius: 45px;
    width: 168px;
    height: 36px;
    font-weight: 600;
    animation: ease-in-out;

      &:hover {

        transform: scale3d(1.25,1.25,1.25);


      }


      a {
        color: inherit;
        text-decoration: none;
        animation: 2.8s ease-in-out;

      }

      img {
        margin-right: 12px;


      }

      }
    }




`;
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  margin: 24px 36px;


`;

export const Channels = styled.div`

  .canais {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({theme}) => theme.colors.primary.light};
  }

  .geral {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;



    .dados-gerais {
    display: flex;
    gap: 12px;
    margin-top: 16px;

   > img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 18px;

    }

  }
    .dados-email {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;

   > img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }

    > span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 400;

    }

    .email {
      display: flex;
      flex-direction: column;



       h4 {
        font-weight:  400;
        font-size: 18px;
      }
      > span {
        font-weight:  400;
        font-size: 18px;
      }
    }

  }

  }



`;


export const Sistems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  .acessos {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    color: ${({theme}) => theme.colors.primary.light};
  }

  .logos {
    display: flex;

    a {

      & + a {
        padding: 12px;
      }
    }


  }

`;


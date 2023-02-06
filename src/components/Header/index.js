import { Container,Title ,CapContainer } from './styles';
import logoGdf from '../../Assets/images/logo-gdf.jpeg';
// import pesquisar from '../../Assets/images/pesquisar.svg';
import user from '../../Assets/images/user.png';


export function Header() {
  return (

    <>
      <Container>
        <Title>
          <img src={logoGdf} alt="LogoGDF" />
          <div className="secretaria">

            <span>SECRETARIA DE ESTADO DE DESENVOLVIMENTO </span>
            <span>URBANO E HABITAÇÃO - SEDUH</span>
          </div>

        </Title>
        <CapContainer>
          <div className="buttonConfig">

            <button href="http://capcidadao.seduh.df.gov.br/" target='_blank' rel="noreferrer">
              <img src={user} alt="usuário icon" />

              <a href="http://capcidadao.seduh.df.gov.br/" target='_blank' rel="noreferrer">
                CAPWEB
              </a>


            </button>

          </div>

        </CapContainer>


      </Container>
    </>
  );
}
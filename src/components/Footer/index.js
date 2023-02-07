import { Channels, Container, Sistems } from './styles';
import canais from '../../Assets/images/canais.png';
import ouvidoria from '../../Assets/images/ouvidoria.png';
import email from '../../Assets/images/email.png';
import telefone from '../../Assets/images/telefone.png';
import sisduc from '../../Assets/images/sisduc.png';
import sysaga from '../../Assets/images/sysaga.png';
import geoportal from '../../Assets/images/geoportal.png';


export function Footer() {

  return (
    <>

      <Container>

        <Channels>


          <div className="canais">
            <img src={canais} alt="" />
            <h3>CANAIS DE ATENDIMENTO - CAP</h3>
          </div>



          <div className="geral">

            <div className="dados-gerais">
              <div>
                <img src={telefone} alt="" />

              </div>
              <div className="dados">

                <span>ATENDIMENTO GERAL</span>

                <span> (061) 3214-4000 | Opção 1</span>
              </div>

            </div>

            <div className="dados-email">
              <div>
                <img src={email} alt="" />

              </div>
              <div className="email">

                <h4>EMAIL</h4>
                <span> atendimentocap@seduh.df.gov.br</span>
              </div>

            </div>



          </div>

        </Channels>

        <Sistems>
          <div className="acessos">

            <img src={ouvidoria} alt="" />
            <h3>SISTEMAS MAIS ACESSADOS</h3>
          </div>
          <div className="logos">
            <a href="https://www.geoportal.seduh.df.gov.br/geoportal/" target="_blank" rel='noreferrer' >

              <img src={geoportal} alt="site de busca de normas"  />
            </a>
            <a href="https://www.sisduc.seduh.df.gov.br/v1/" target="_blank" rel='noreferrer'>

              <img src={sisduc} alt="site de normas" />

            </a>

            <a href="https://sysaga.decea.mil.br/" target="_blank" rel='noreferrer'>

              <img src={sysaga} alt="comaer" />
            </a>

          </div>

        </Sistems>


      </Container>


    </>
  );
}
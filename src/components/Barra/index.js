import { Container, SecondTitle, Titles } from './styles';
import libras from '../../Assets/images/libras.svg';

export function Barra() {
  return (
    <>
      <Container>
        <Titles>
          <div className="order-items">
            <a >SEDUH</a>
            <a >Transparência</a>
            <a >Ouvidoria</a>
            <a >Acesso à informação</a>
            <a >Agência Brasília</a>
            <a >Portal do Governo de Brasília</a>
          </div>


        </Titles>

        <SecondTitle>
          <a >Fonte </a>
          <span>|</span>
          <a >Contraste </a>
          <span>|</span>

          <img src={libras} alt="simbolo de libras" />

        </SecondTitle>

      </Container>
    </>
  );
}
import logoCAP from '../../Assets/images/logo-cap.png';
import { Container } from './styles';

export function MiddleHeader() {
  return (
    <Container>
      <img src={logoCAP} alt="logo CAP" />
      <span>CENTRAL DE APROVAÇÃO DE PROJETOS</span>
      <h3>Perguntas Frequentes</h3>
    </Container>
  );
}
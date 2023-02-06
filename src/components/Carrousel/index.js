import brasilia from '../../Assets/images/brasilia.jpg';
import { Image, Container } from './styles';

export function Carrousel() {
  return (

    <Container>
      <Image src={brasilia} alt="Imagens do carrousel" />
    </Container>
  );
}
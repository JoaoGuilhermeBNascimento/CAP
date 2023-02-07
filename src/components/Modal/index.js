import { Container, Link } from './style';

export function ModalCards() {
  return (
    <Container>
      <div className="box">

        <Link href="https://www.youtube.com/watch?v=GhnhxCjEtPM"  target="_blank">
         Vídeo tutorial - Nova Solicitação (CAP-Web)
        </Link>
        <Link href="https://www.youtube.com/watch?v=9ZPVfiSsz8Q" target="_blank">
         Vídeo tutorial - Cumprimento de Exigência (CAP-Web)
        </Link>
        <Link href="https://www.youtube.com/watch?v=cVBWqzQZ8Sc" target="_blank">
         Vídeo tutorial - Solicitação de Taxas (CAP-Web)
        </Link>
        <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST%E2%80%93VIABILIDADE-LEGAL.pdf" target="_blank">
        Checklist Viabilidade Legal
        </Link>
        <Link href="https://www.youtube.com/watch?v=DbROPzNFngE" target="_blank">
        Vídeo tutorial - Agendamento de Reunião com o Analista (CAP-Web)        </Link>

      </div>

    </Container>
  );
}
import { useState } from 'react';
import { ButtonCheck, Container, Link } from './style';


export function ModalReport() {
  const [firstStage, setFirstStage] = useState(false);

  return (
    <Container>
      <div className="box">
        <ButtonCheck type='button' onClick={() => setFirstStage(!firstStage)}>
          Relatórios Gerenciais de Produção

        </ButtonCheck>
        {firstStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/Estat%C3%ADsticas-da-CAP.pdf">
        Indicadores Estratégicos – anos 2015 a 2018
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/relatorio-quadrianual-de-gestao-2015-2018/">
        Relatório Quadrianual de Gestão – anos 2015 a 2018
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/06/RELATORIO_SIMPLIFICADO_DEZEMBRO_2019.pdf">
        ReAS – Relatório Anual de Serviços CAP 2019 – ANALÍTICO
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/06/RELATORIO_ANUAL2019_R02.pdf">
        ReAS – Relatório Anual de Serviços CAP 2019 – SINTÉTICO
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/02/RELATORIO-ANUAL-2020.pdf">
        ReAS – Relatório Anual de Serviços CAP 2020
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/02/RELATORIO-ANUAL-2021.pdf">
        ReAS – Relatório Anual de Serviços CAP 2021
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2023/01/RELATORIO-ANUAL-CAP-2022.pdf">
        ReAS – Relatório Anual de Serviços CAP 2022
            </Link>

          </div>
        )}





      </div>

    </Container>
  );
}
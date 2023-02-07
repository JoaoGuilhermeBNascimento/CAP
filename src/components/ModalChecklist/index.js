import { useState } from 'react';
import { ButtonCheck, Container, Link } from './style';


export function ModalChecklist() {
  const [firstStage, setFirstStage] = useState(false);
  const [secondStage, setSecondStage] = useState(false);
  const [thirdStage, setThirdStage] = useState(false);
  const [fourthStage, setFourthStage] = useState(false);
  const [fifthStage, setFifthStage] = useState(false);

  return (
    <Container>
      <div className="box">
        <ButtonCheck type='button' onClick={() => setFirstStage(!firstStage)}>
          1- HABILITAÇÃO DE PROJETO

        </ButtonCheck>
        {firstStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST%E2%80%93VIABILIDADE-LEGAL.pdf" target="_blank">
        Check List - Viabilidade Legal
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-ESTUDO-PR%C3%89VIO.pdf" target="_blank">
        Check List - Estudo Prévio
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-COMPLEMENTAR.pdf" target="_blank">
        Check List - Análise Complementar
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-CONJUNTA.pdf" target="_blank">
        Check List - Análise Conjunta
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-CONCOMITANTE.pdf" target="_blank">
        Check List - Análise Concomitante
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/03/Check-List-Regularizacao-Edilicia-Habilitacao-Habite-se-Artigo-151.pdf" target="_blank">
        Check List - Regularização Edilícia - Habilitação Habite-se - Artigo 151
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-REGULARIZA%C3%87%C3%83O-EDIL%C3%8DCIA-ARTIGO-152.pdf" target="_blank">
        Check List - Regularização Edilícia - Habilitação Habite-se - Artigo 152
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/03/Check-List-Regularizacao-Edilicia-Habilitacao-Habite-se-Artigo-153.pdf" target="_blank">
        Check List - Regularização Edilícia - Habilitação Habite-se - Artigo 153
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/04/Check-List-Habilitacao-de-Projeto-em-AREA-RURAL-COM-Memorial-Descritivo.pdf" target="_blank">
        Check List - Habilitação de Projeto em ÁREA RURAL COM Memorial Descritivo
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/04/Check-List-Habilitacao-de-Projeto-em-AREA-RURAL-COM-Plano-de-Utilizacao-da-Unidade-de-Producao-PU.pdf" target="_blank">
        Check-List – Habilitação de Projeto em ÁREA RURAL COM Plano de Utilização da Unidade de Produção – PU
            </Link>
          </div>
        )}

        <ButtonCheck type='button' onClick={() => setSecondStage(!secondStage)}>
          2- EMISSÃO DE LICENÇAS
        </ButtonCheck>
        {secondStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/11/CHECK-LIST-ALVAR%C3%81-DE-CONSTRU%C3%87%C3%83O-2021.pdf" target="_blank">
        Check List - Alvará de Construção
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/01/CHECK-LIST-ALVARA-DE-CONSTRUCAO-HABITACAO-UNIFAMILIAR-2022.pdf" target="_blank">
        Check List - Alvará de Construção - Habitação unifamiliar
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/Check-List-Alvar%C3%A1-de-Constru%C3%A7%C3%A3o-RITO-ESPECIAL-2021.pdf" target="_blank">
        Check List - Alvará de Construção - RITO ESPECIAL
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/03/Check-List-Licencas-Especificas.pdf" target="_blank">
        Check List - Licença Específica
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/09/CHECK-LIST-LICEN%C3%87A-ESPECIFICA-ESTANDE-DE-VENDAS-em-%C3%81REA-P%C3%9ABLICA.pdf" target="_blank">
        Check List - Estande de Vendas
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/CHECK-LIST-ENGENHO-PUBLICIT%C3%81RIO-2021.pdf" target="_blank">
        Check List - Engenho Publicitário
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/09/CHECK-LIST-LICEN%C3%87A-ESPECIFICA-LICE%C3%87A-ESPECIFICA.pdf" target="_blank">
        Check List - Canteiro de Obras
            </Link>

          </div>
        )}

        <ButtonCheck type='button' onClick={() => setThirdStage(!thirdStage)}>
          3- CERTIFICADO DE CONCLUSÃO / CARTA DE HABITE-SE
        </ButtonCheck>
        {thirdStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/CHECK-LIST-HABITE-SE-2021.pdf" target="_blank">
        Check List - Habite-se
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/CHECK-LIST-ATESTADO-DE-CONCLUS%C3%83O-2021.pdf" target="_blank">
        Check List - Atestado de Conclusão
            </Link>

          </div>
        )}
        <ButtonCheck type='button' onClick={() => setFourthStage(!fourthStage)}>
          4- OUTROS
        </ButtonCheck>
        {fourthStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/10/Check-List-Puxadinho-Asa-Sul-Lei-988-2022-e-Decreto-43.609-2022.pdf" target="_blank">
        Check List - Puxadinho Asa Sul - Lei 988/2022
            </Link>



            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-PLANO-DE-OCUPA%C3%87%C3%83O.pdf" target="_blank">
        Check List - Plano de Ocupação
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-COMPENSA%C3%87%C3%83O-URBAN%C3%8DSTICA.pdf" target="_blank">
        Check List - Compensação Urbanística
            </Link>
          </div>
        )}
        <ButtonCheck type='button' onClick={() => setFifthStage(!fifthStage)}>
          5- TABELA DE TAXAS / PLANILHAS DE CÁLCULO
        </ButtonCheck>
        {fifthStage && (
          <div className='buttons'>
            <Link href=''>
          Tabela para cálculo dos Valores de Licenciamento de Obras e Edificações
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2023/01/CALCULO-TAXAS-2023-ajustado.xlsx' target="_blank">
          Planilha de cálculo da taxas referente ao processo de licenciamento de obras
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/06/COMPENSA%C3%87%C3%83O-URBANISTICA-.xlsx' target="_blank">
          Simulador de Taxa de Compensação Urbanística

            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/06/tabela-analise-compensacao-urbanistica.xlsx' target="_blank">
          Cálculo de taxa de análise e emissão de TAR (Compensação Urbanística)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/06/CALCULO-ODIR-.xlsx' target="_blank">
          Cálculo ODIR

            </Link>
          </div>
        )}


      </div>

    </Container>
  );
}
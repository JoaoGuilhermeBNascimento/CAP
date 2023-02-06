import { useState } from 'react';
import { ButtonCheck, Container, Link } from './style';


export function ModalInstruction() {
  const [firstStage, setFirstStage] = useState(false);
  const [secondStage, setSecondStage] = useState(false);
  const [thirdStage, setThirdStage] = useState(false);
  const [fourthStage, setFourthStage] = useState(false);
  const [fifthStage, setFifthStage] = useState(false);

  return (
    <Container>
      <div className="box">
        <ButtonCheck type='button' onClick={() => setFirstStage(!firstStage)}>
          Instruções Normativas - 2018

        </ButtonCheck>
        {firstStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0001_COARQ_CAP_REGIME_CONDOMINIAL.pdf">
        Instrução Normativa Nº 001 COARQ_CAP REGIME CONDOMINIAL
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-ESTUDO-PR%C3%89VIO.pdf">
        Instrução Normativa Nº 002 COARQ_CAP GEORREFERENCIAMENTO
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-COMPLEMENTAR.pdf">
        Instrução Normativa Nº 003 COARQ_CAP ACESSIBILIDADE
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-CONJUNTA.pdf">
        Instrução Normativa Nº 004 COARQ_CAP REVERSIBILIDADE
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-AN%C3%81LISE-CONCOMITANTE.pdf">
        Instrução Normativa Nº 004 COARQ_CAP REVERSIBILIDADE COMPLEMENTO NOTA TÉCNICA 903.000.003-2017 PROCESSO 429.000.025-2014
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0005_COARQ_CAP_MODIFICA%C3%87%C3%83O_DE_PROJETO.pdf">
        2018-Instrução Normativa N°005 COARQ_CAP MODIFICAÇÃO DE PROJETO
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0006_COARQ_CAP_MODIFICA%C3%87%C3%83O_UNIDADE_AUT%C3%94NOMA.pdf">
        2018-Instrução Normativa N°006 COARQ_CAP MODIFICAÇÃO UNIDADE AUTÔNOMA
            </Link>
            <Link href="2018-Instrução Normativa N°007 COARQ_CAP CÂMARA TEMÁTICA CONPLAN">
        2018-Instrução Normativa N°007 COARQ_CAP CÂMARA TEMÁTICA CONPLAN
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0008_COARQ_CAP_CENTRAL_DE_GLP.pdf">
        2018-Instrução Normativa N°008 COARQ_CAP CENTRAL DE GLP
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0009_COARQ_CAP_TOMBAMENTO_SECULT_SUPAC_e_NOTA_T%C3%89CNICA.pdf">
        2018-Instrução Normativa N°009 COARQ_CAP TOMBAMENTO SECULT SUPAC e NOTA TÉCNICA
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2018_Instru%C3%A7%C3%A3o_Normativa_N%C2%B0010_COARQ_CAP_CINDACTA.pdf'>
              2018-Instrução Normativa N°010 COARQ_CAP CINDACTA
            </Link>
            <Link href='2018-Instrução Normativa Nº 011 COARQ_CAP PROCEDIMENTO NOVO COE_R01'>
              2018-Instrução Normativa Nº 011 COARQ_CAP PROCEDIMENTO NOVO COE_R01
            </Link>
          </div>
        )}

        <ButtonCheck type='button' onClick={() => setSecondStage(!secondStage)}>
          Instruções Normativas - 2019
        </ButtonCheck>
        {secondStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019_Instru%C3%A7%C3%A3o_Normativa_N%C2%BA001_COARQ_CAP_MIGRA%C3%87%C3%83O_DE_COMPET%C3%8ANCIAS_E_POSTOS_AVAN%C3%87ADOS.pdf">
        2019-Instrução Normativa Nº 001 COARQ_CAP MIGRAÇÃO DE COMPETÊNCIAS E POSTOS AVANÇADOS
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019_Instru%C3%A7%C3%A3o_Normativa_N%C2%BA002_COARQ_DECLARA%C3%87%C3%83O_DE_INEXIGIBILIDADE_COMAER.pdf">
        2019-Instrução Normativa Nº002 COARQ_DECLARAÇÃO DE INEXIGIBILIDADE COMAER
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019_Instru%C3%A7%C3%A3o_Normativa_N%C2%BA003_ULIC_CAP_COMPATIBILIZA%C3%87%C3%83O_URBAN%C3%8DSTICA.pdf">
        2019-Instrução Normativa Nº 003 ULIC_CAP COMPATIBILIZAÇÃO URBANÍSTICA
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/07/2019_Instru%C3%A7%C3%A3o_Normativa_N%C2%BA004_ULIC_CAP_HABITA%C3%87%C3%83O_UNIFAMILIAR_DE_USO_EXCLUSIVO.pdf">
        2019-Instrução Normativa Nº 004 ULIC_CAP HABITAÇÃO UNIFAMILIAR DE USO EXCLUSIVO
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Instru%C3%A7%C3%A3o-Normativa-N%C2%BA005-ULIC_CAP-SOLICITA%C3%87%C3%83O-DE-COTA-DE-SOLEIRA.pdf">
        2019-Instrução Normativa Nº 005 ULIC_CAP SOLICITAÇÃO DE COTA DE SOLEIRA
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Instru%C3%A7%C3%A3o-Normativa-N%C2%BA006-ULIC_CAP-CANTEIRO-DE-OBRAS.pdf">
        2019-Instrução Normativa Nº 006 ULIC_CAP CANTEIRO DE OBRAS
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Instru%C3%A7%C3%A3o-Normativa-N%C2%BA007-ULIC_CAP-ALVAR%C3%81-DE-CONSTRU%C3%87%C3%83O-APROVA%C3%87%C3%83O-S....pdf">
        2019-Instrução Normativa Nº 007 ULIC_CAP ALVARÁ DE CONSTRUÇÃO – SEM ALTERAÇÃO DE ÁREA
            </Link>
            <Link href='2019-Instrução Normativa Nº 008 ULIC_CAP ENGENHO PUBLICITÁRIO'>
              2019-Instrução Normativa Nº 008 ULIC_CAP ENGENHO PUBLICITÁRIO
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Intru%C3%A7%C3%A3o-Normativa-N%C2%BA009-ULIC_CAP-REGULARIZA%C3%87%C3%83O-EDIL%C3%8DCIA-ART151.pdf'>
              2019-Instrução Normativa Nº 009 ULIC_CAP Regularização Edilícia ART 151
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Intru%C3%A7%C3%A3o-Normativa-N%C2%BA010-ULIC_CAP-REGULARIZA%C3%87%C3%83O-EDIL%C3%8DCIA-ART152.pdf'>
              2019-Instrução Normativa Nº 011 ULIC_CAP Regularização Edilícia ART 153
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/02/2019-Intru%C3%A7%C3%A3o-Normativa-N%C2%B0012-ULIC_CAP-COMPENSA%C3%87%C3%83O-URBAN%C3%8DSTICA.pdf'>
              2019-Instrução Normativa Nº 012 ULIC_CAP INSTRUMENTO DA COMPENSAÇÃO URBANÍSTICA
            </Link>


          </div>
        )}

        <ButtonCheck type='button' onClick={() => setThirdStage(!thirdStage)}>
          Instruções Normativas - 2020
        </ButtonCheck>
        {thirdStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/07/INSTRUC%CC%A7A%CC%83O-02_2020-CERTIFICAC%CC%A7A%CC%83O-TELETRABALHO-R03.pdf">
        2020-Instrução Normativa Nº 002 ULIC_CAP CERTIFICAÇÃO ELETRÔNICA DE PROJETOS ARQUITETÔNICOS
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/07/INSTRUC%CC%A7A%CC%83O-03_2020-PUXADINHO-R03.pdf">
        2020-Instrução Normativa Nº 003 ULIC_CAP INSTRUÇÃO PUXADINHO
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/09/INSTRU%C3%87%C3%83O-04_2020-CERTIFICA%C3%87%C3%83O-E-REGISTRO-CARTORIAL-R02.pdf'>
              2020-Instrução Normativa Nº 004 ULIC_CAP CERTIFICAÇÃO ELETRÔNICA E REGISTRO CARTORIAL
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/10/INSTRUCAO_NORMATIVA_05_2020___PROCEDIMENTOS_AREA_RURAL.pdf'>
              2020-Instrução Normativa Nº 005 ULIC_CAP PROCEDIMENTOS EM ÁREA RURAL
            </Link>

          </div>
        )}
        <ButtonCheck type='button' onClick={() => setFourthStage(!fourthStage)}>
          Instruções Normativas - 2021
        </ButtonCheck>
        {fourthStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/09/2021-Instru%C3%A7%C3%A3o-Normativa-N%C2%BA001-CAP-Monitoramento-e-Controle.pdf">
        2021-Instrução Normativa Nº001 CAP Monitoramento e Controle
            </Link>

            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/08/INSTRUCAO-N-001-2021-COLIC-ULIC-CAP.pdf">
        2021-Instrução Normativa Nº 001 COLIC_CAP CONSULTA ÀS CONCESSIONÁRIAS DE SERVIÇOS
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/CHECK-LIST-COMPENSA%C3%87%C3%83O-URBAN%C3%8DSTICA.pdf">
        Check List - Compensação Urbanística
            </Link>
          </div>
        )}
        <ButtonCheck type='button' onClick={() => setFifthStage(!fifthStage)}>
         Instruções Normativas - 2022
        </ButtonCheck>
        {fifthStage && (
          <div className='buttons'>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/08/INSTRUCAO-N-003-2022-ULIC-CAP.pdf'>
          2022-Instrução Normativa Nº 003 ULIC_CAP CÁLCULO DE ÁREAS EM PROJETOS ARQUITETÔNICOS
            </Link>


          </div>
        )}




      </div>

    </Container>
  );
}
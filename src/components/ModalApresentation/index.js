import { useState } from 'react';
import { ButtonCheck, Container, Link } from './style';


export function ModalApresentation() {
  const [firstStage, setFirstStage] = useState(false);
  const [secondStage, setSecondStage] = useState(false);
  const [thirdStage, setThirdStage] = useState(false);
  const [fourthStage, setFourthStage] = useState(false);

  return (
    <Container>
      <div className="box">
        <ButtonCheck type='button' onClick={() => setFirstStage(!firstStage)}>
          Apresentações, Cartilhas e Palestras

        </ButtonCheck>
        {firstStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/Cartilha-COE-Novo.pdf" target="_blank">
        Cartilha 01 – Novo Código de Obras e Edificações do DF – CONCEITOS GERAIS
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/NOVO-COE-CARTILHA-INSTRUCAO.pdf" target="_blank">
        Cartilha 02 – Novo Código de Obras e Edificações do DF – TRANSITORIEDADE
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/09/MANUAL-CONDOMINIOS_R03.pdf" target="_blank">
        Cartilha 03 – Reforma em Regime Condominial
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/MANUAL-REGULARIZA%C3%87%C3%83O-EDIL%C3%8DCIA_R01.pdf" target="_blank">
        Cartilha 04 – Regularização Edilícia
            </Link>

            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/MANUAL-ALVAR%C3%81-7-DIAS_R05.pdf" target="_blank">

        Cartilha 05 – Alvará de Construção para Residências Unifamiliares (casas)
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/07/MANUAL-SOLEIRA-GEOPORTAL.pdf" target="_blank">
        Cartilha 06 – Tutorial de Cota de Soleira
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/MANUAL-PUXADINHO.pdf" target="_blank">
        Cartilha 07 – Licenciamento Comércio Local Sul – “Puxadinho”
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/10/MANUAL-DE-ACESSO-AO-PROCESSO-FINAL-.pdf" target="_blank">
        Cartilha 08 – Localização e Acesso aos Processos Administrativos
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/07/MANUAL-GEOPORTAL.pdf" target="_blank">
        Cartilha 09 – Localização e Acesso às Normas Urbanísticas
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/08/manual-engenho-publicitario.pdf" target="_blank">
        Cartilha 10 – Plano de Publicidade (Engenho Publicitário)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/08/MANUAL-PLANO-OCUPA%C3%87%C3%83O.pdf' target="_blank">
             Cartilha 11 – Plano de Ocupação
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/12/MANUAL-PORTALAGA-COMAER-R02.pdf' target="_blank">
              Cartilha 12 – Consulta OPEA Departamento de Controle de Espaço Aéreo
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/MANUAL-COBERTURA-R01.pdf' target="_blank">
              Cartilha 13 – Obras em Coberturas Coletivas e Individuais
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/MANUAL-REFORMA-INTERNA-R01.pdf' target="_blank">
              Cartilha 14 – Reformas em Unidades Autônomas (apartamentos, salas e lojas comerciais)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2021/04/MANUAL-RESIDENCIA-UNIFAMILIAR-R01.pdf' target="_blank">
              Cartilha 15 – Construção e Reformas de Casas (Residência Unifamiliar)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/03/Cartilha-17.pdf' target="_blank">
              Cartilha 16 – Alvará de Construção Para Residência Unifamiliar de Uso Exclusivo
            </Link>
          </div>
        )}

        <ButtonCheck type='button' onClick={() => setSecondStage(!secondStage)}>
          Manual
        </ButtonCheck>
        {secondStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2019/08/Cartilha-COE-Novo-Estudo-Pr%C3%A9vio.pdf" target="_blank">
        Manual – Novo Código de Obras e Edificações do DF – Estudo Prévio
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/06/MANUAL-PUXADINHO-DEZEMBRO-2020.pdf" target="_blank">
        Manual – Comércio Local Sul – “Puxadinho”
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/wp-content/uploads/2022/06/Manual-de-atribuicao-setorial_ED-01.pdf" target="_blank">
        Manual – Atribuição Setorial            </Link>


          </div>
        )}

        <ButtonCheck type='button' onClick={() => setThirdStage(!thirdStage)}>
          Apresentações
        </ButtonCheck>
        {thirdStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/viabilidade-legal/" target="_blank">
       Apresentação – Viabilidade Legal (1ª Etapa)
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/analise-complementar/" target="_blank">
        Apresentação – Estudo Prévio e Análise Complementar (2a e 3a Etapa)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/conclusao-obra/' target="_blank">
              Apresentação – Licença de Obra e Conclusão de Obra (2a e 3a Fase)
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/Apresenta%C3%A7%C3%A3o-Habite-se-de-Regulariza%C3%A7%C3%A3o.pdf' target="_blank">
              Apresentação – Regularização Edilícia/Habilitação – Artigos 151, 152 e 153
            </Link>
            <Link href='http://www.cap.seduh.df.gov.br/wp-content/uploads/2020/03/Apresentacao-COE-NOVO-Alvar%C3%A1-de-Constru%C3%A7%C3%A3o-em-7-dias.pdf' target="_blank">
              Apresentação – Alvará de Construção – HABITAÇÃO UNIFAMILIAR
            </Link>

          </div>
        )}
        <ButtonCheck type='button' onClick={() => setFourthStage(!fourthStage)}>
          Palestra
        </ButtonCheck>
        {fourthStage && (
          <div className='buttons'>
            <Link href="http://www.cap.seduh.df.gov.br/palestra-cau-curso-de-capacitacao-cap/" target="_blank">
      Palestra CAPacitação – CAU
            </Link>

            <Link href="http://www.cap.seduh.df.gov.br/palestra-cbmdf-curso-de-capacitacao-cap" target="_blank">
        Palestra CAPacitação – CBMDF
            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/palestra-luos-curso-de-capacitacao-cap-2019" target="_blank">
              Palestra CAPacitação – LUOS

            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/palestra-secretaria-de-educacao-curso-capacitacao/" target="_blank">
              Palestra CAPacitação – Secretaria de Educação

            </Link>
            <Link href="http://www.cap.seduh.df.gov.br/palestra-vigilancia-sanitaria-curso-de-capacitacao/" target="_blank">
              Palestra CAPacitação – Vigilância Sanitária
            </Link>
          </div>
        )}

      </div>

    </Container>
  );
}
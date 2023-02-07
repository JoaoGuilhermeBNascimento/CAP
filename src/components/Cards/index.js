import { Card, Container} from './styles';
import videoLogo from '../../Assets/images/VideosExp.png';
import instruction from '../../Assets/images/instruction.png';
import Codigo from '../../Assets/images/Codigo.png';
import Computer from '../../Assets/images/Computer.png';
import { useState } from 'react';
import { ModalCards } from '../Modal';
import { ModalCode } from '../ModalCode';
import { ModalChecklist } from '../ModalChecklist';
import { ModalDocument } from '../ModalDocument';
import { ModalInstruction } from '../ModalInstruction';
import { ModalReport } from '../ModalReport';
import { ModalApresentation } from '../ModalApresentation';

const buttonClicked = {
  backgroundColor: '#0e4a70',
  color: '#ffffff',
  fontSize: '20px',
  width: '240px',
  transform: 'scale3d(1.1, 1.1, 1.6)'
};




export function Cards() {
  const [activated, setActivated] = useState(false);
  const [modalCode, setModalCode] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [modalDocument, setModalDocument] = useState(false);
  const [modalInstructions, setModalInstructions] = useState(false);
  const [modalReport, setModalReport] = useState(false);
  const [modalApresentation, setModalApresentation] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    console.log(index);
  };





  return (
    <>

      <Container>

        <div className="box">


          <Card
            type='button'
            onClick={() => {
              setActivated(!activated);
              handleButtonClick(1);
            }}
            style={selectedButton  === 1 && activated ? buttonClicked : {}}
          >
            <img src={videoLogo} alt="logo de vídeos" />
            <h3>Vídeos explicativos</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>


          <Card

            type='button'
            onClick={() => {
              setModalCode(!modalCode);
              handleButtonClick(2);

            }}
            style={selectedButton  === 2 && modalCode ? buttonClicked : {}}


          >
            <img src={instruction} alt="logo de vídeos" />
            <h3>Códigos de obras e Decretos</h3>
            <span>Código antigo e Código novo e seus anexos</span>
          </Card>



          <Card


            onClick={() => {
              setModalCheck(!modalCheck);
              handleButtonClick(3);

            }}
            style={ selectedButton === 3 && modalCheck ? buttonClicked : {}}

          >
            <img src={instruction} alt="logo de vídeos" />
            <h3>CheckList / Tabela de taxas</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>


          <Card


            onClick={() => {
              setModalDocument(!modalDocument);
              handleButtonClick(4);
            }}
            style={selectedButton === 4 && modalDocument  ? buttonClicked : {}}

          >
            <img src={Codigo} alt="logo de vídeos" />
            <h3>Modelo de Documentos</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>

          <Card

            type='button' onClick={() => {
              setModalInstructions(!modalInstructions);
              handleButtonClick(5);

            }}
            style={selectedButton === 5 && modalInstructions  ? buttonClicked : {}}
          >
            <img src={instruction} alt="logo de vídeos" />
            <h3>Instruções Normativas</h3>
            <span>Instruções normativas ULIC / CAP</span>
          </Card>

          <Card

            onClick={() => {
              setModalReport(!modalReport);
              handleButtonClick(6);
            }}
            style={selectedButton === 6 && modalReport  ? buttonClicked : {}}
          >
            <img src={Computer} alt="logo de vídeos" />
            <h3>Relatórios de Produção</h3>
            <span>Relatórios Estratégicos de gestão e de serviços CAP</span>
          </Card>
          <Card
            onClick={() => {
              setModalApresentation(!modalApresentation);
              handleButtonClick(7);
            }}
            style={selectedButton === 7 && modalApresentation  ? buttonClicked : {}}

          >
            <img src={Codigo} alt="logo de vídeos" />
            <h3>Apresentações, Cartilhas e Palestras</h3>
            <span>Informações sobre licenciamento</span>
          </Card>

        </div>




      </Container>
      {activated && selectedButton === 1 && <ModalCards />
      }
      {modalCode && selectedButton === 2 && <ModalCode />}
      {modalCheck && selectedButton === 3 && <ModalChecklist />}
      {modalDocument && selectedButton === 4 && <ModalDocument/>}
      {modalInstructions && selectedButton === 5 && <ModalInstruction />}
      {modalReport && selectedButton === 6 && <ModalReport />}
      {modalApresentation && selectedButton === 7 && <ModalApresentation />}
    </>
  );
}
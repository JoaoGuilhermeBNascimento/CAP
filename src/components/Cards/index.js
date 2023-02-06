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

const buttonClicked = {
  backgroundColor: '#0e4a70',
  color: '#f5f5f5',
  fontSize: '20px',
  width: '240px',
  transform: 'scale3d(1.1, 1.1, 1.6)'
};



export function Cards() {
  const [activated, setActivated] = useState(false);
  const [modalCode, setModalCode] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [modalDocument, setModalDocument] = useState(false);







  return (
    <>

      <Container>

        <div className="box">



          <Card
            type='button'
            onClick={() => setActivated(!activated)}
            style={activated ? buttonClicked : {}}
          >
            <img src={videoLogo} alt="logo de vídeos" />
            <h3>Vídeos explicativos</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>


          <Card
            type='button'
            onClick={() => setModalCode(!modalCode)}
            style={modalCode ? buttonClicked : {}}


          >
            <img src={instruction} alt="logo de vídeos" />
            <h3>Códigos de obras e Decretos</h3>
            <span>Código antigo e Código novo e seus anexos</span>
          </Card>



          <Card onClick={() => setModalCheck(!modalCheck)}
            style={modalCheck ? buttonClicked : {}}

          >
            <img src={instruction} alt="logo de vídeos" />
            <h3>CheckList / Tabela de taxas</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>


          <Card
            onClick={() => setModalDocument(!modalDocument)}
            style={modalDocument ? buttonClicked : {}}

          >
            <img src={Codigo} alt="logo de vídeos" />
            <h3>Modelo de Documentos</h3>
            <span>Vídeos explicativos dos procedimentos do CAPWEB</span>
          </Card>
          
          <Card href='#' target='_blank'>
            <img src={instruction} alt="logo de vídeos" />
            <h3>Instruções Normativas</h3>
            <span>Instruções normativas ULIC / CAP</span>
          </Card>
          <Card href='#' target='_blank'>
            <img src={Computer} alt="logo de vídeos" />
            <h3>Relatórios de Produção</h3>
            <span>Relatórios Estratégicos de gestão e de serviços CAP</span>
          </Card>

        </div>


      </Container>
      {activated && (<ModalCards />
      )}
      {modalCode && (<ModalCode />)}
      {modalCheck && (<ModalChecklist />)}
      {modalDocument && <ModalDocument/>}
    </>
  );
}
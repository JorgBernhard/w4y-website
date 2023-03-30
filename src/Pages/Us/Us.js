import Acera from '../../images/clientes/acera.png';
import Bmg from '../../images/clientes/bmg.png';
import Dewi from '../../images/clientes/dewi.png';
import Epe from '../../images/clientes/epe.png';
import Fuhrlaender from '../../images/clientes/fuhrlaender.png';
import Kfw from '../../images/clientes/kfw.png';
import Natural from '../../images/clientes/natural power.png';
import Siah from '../../images/clientes/Siah.png';
import Siemens from '../../images/clientes/Simens.png';
import Vestas from '../../images/clientes/vestas.png';
import Windex from '../../images/clientes/windex.png';

import Ceo from '../../images/Eu.png';
import './us.css';

function Us() {
  return (
    <div id="us">
    <div className="Us">
      <div className='UsContainer'>
            <h1 className='UsText'>Us W4Y Design</h1>
            <h1 className='UsTextGeral'>Since 1996 are we creating, envolving, growing with 
            our clients true the ups and downs of the digital market all over the world.
            Our CEO started creating weg design in 1992, teaching the first steps of Photoshop, 
            Dream Weaver, creating Flash components to serve others. <br></br>This company was 
            started in 2020 is finding a way to help, building exceptional web design pages, 
            Logos, Businesscards, Banners, Slide-shows and company-documents.</h1>
          <div className='UsContainerCenter'>
              <img className='Ceo' src={Ceo} alt="Ceo" />
              <h1 className='UsCeoGeral'>CEO da W4Y Design, Jörg Bernhard Reske, with over 
              20 years of experience, Bachelor degree in Administration, Tecnical Degree 
              in international transport, Design by CPD, Programmer degree Fullstack 
              (JavaScript, NodeJs, ReactJs, Html and Css) Cubos Academy, organizes and directs 
              all our needs to the best wellness of all.</h1>
          </div>
          <div className="UsBoden">
              <h1 className='UsBodenText'>Some Clients.</h1>
             <div className='UsBodenImages'>
              <img className='UsClients' src={Acera} alt="acera" />
              <img className='UsClients' src={Bmg} alt="bmg" />
              <img  className='UsClients' src={Dewi} alt="Dewi" />
              <img  className='UsClients' src={Epe} alt="Epe" />
              <img  className='UsClients' src={Fuhrlaender} alt="Fuhrlaender" />
              <img  className='UsClients' src={Kfw} alt="Kfw" />
             </div>
             <div className='UsBodenImagesII'>
              <img  className='UsClients' src={Natural} alt="natural" />
              <img  className='UsClients' src={Siah} alt="Siah" />
              <img  className='UsClients' src={Siemens} alt="Siemens" />
              <img  className='UsClients' src={Vestas} alt="Vestas" />
              <img  className='UsClients' src={Windex} alt="Windex" />
              </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Us;

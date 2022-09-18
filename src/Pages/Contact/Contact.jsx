import './style-contact.css';

import Github from '../../assets/contact/github.svg';
import Linked from '../../assets/contact/linkedin.svg';

import Mapa from '../../assets/contact/Map-Natal.png';

function Contact() {
  return (
    <div id='contact'>
        <div className="Page-contact">
          <div className="Container-contact">
          <h3 className="Contact">Contact</h3>
          <div className="Contato">
            <p className="Info">
              Jörg Bernhard Reske<br></br><br></br>
              Handy: +55(84) 99968-5830<br></br><br></br>
              Rua Lagoa Nova, 124, Bloco B 402<br></br><br></br>
              Cep: 59152-655<br></br><br></br>
              Nova Parnamirim - RN - Brasil<br></br><br></br>

              Email: jorg.reske@gmail.com<br></br><br></br>
              <div className="logos">
                      <div className="Git">
                          <a className="github" target="_blank" rel="noreferrer" href="https://github.com/JorgBernhard" alt="git"> <img src={Github} alt="git" /></a><br></br>
                      </div>
                      <div className="Link"> 
                          <a className="linked" target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/jorg-reske-b327699b/"} alt="linked"> <img src={Linked} alt="linked" /></a>
                      </div>
                  </div>
            </p>
            </div>
            <img className="Mapa" src={Mapa} alt="mapa"></img>
          </div>
        </div>
    </div>
  );
}

export default Contact;

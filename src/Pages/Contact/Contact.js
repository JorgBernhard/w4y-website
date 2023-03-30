import Jorg from '../../images/Jorg.png';
import './contact.css';

function Contact() {
  return (
    <div id="contact">
    <div className="Contact">
      <div className='ContactContainer'>
        <h1 className='ContatHeader'>How to contact us.</h1>
        <h1 className='ContatText'>First let me sai, thank you for your interest in our company.
        It will be a pleasure to answer any question you have. We work 100% digital online.<br></br><br></br> Emails 
        will be aswered in 24 hours and returned.<br></br>
        Please let us know if we can do anything for you or your company.<br></br><br></br>
        Above you can send us email, or if you like get in contact with us true WhatsApp 
        messanger.</h1>
      <div className='ContactCenter'>
       <img className='Jorg'src={Jorg} alt="jorg" />
       <div className='ContactLinks'>
        <a className="Email" href='mailto:W4YSOLUTIONS@gmail.com'>Email</a>  
        <a className="Whats" target="_blank" rel="noreferrer" href={"https://api.whatsapp.com/send/?phone=5584999685830&text&type=phone_number&app_absent=0"} alt="Whatsapp">Whats</a> 
       </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

import './style-main.css';
import Creating from '../../assets/Condo01.png';

function Main() {
  return (
    <div id='main'>
    <div className="Page">
      <div className="Container-main">
          <img className="Creating" src={Creating} alt="creating" />
          <div className="Text">
            <h2 className="Top">Wellcome to w4y....</h2>
            <p className="Texto">We design,<br></br> we make art, <br></br>we create magic. <br></br><br></br>
            Please let us know what you need.
            Lets talk about your ideas, how can we help you?<br></br><br></br>  Our process is quit simple!<br></br> <br></br>w4y starts gathering all information you can give us to understand exactly what you need,
            with your data we beginn to make tha layouts for the project, aproven we start putting it to picture, Layouts are designed, wireframes 
            created. <br></br><br></br>Our team will show you all the work, if you agree we take the next step and create the app. Changes can still be made.
            Later on you will receive your working design. <br></br><br></br>Enjoy the beauty of your work. </p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Main;

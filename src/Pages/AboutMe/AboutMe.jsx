import './style-aboutme.css';
import Jorg from '../../assets/Jorg.png';

function AboutMe() {
  return (
    <div id='aboutme'>
        <div className="Page-design">
          <div className="Container-aboutme">
            <div className="Text-me">
            <h2 className="Header">Me, <br></br><br></br>Adminstrator, Logistic Specialist, Designer and Programmer</h2>
            <p className="Texto-me">
              In 1989 I stydied Administration and Logistics. <br></br><br></br>
              In 1993 I learnd Web-design and in sequence gave classes in Photoshop and Corel Draw.<br></br>
              Since 1996 creating web-pages, logos, art-design, banners etc.<br></br><br></br> In 2000 I started 
              to build several Server's for hotel bussinesses and configured, installed and trained teams. <br></br>
              2021 studied Java Script, Vanilla, React, and serveral libary's.<br></br>
              Updating my knowledge in 2022 I cursed UX/UI pela google.
            </p>
            <h2 className="Hobbys">My Hobbys,</h2>
            <p className="Texto-Hobbys">
              I'm a family person, have a beautiful daugther and cultivate the relationship. <br></br><br></br>
            Cooking is my primary hobby. Started with 5 years of age learning from my dad, later on did some time
            as a salad chef. In chicago substituted a friend for some time as chef in a Italian Restaurant.
            Some say, I have two right hands for it ....... <br></br><br></br>
            For me its relaxing and very enjoy full.
          
            </p>
            <p className="Final">
              Some time ago I started w4y to help create and build beautiful things.<br></br>
              Tell me what can I do for you?
            </p>
            </div>
            <img className="Jorg" src={Jorg} alt="jorg" />
             
          </div>
        </div>
    </div>
  );
}

export default AboutMe;

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './style-design.css';

import MuayThai from '../../assets/design/MuayThai.png';
import Condo from '../../assets/design/Condo.png';
import Xiaomi from '../../assets/design/Xiaomi.png';
import Acera from '../../assets/design/Acera.png';
import Menu from '../../assets/design/Menu.png';
import Security from '../../assets/design/Security.png';

function Design() {
  return (
    <div id='design'>
        <div className="Page-design">
          <div className="Container-design">
             <h3 className="Design">Design</h3>
             <Swiper
                slidesPerView={window.screen.width < 800 ? 1 : 3}
                spaceBetween={20}
                slidesPerGroup={window.screen.width < 800 ? 1 : 3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={window.screen.width < 800 ? false : true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
               
                <SwiperSlide>
                    <div className="img-box">
                    <img src={MuayThai} alt="Foto" />
                    </div>
                    <h3>Projeto de Muay Thai</h3>
                    <p>
                        Porject Muay Thai, about the sport, story and philosophy. 
                    </p>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        <img src={Xiaomi} alt="Foto" />
                    </div>
                    <h3>Xiaomi Web- Page Design</h3>
                    <p>
                      Web Page Design, 100% responsive and easy to see in a handy.
                    </p>

                 </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Condo} alt="Foto" />
                    </div>
                    <h3>Project Condo</h3>
                    <p>
                        Realestate company in germany, project of a Api to analise houses and apartments of quality and value.
                    </p>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Acera} alt="Foto" />
                    </div>
                    <h3>Project Acera</h3>
                    <p>
                        Acera, criation of the Company sign, all marketing documents and all Acera Presentations.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Security} alt="Foto" />
                    </div>
                    <h3>Project Web Page Home Security</h3>
                    <p>
                        Creation of a web page design for a Home Security Company </p>

                </SwiperSlide>
                 <SwiperSlide>
                    <div className="img-box">
                    <img src={Menu} alt="Foto" />
                    </div>
                    <h3>Project of Digital Menu</h3>
                    <p>
                        Creation of a digital Menu for a restaurant, responsive, works in all Handy's or Tablet's.</p>

                </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </div>
  );
}

export default Design;

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import WinterForestImage_1 from "../Assets/pexels-photo-1.jpeg";
import WinterForestImage_2 from "../Assets/pexels-photo-2.jpeg";
import WinterForestImage_3 from "../Assets/pexels-photo-3.jpeg";
import WinterForestImage_4 from "../Assets/pexels-photo-4.jpeg";

const CarouselBox = () => {
   return (
      <>
         <Carousel>
            <Carousel.Item>
               <img className="d-block w-100" src={WinterForestImage_1} alt="winter_forest" />
               <Carousel.Caption>
                  <h3>Forest image 1</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore porro minus deleniti iste veniam, sit ad excepturi voluptate adipisci enim?
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" src={WinterForestImage_2} alt="winter_forest" />
               <Carousel.Caption>
                  <h3>Forest image 2</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore porro minus deleniti iste veniam, sit ad excepturi voluptate adipisci enim?
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" src={WinterForestImage_3} alt="winter_forest" />
               <Carousel.Caption>
                  <h3>Forest image 3</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore porro minus deleniti iste veniam, sit ad excepturi voluptate adipisci enim?
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img className="d-block w-100" src={WinterForestImage_4} alt="winter_forest" />
               <Carousel.Caption>
                  <h3>Forest image 3</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore porro minus deleniti iste veniam, sit ad excepturi voluptate adipisci enim?
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>;
      </>
   );
};

export default CarouselBox;

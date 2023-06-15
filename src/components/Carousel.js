import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomePage.css';


function App() {
  return (
    <Carousel className="carousel-container">
      <div>
        <img src="https://images.pexels.com/photos/325690/pexels-photo-325690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg" alt="Image 1"/>
        <p></p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2th-to-image-2.jpg" alt="Image 2"/>
        <p></p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/69096/pexels-photo-69096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 3"/>
        <p></p>
      </div>
    </Carousel>
  );
}

export default App;
  
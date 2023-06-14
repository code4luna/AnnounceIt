import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <Carousel>
        <h1>Welcome to Announce IT!</h1>
            <p>
                Your one-stop platform to create personalized announcements for every special occasion. Be it graduation, new job, pregnancy or a simple celebration, we've got you covered. Craft your unique announcement and share your joy with the world.
            </p>
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

import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

import graduationImage from '../images/graduation.jpg';
import pregnancyImage from '../images/pregnancy.jpg';
import newJobImage from '../images/new-job.jpg';
import engagementImage from '../images/engagement.jpg';
import birthdayImage from '../images/birthday.jpg';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Announce It!</h1>
        <p>Share your special moments with the world.</p>
      </header>
      <div className="event-section">
        <div className="event-card">
          <h2>Graduation</h2>
          <p>Announce your graduation and celebrate your achievements.</p>
          <img src={graduationImage} alt="Graduation" />
        </div>
        <div className="event-card">
          <h2>Pregnancy</h2>
          <p>Share the exciting news of expecting a new member of the family.</p>
          <img src={pregnancyImage} alt="Pregnancy" />
        </div>
        <div className="event-card">
          <h2>New Job</h2>
          <p>Let the world know about your career milestone or purchase an announcement to celebrate a love one's accomplishment.</p>
          <img src={newJobImage} alt="New Job" />
        </div>
        <div className="event-card">
          <h2>Engagement</h2>
          <p>Announce your engagement and share your love story.</p>
          <img src={engagementImage} alt="Engagement" />
        </div>
        <div className="event-card">
          <h2>Birthday</h2>
          <p>Celebrate your birthday and invite others to join in the festivities.</p>
          <img src={birthdayImage} alt="Birthday" />
        </div>
      </div>
      <div className="create-announcement-button-container">
        <Link to="/create">
          <button className="create-announcement-button">Create Announcement</button>
        </Link>
      </div>
      {/* Add more sections for other services */}
    </div>
  );
};

export default Homepage;

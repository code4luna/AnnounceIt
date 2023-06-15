import React from 'react';
import './PricingPage.css'; // Assuming you have a separate CSS file for the pricing page

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing</h1>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h2>Basic</h2>
          <p className="price">$9.99/month</p>
          <ul>
            <li>Announce Graduation</li>
            <li>Share Pregnancy News</li>
            <li>Post New Job Announcement</li>
          </ul>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="pricing-plan">
          <h2>Pro</h2>
          <p className="price">$19.99/month</p>
          <ul>
            <li>Everything in Basic</li>
            <li>Engagement Announcements</li>
            <li>Birthday Celebrations</li>
            <li>Priority Support</li>
          </ul>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="pricing-plan">
          <h2>Premium</h2>
          <p className="price">$29.99/month</p>
          <ul>
            <li>Everything in Pro</li>
            <li>Unlimited Announcements</li>
            <li>Custom Design Templates</li>
            <li>24/7 Customer Support</li>
          </ul>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

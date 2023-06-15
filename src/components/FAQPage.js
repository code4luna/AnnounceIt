import React from 'react';
import './HomePage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        <h2>General</h2>
        <div className="faq-item">
          <h3>How do I create an announcement?</h3>
          <p>
            To create an announcement, click on the "Create Announcement" button on the homepage. Fill in the necessary details, such as the type of announcement, title, description, and any accompanying media. Once you're done, click on the "Submit" button to publish your announcement.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I edit or delete an announcement?</h3>
          <p>
            Yes, you can edit or delete an announcement. Go to your profile page and find the announcement you want to modify. Click on the "Edit" button to update the details or the "Delete" button to remove the announcement permanently.
          </p>
        </div>
      </div>
      <div className="faq-section">
        <h2>Privacy</h2>
        <div className="faq-item">
          <h3>Are my announcements visible to everyone?</h3>
          <p>
            By default, your announcements are visible to the public. However, you have the option to set the privacy level for each announcement. During the creation process, you can choose to make the announcement public or restrict its visibility to specific individuals by selecting appropriate privacy settings.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is my personal information secure?</h3>
          <p>
            We take privacy and data security seriously. Your personal information is stored securely and is not shared with third parties without your consent. We employ industry-standard security measures to protect your data and ensure its confidentiality.
          </p>
        </div>
      </div>
      {/* Add more sections and FAQ items */}
    </div>
  );
};

export default FAQPage;

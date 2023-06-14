import React, { useState } from 'react';

function FAQPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // add more questions and answers here
  ];

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i}>
          <h2 onClick={() => setSelectedQuestion(i)}>
            {faq.question}
          </h2>
          {selectedQuestion === i && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQPage;

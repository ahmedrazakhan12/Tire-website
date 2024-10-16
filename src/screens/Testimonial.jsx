import React from 'react';

const testimonials = [
  {
    name: 'John D.',
    feedback:
      "I've been bringing my car to Tire Aligners for over three years now for regular maintenance and the occasional repair. Each visit is as good as the first. Professional, straightforward, and honest service every time."
  },
  {
    name: 'Emily R.',
    feedback:
      "Fantastic service and attention to detail. The team at Tire Aligners went above and beyond when my SUV needed a major brake job. They explained everything and finished the job ahead of schedule. Highly recommend!"
  },
  {
    name: 'Michael S.',
    feedback:
      "Every time I visit Tire Aligners, I am greeted with friendly faces and excellent service. They are my go-to for oil changes and tire rotations. Quick and efficient!"
  },
  {
    name: 'Sarah L.',
    feedback:
      "I was really impressed with the quality of customer service at Tire Aligners. They took the time to explain what was wrong with my muffler and fixed it the same day. Their transparency and efficiency are unmatched."
  },
  {
    name: 'Kevin T.',
    feedback:
      "I can't praise Tire Aligners enough for their professionalism and expertise. They aligned my car perfectly and it drives like a dream now. It’s refreshing to deal with such knowledgeable and courteous staff."
  },
  {
    name: 'Laura B.',
    feedback:
      "After a not-so-great experience elsewhere, I tried Tire Aligners on a friend's recommendation. Best decision ever! They fixed my suspension and provided excellent customer service throughout the process."
  },
  {
    name: 'Alex G.',
    feedback:
      "Great location, great service, and even better people. Tire Aligners have never let me down and I appreciate their commitment to providing top-notch automotive care."
  },
  {
    name: 'Jessica P.',
    feedback:
      "Tire Aligners helped me choose the best tires for my car and had them installed quickly. The new tires are fantastic and the service was very affordable. I felt well taken care of."
  },
  {
    name: 'Brian W.',
    feedback:
      "The team at Tire Aligners is very professional and efficient. I always appreciate their honest advice and the clear way they explain service options. Their integrity is what keeps me coming back."
  },
  {
    name: 'Naomi K.',
    feedback:
      "I had an emergency with my car's brakes and Tire Aligners handled it immediately. I am so grateful for their responsiveness and excellent work. They really saved the day!"
  }
];

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Testimonials - Tire Aligners</h2>
      <p className="text-center mb-5">
        We pride ourselves on delivering excellent automotive services and the satisfaction of our customers is our top priority. Here are some testimonials from our happy clients:
      </p>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card testimonial-card">
              <div className="card-body">
                <p className="card-text">"{testimonial.feedback}"</p>
                <h5 className="card-title">- {testimonial.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <h5>We thank our customers for their trust and loyalty.</h5>
        <p>Your satisfaction drives our commitment to excellence.</p>
        <p>Visit us and experience the Tire Aligners difference for yourself!</p>
        <a
          href="https://www.google.com/maps/place/Tire+Aligners" 
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More Reviews
        </a>
      </div>
    </div>
  );
};

export default Testimonials;

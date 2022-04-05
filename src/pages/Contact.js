import React from 'react';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Ramsey Cervantes via email @ rcervant@ucsd.edu"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">Contact</h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
        <p>or connect with me on my professional accounts!</p>
        <ContactIcons />
      </div>
    </article>
  </Main>
);

export default Contact;

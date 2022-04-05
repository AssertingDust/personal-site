import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ramsey Cervantes' personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">In need of a Data Scientist?</h2>

        </div>
      </header>
      <p> I am a data scientist and programmer who&apos;s interdisciplinary background
        has given me a versitile skillset. I am versed in multiple programming environments
        (e.g., Java, Python, R, Stata). Please feel free to read more {' '}
        <Link to="/about">about me</Link>, or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Read More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;

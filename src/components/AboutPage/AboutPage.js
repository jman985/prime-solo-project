import React from 'react';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div style={{ textAlign: 'center'}}>
    <h1 style={{ textAlign: 'center', marginTop: '150px', marginBottom:'30px', fontSize:'70px'}}>Acknowledgements</h1>
    <div>
      <p >
      Special thanks to Prime Academy, Paxos Instructors, and the entire Paxos Cohort.  Thank 
      you to all Prime Academy students, staff, and alumni.
  </p>
    </div>
  <h1 style={{ textAlign: 'center', marginTop: '100px', marginBottom:'100px', fontSize:'70px'}}>BIRD UP!</h1>
    <div>

    <p>
    Disclaimer:  This project is strictly for INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
          Please note that installing Apple software on non-Apple hardware, while not illegal, 
        violates the <Link to= "https://www.apple.com/legal/sla/ ">APPLE INC. SOFTWARE LICENSE AGREEMENT</Link> </p>
    </div>
  </div>
);

export default AboutPage;
import React from 'react';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div style={{ textAlign: 'center'}}>
     <h1 style={{ textAlign: 'center', marginTop: '150px', marginBottom:'30px', fontSize:'70px', fontFamily: 'apple'}}>
      About</h1>
      <div style={{marginLeft: '300px',marginRight: '300px'}}>
      <p>HACKINTOSH BUILDER is a personal computer components selector consisting solely of macOS-compatible computer components.  
        The intent of this project is to allow the user to create their own custom, macOS-compatible computer a.k.a a “Hackintosh” capable of 
        installing and running macOS just like a real Apple computer and save it to their user account.</p>
        </div>
    <h1 style={{ textAlign: 'center', marginTop: '150px', marginBottom:'30px', fontSize:'70px', fontFamily: 'apple'}}>
      Acknowledgements</h1>
    <div>
      <p >
      Special thanks to Prime Academy, Paxos Instructors, and the entire Paxos Cohort.
  </p>
    </div>

    <div>
      <img src="https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Femoji.slack-edge.com%2FT4402UEHM%2Fpaxosparakeet%2F3debf97a53f0f9a0.png"/>
    </div>
    <br></br>

    <div>
      <p>Thanks to all Prime Academy students, staff, and alumni.</p>


      <p style= {{marginTop: '400px'}}>
          DISCLAIMER:  This project is strictly for INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.
          Please note that installing Apple software on non-Apple hardware, while not illegal, 
          violates the <Link to= "https://www.apple.com/legal/sla/ ">APPLE INC. SOFTWARE LICENSE AGREEMENT</Link>.
      </p>
    </div>
  </div>
);

export default AboutPage;
import React from 'react';
import '../Components/Home.css';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className='body1'>
        <img src="https://cdn0.iconfinder.com/data/icons/seo-and-web-1-2/66/35-512.png" alt="online advertising icon"
          align="right" width="250" height="230"/>
        <h3><b>About Us</b></h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam mattis sapien sollicitudin libero scelerisque facilisis.
            Proin tempus volutpat neque eu maximus. Sed ac nunc massa. 
            Aenean consectetur urna sit amet dolor venenatis, sed vehicula augue pharetra.
            Nunc odio enim, auctor sit amet suscipit dapibus, malesuada et libero.
            Mauris auctor, mi at faucibus venenatis, ligula purus euismod nisl, 
            nec venenatis nulla ipsum vel nisi.</p>
      </div>
      <div className='body2'>
        <h3><b> Online advertising made easier</b></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam mattis sapien sollicitudin libero scelerisque facilisis.
            Proin tempus volutpat neque eu maximus. Sed ac nunc massa. 
            Aenean consectetur urna sit amet dolor venenatis, sed vehicula augue pharetra.
            Nunc odio enim, auctor sit amet suscipit dapibus, malesuada et libero.
            Mauris auctor, mi at faucibus venenatis, ligula purus euismod nisl, 
            nec venenatis nulla ipsum vel nisi.</p>
      </div>
      <br/>
      <ContactUs/>
    </div>
  );
}

const ContactUs = () =>{
  return(
  <div className="contactInfo">
    <span className="contactTitle"><h3>Contact Us</h3></span>
    <div className="contactForm">
     <p> Contact us and we will respond within 24 hours.</p>
      <p><input type="text" placeholder="Email"/></p>
      <p><textarea row="40" cols="30" placeholder="Message"/></p>
      <button>Submit</button>
    </div>
  </div>
  );
}



export default Home;

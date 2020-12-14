import React from 'react';
import ContactUs from '../Components/ContactUs';
import icon1 from './Icons/icon1.png';
import icon2 from './Icons/icon2.png';
import icon3 from './Icons/icon3.png';


function Home() {
  return (
    <div>
      
      
      <div className='showcase'>
        <div><img src="https://cdn0.iconfinder.com/data/icons/seo-and-web-1-2/66/35-512.png" alt="online advertising icon"
          align="center" width="250" height="230"/></div>
        
        <h3><b><span class="highlight">Online Listings</span> made easy!</b></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam mattis sapien sollicitudin libero scelerisque facilisis.
            Proin tempus volutpat neque eu maximus. Sed ac nunc massa. 
            Aenean consectetur urna sit amet dolor venenatis, sed vehicula augue pharetra.
            Nunc odio enim, auctor sit amet suscipit dapibus, malesuada et libero.
            Mauris auctor, mi at faucibus venenatis, ligula purus euismod nisl, 
            nec venenatis nulla ipsum vel nisi.</p>
      </div>


      <div className='showcase'>
      <h3><b>About Us</b></h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam mattis sapien sollicitudin libero scelerisque facilisis.
            Proin tempus volutpat neque eu maximus. Sed ac nunc massa. 
            Aenean consectetur urna sit amet dolor venenatis, sed vehicula augue pharetra.
            Nunc odio enim, auctor sit amet suscipit dapibus, malesuada et libero.
            Mauris auctor, mi at faucibus venenatis, ligula purus euismod nisl, 
            nec venenatis nulla ipsum vel nisi.</p>
      </div>

      <section id="boxes">
      <div classname="container">
        <div class="box showcase">
        {<img src={icon1} alt=""/>}
          <h3 classname="highlight">Quick Listing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div classname="box showcase">
        {<img src={icon2} alt=""/>}
          <h3 classname="highlight">Streamlined Viewing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div classname="box showcase">
          {<img src={icon3} alt=""/>}
          <h3 classname="highlight">Quick Connections</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>

      <br/>
      <ContactUs/>
    </div>
  );
}





export default Home;

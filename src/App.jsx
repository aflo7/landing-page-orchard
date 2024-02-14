import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundDown } from 'react-icons/io';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        {/* <div>orchard</div> */}
        <img
          src="https://growatorchard.com/wp-content/uploads/2021/02/cropped-Orchard_General_2-2021_rgb.png"
          className="orchard-logo"
        />
        <RxHamburgerMenu className="burger" />
        <div className="orchard-logo-wrapper">
          <p>Mock</p>
          <p>Mock</p>
          <p>Mock</p>
          <p>Mock</p>

          <img
            src="https://growatorchard.com/wp-content/uploads/2021/05/Orchard_Senior_2-2021_rgb-1.png"
            className="orange-orchard-logo"
          />
        </div>
      </nav>
      <main>
        <div className="top-main">
          <p className="understanding-text">
            Understanding Customers And Connecting with Them Powerfully For&nbsp;
            <span className='max-growth-text'>Maximum Growth</span>
          </p>
          <div className="lets-connect-wrapper">
            <p className="lets-connect-text">Let&apos;s Connect</p>{' '}
            <IoIosArrowRoundForward className="arrow-forward" />
          </div>
        </div>
        <IoIosArrowRoundDown className="arrow-down" />
      </main>
      <div className="orchard-logo-wrapper-2">
        <img
          src="https://growatorchard.com/wp-content/uploads/2021/11/OrchardLogo_Digital_Marketing.gif"
          className="the-gif"
        />
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MobileMenu from '../MobileMenu/MobileMenu';
import resume from '../../images/msebarjr_resume.pdf';

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const clickHandler = () => {
    window.scrollTo(10, 0);
    setMenuState(false);
  };

  return (
    <header id='header' className='wpo-header-style-1'>
      <div className='wpo-site-header' style={{ padding: '.5rem' }}>
        <nav className='navigation navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-3 col-3 d-lg-none dl-block'>
                <MobileMenu
                  menuActive={menuActive}
                  setMenuState={setMenuState}
                  clickHandler={clickHandler}
                />
              </div>
              <div className='col-lg-8 col-md-1 col-1'>
                <div
                  id='navbar'
                  className='collapse navbar-collapse navigation-holder'
                >
                  <button className='menu-close'>
                    <i className='ti-close'></i>
                  </button>
                  <ul className='nav navbar-nav mb-2 mb-lg-0'>
                    <li>
                      <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='service'
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-7 col-7'>
                <div className='header-right'>
                  <div className='header-btn'>
                    <a
                      className='theme-btn'
                      download='msebarjr_resume'
                      href={resume}
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

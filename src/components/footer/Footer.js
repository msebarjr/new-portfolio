import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../images/logo-transparent.png';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className='wpo-site-footer'>
      <div className='upper-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-4 col-md-6 col-12'>
              <div className='widget about-widget'>
                <div className='logo widget-title'>
                  <Link onClick={ClickHandler} className='site-logo' to='/'>
                    <img src={Logo} alt='Michael Sebar Jr' />
                  </Link>
                </div>
                <p>
                  Need a website or mobile application?
                  <Link
                    onClick={ClickHandler}
                    to='contact'
                    style={{ cursor: 'pointer' }}
                  >
                    <span> CONTACT ME! </span>
                  </Link>
                  I look forward to working with you in the near future.
                </p>
                <div className='social-icons'>
                  <ul>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/msebarjr'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='ti-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/msebarjr'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='ti-github'></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href='mailto:msebarjr@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='ti-email'></i>
                      </a>
                    </li>
                    <li>
                      <a href='tel:5616337757'>
                        <i className='ti-headphone-alt'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col col-lg-2 col-md-6 col-12'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link to='about' spy={true} smooth={true} duration={500}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to='service' spy={true} smooth={true} duration={500}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to='contact' spy={true} smooth={true} duration={500}>
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-6 col-12'>
              <div className='widget link-widget service-link-widget'>
                <div className='widget-title'>
                  <h3>All Services</h3>
                </div>
                <ul>
                  <li>
                    <Link to='service' spy={true} smooth={true} duration={500}>
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to='service' spy={true} smooth={true} duration={500}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to='service' spy={true} smooth={true} duration={500}>
                      Mobile Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col col-lg-3 col-md-6 col-12'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Technologies</h3>
                </div>
                <ul className='footer-tech'>
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Next JS</li>
                  <li>Git</li>
                  <li>Firebase</li>
                  <li>Google</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-shape'>
          <svg width='1319' height='1567' viewBox='0 0 1319 1567' fill='none'>
            <g filter='url(#filter0_f_39_3833)'>
              <circle
                cx='803'
                cy='803'
                r='303'
                fill='#59C378'
                fillOpacity='0.5'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_39_3833'
                x='0'
                y='0'
                width='1606'
                height='1606'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='250'
                  result='effect1_foregroundBlur_39_3832'
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

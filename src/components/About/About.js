import { useWindowSize } from '../../hooks/useWindowSize';
import shape1 from '../../images/about/shape1.png';
import shape2 from '../../images/about/shape2.png';
import Cube3d from '../Cube3d/Cube3d';

const About = (props) => {
  const windowSize = useWindowSize();

  return (
    <div className='wpo-about-area section-padding' id='about'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='wpo-about-exprience-wrap'>
              <div className='wpo-about-exprience'>
                <h2>03</h2>
                <span>Years of Experience</span>
              </div>
              <div className='client'>
                <h3>
                  <span data-count='100'>100</span>%
                </h3>
                <p>Client Satisfactions</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 offset-lg-1 col-md-12 col-sm-12'>
            <div className='wpo-about-content'>
              <div className='wpo-about-title'>
                <h2>My Advantage</h2>
                <p>
                  Building state-of-the-art, easy to use, user-friendly websites
                  and applications is a passion of mine. I deem myself a student
                  of the industry with a constant hunger to find ways to advance
                  my skillset in a rapidly growing industry. My hankering and
                  constant pursuit of knowledge has allowed me to sharpen my
                  learning curve with newer topics.
                </p>
                <p>
                  Individually recognized by upper management for consistent
                  hard work and dedication, my background as a manager has given
                  me the skills to work under pressure while adjusting to the
                  changing dynamics and processes of those environments. This
                  has strengthened my abilities in team building, critical
                  thinking, and a keen attention to detail. I believe this
                  separates me from the rest of the competition as a proven team
                  player.
                </p>
              </div>
            </div>
            <div className='cube-container'>
              {windowSize.width > 1024 && <Cube3d />}
              <div className='tech-wrapper'>
                <h2>Technologies</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next Js</li>
                  <li>Express</li>
                  <li>Firebase</li>
                  <li>Prisma</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>Jest</li>
                  <li>Google</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ab-shape'>
        <svg width='995' height='1495' viewBox='0 0 995 1495' fill='none'>
          <g opacity='0.3' filter='url(#filter0_f_39_4267)'>
            <circle cx='247.5' cy='747.5' r='247.5' fill='#FFE500' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4267'
              x='-500'
              y='0'
              width='1495'
              height='1495'
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
                result='effect1_foregroundBlur_39_4267'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='ab-shape-s2'>
        <svg width='1252' height='1901' viewBox='0 0 1252 1901' fill='none'>
          <g opacity='0.15' filter='url(#filter0_f_39_4265)'>
            <circle cx='950' cy='950.004' r='450' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4265'
              x='-0.00012207'
              y='0.00402832'
              width='1900'
              height='1900'
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
                result='effect1_foregroundBlur_39_4265'
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='line-shape-1'>
        <img src={shape1} alt='' />
      </div>
      <div className='line-shape-2'>
        <img src={shape2} alt='' />
      </div>
    </div>
  );
};

export default About;

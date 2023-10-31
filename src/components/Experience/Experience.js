import freelanceLogo from '../../images/work/freelancer.png';
import tgiFridaysLogo from '../../images/work/tgi-fridays.svg';

import SectionTitle from '../SectionTitle/SectionTitle';

const experiences = [
  {
    date: '2022 - Current',
    logo: freelanceLogo,
    position: 'Full Stack Software Engineer',
    companyName: 'TD Bank',
    workFrom: 'Fort Lauderdale, FL / Remote',
    website: 'https://www.td.com/us/en/personal-banking',
  },
  {
    date: '2019 - 2022',
    logo: freelanceLogo,
    position: 'Freelance Web Developer',
    companyName: 'West Palm Beach, Florida',
    workFrom: 'Remote',
    website: 'https://www.michaelsebarjr.com/',
  },
  {
    date: '2003 - 2021',
    logo: tgiFridaysLogo,
    position: 'Manager',
    companyName: 'TGI Fridays',
    workFrom: 'Boynton Beach, FL / Royal Palm Beach, FL',
    website: 'https://tgifridays.com/',
  },
];

const Experience = (props) => {
  return (
    <div className='wpo-work-area section-padding'>
      <div className='container'>
        <SectionTitle
          Title={'My Work Experience'}
          quote={
            'The way we behave, the way we treat others, the way we respond, the way we support, defines the work experience for everyone around us.'
          }
          caption={'- Laurie Buchanan, PhD -'}
        />
        <div className='wpo-work-wrap'>
          {experiences.map((experience, exp) => (
            <div className='wpo-work-item' key={exp}>
              <ul>
                <li className='date'>{experience.date}</li>
                <li className='logo'>
                  <img src={experience.logo} alt='' style={{ width: '80px' }} />
                </li>
                <li className='position'>
                  {experience.position}{' '}
                  <span>
                    {experience.companyName} <span>{experience.workFrom}</span>
                  </span>
                </li>
                <li className='link'>
                  <a
                    href={experience.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Go to website
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='shape-wk'>
        <svg width='1500' height='1500' viewBox='0 0 1500 1500' fill='none'>
          <g opacity='0.45' filter='url(#filter0_f_39_4214)'>
            <circle cx='750' cy='750' r='200' />
          </g>
          <defs>
            <filter
              id='filter0_f_39_4214'
              x='0'
              y='0'
              width='1500'
              height='1500'
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
                stdDeviation='275'
                result='effect1_foregroundBlur_39_4212'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Experience;

import Photography from '../videos/cbphotographydemo.mp4';
import Testimonial from '../images/cbphotography/testimonial.jpg';
import Contact from '../images/cbphotography/contact.jpg';
import Crypto from '../videos/cryptodemo.mp4';
import CoinInfo from '../images/crypto/coin-info.jpg';
import Portfolio from '../images/crypto/portfolio.jpg';
import Home from '../images/snapchatz/homepage.png';
import Comment from '../images/snapchatz/comment.png';
import SnapChatz from '../videos/SnapChatz.mp4';

const PROJECTS = [
  {
    id: 1,
    title: 'CryptoTracker',
    src: Crypto,
    images: [CoinInfo, Portfolio],
    alt: 'Crypto Tracker',
    tags: ['React', 'Firebase'],
    libraries: [
      'axios',
      'chart.js',
      'dompurify',
      'firebase',
      'react-sparklines',
      'react-toastify',
    ],
    github: 'https://github.com/msebarjr/crypto-tracker-app',
    caseStudy: {
      description:
        'This is an app that monitors the Top 25 Crypto Coins. Users have the ability to sign up and login in through authentication or utilize the Demo Login feature. After logging in successfuly you are greeted with a table containing info on each coin with a search filter. Users can Favorite a coin in order to monitor its market data. Clicking on each coin will present the user with a full fledge description of the coin and market info. Users can access their Portfolio and "purchase" and "sell" each coin in units based on the amount of money they have. This does not actually allow a user to purchase the coin but ionstead add and deletes units in a Firebase Firestore Database.',
      problem:
        'Wanted to create something that was a little bit beyond what I have done before',
      solution:
        'I created this crypto tracker to utilize all my skills within React to create one project. ',
      obstacles:
        'Some of the obstacles faced was impleneting Firestore into my app. More so getting snapshots for selected users and then update components on changes based on the snapshots of each coin purchase as a subcollection.',
      learned:
        'I learned how to overcome the unknown. The ability to read documentation and implement it to work within my app. I learned that patientce goes along way and when you are struggling with a certain task sometimes it is best to step away from the computer for a moment and let your brain refocus. I learned how to Protect Routes and implement a Firestore into an app.',
      website: 'https://cryptotracker.michaelsebarjr.com/',
    },
  },
  {
    id: 2,
    title: 'SnapChatz',
    src: SnapChatz,
    images: [Home, Comment],
    alt: 'CB Photography',
    tags: ['React', 'Sanity'],
    libraries: ['sanity.io', 'tailwind css', 'google login'],
    github: 'https://github.com/msebarjr/SnapChatz',
    caseStudy: {
      description:
        'This is a Social Media Image sharing app. Users have the ability to login via Google or as a guest. Upon loggin in, users have the ability to search through images, like/unlike images, download images, and create a post. Every user has the ability to upload and share images. Additionally, users can view other profiles and comment on any image. ',
      problem:
        'I wanted to create a project that gave me the ability to showcase my knowledge while forcing me to utilize a language that I have not used in the past (Sanity IO and Tailwind CSS).',
      solution:
        'I created SnapChatz, which allowed me to get familiar with using Sanity as a backend for data.',
      obstacles:
        'The biggest obstacle I had to face was understanding the schema and how Sanity would incorporate into code. I was forced to dig through layers of documentation in order to utilize Sanity correctly within CRUD.',
      learned:
        "What I was able to take away from this project was that learning does not always come easy. But if you are patient and steadfast, you are able to accomplish and create something you didn't think was possible. On a side note, in addition to Sanity, I learned how to use Tailwind CSS. This was something that came a lot easier to me.",
      website: 'https://snapchatz.michaelsebarjr.com/',
    },
  },
  {
    id: 3,
    title: 'Photography Website',
    src: Photography,
    images: [Testimonial, Contact],
    alt: 'CB Photography',
    tags: ['Next JS'],
    libraries: ['fslightbox-react', 'react-elastic-carousel', 'react-icons'],
    github: 'https://github.com/msebarjr/CB-Photography',
    caseStudy: {
      description:
        'This is a website that I created for a photography client of mine. This client wanted a minimial website that presented his work to his clients directly. Within this website I was able to implement a random photo from his portfolio to display on the homescreen for the Portfolio and Testimonial section upon loading and refreshing the page.',
      problem:
        'Client needed a way to convert instagram views into clients. He wanted to stand out more as a professional by having a website to help drive traffic to his business.',
      solution:
        'I created a portfolio website for him allowing potential clients to get a better feel for who he is as a photographer. Photos on Instagram does not allow a potential client to get a complete feel for who you are as a business like a website does. By creating this portfolio, clients can now easily view his work and send him emails through a contact form on the site.',
      obstacles:
        'Implementing a responsive photo grid with animations on the homescreen started off as an obstacle. This was due to the nature of trying to resize the images accordingly for a responsive design. Trying to implement a carousel for the first time was a little bit of a task at first.',
      learned:
        'The most important and most valuable thing I have learned was the ability to listen to my client and convey what they invision. At the end of the day I am here to represent the client and all their visions. In addition, I learned how to randomize photos on the Home Screen of the website, so every time a client views the page the images in certain sections are different. I learned how to implement a carousel slider and attach testimonals to an image on hover effect.',
      website: 'https://www.mycbphotos.com/',
    },
  },
];

export default PROJECTS;

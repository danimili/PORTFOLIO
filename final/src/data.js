import web1 from './images/first-project.png'
import web2 from './images/falcon.png';
import web3 from './images/pet-adoption.png';
import web4 from './images/weather.png';
import web5 from './images/books.png';
import web6 from './images/stock-exchange.png';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#projects', text: 'projects'},
];

export const socialLinks = [
  { id: 1, href: 'https://www.linkedin.com/in/daniela-milieris-007438203/', icon: 'fab fa-linkedin' },
  { id: 2, href: 'https://github.com/danimili', icon: 'fab fa-github' },
];

export const services = [
  {
    id: 1,
    image: web1,
    title: 'My First Project',
    info: `This is my first project, creating a website from scratch. It was a simple website that showcased my personal portfolio and resume before starting the Full Stack Development course at ITC. It was a great learning experience for me as I had to learn by myself HTML, CSS, and some basic JavaScript to create it. This project helped me to understand the basics of web development and inspired me to continue learning.`,
    link: 'https://first-project-dani.netlify.app/',
  },
  {
    id: 2,
    image: web2,
    title: 'Falcon Security',
    info: `Falcon Security is a cyber security company that provides a wide range of services to protect its clients from cyber threats. The inspiration for this website comes from my partner, who is passionate about the cyber world and suggested me bulding a real cyber company site.`,
    link: 'https://falcon-security.netlify.app/',
  },
  {
    id: 3,
    image: web3,
    title: 'Pet Adoption',
    info: `Pet Adoption is my first full stack project and represented the last project of the course. The website is designed to be user-friendly, allowing users to easily view all available pets and choose whether to adopt, foster, or return a pet. The login feature ensures that only authorized users can access the site's features, ensuring security for both pets and users.`,
    link: 'https://pet-adoption-front-ivory.vercel.app/', 
  },
  {
    id: 4,
    image: web4,
    title: 'Weather App',
    info: `The Weather app is a straightforward and easy-to-use application that provides real-time weather information for any location of your choice. The app fetches real data from openweathermap to ensure that the information provided is accurate and up-to-date. The app's interface is simple and clear, making it easy for users to view the weather conditions, including temperature, humidity, wind speed, and more.`,
    link: 'https://weather-dani-app.netlify.app/',    
  },
  {
    id: 5,
    image: web5,
    title: 'Top Books',
    info: `Top Books is a nice react website that provides an overview of my top 12 favorite books. The site is designed to be user-friendly and easy with clear descriptions of each book and a link to buy the book. `,
    link: 'https://daniss-books.netlify.app/',
  },
  {
    id: 6,
    image: web6,
    title: 'Stock Exchange',
    info: `The Stock Exchange project is an impressive JavaScript-based application that provides users with access to real-time stock price data, company information, and a stock price history. The app allows users to search for companies and view their stock prices and industry information. Additionally, the app provides a link to the company's website, making it easy for users to learn more about the company. The real-time stock price history feature is particularly useful, as it allows users to track changes in stock prices over time.`,
    link: 'https://stock-exchange-danimili.netlify.app/',
  },
];
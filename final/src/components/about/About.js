import Title from '../title/Title';
import aboutImg from '../../images/about.jpg'

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='me' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='about' />
        </div>
        <article className='about-info'>
          <h3>Software Developer and Full Stack Developer</h3>
          <p>
          I am enthusiastic about new technologies and development, eager to become a part of a team where I can expand my knowledge and grow professionally. I am a creative person, and have proven with innovative thinking to solve complex problems and come up with new ideas.
          </p>
          <p>
          I am confident that I will give my the best of me to team I am joining. My dedication and passion for continuous improvement drive me to keep learning new skills and strive for personal and professional growth. I am highly motivated to challenge myself, take on new responsibilities, and push my limits to achieve my goals. I am certain that I can contribute significantly to any team and help drive its success.
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;

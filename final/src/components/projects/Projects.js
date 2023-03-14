import { services } from '../../data'
import Title from '../title/Title'
import Service from './Project'

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <Title title='my' subTitle='projects' />
      <div className='section-center project-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}

export default Projects

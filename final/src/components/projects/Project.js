const Project = ({ image, title, info, link }) => {

  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <article className='project-card' onClick={handleClick}>
      <div className='project-img-container'>
        <img src={image} className='project-img' alt={title}/>
      </div>
      <div className='project-info'>
        <div className='project-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
      </div>
    </article>
  )
}

export default Project

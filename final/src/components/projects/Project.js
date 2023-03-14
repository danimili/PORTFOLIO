const Project = ({ image, title, info, link }) => {

  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <article className='service-card' onClick={handleClick}>
      <div className='service-img-container'>
        <img src={image} className='service-img' alt={title}/>
      </div>
      <div className='service-info'>
        <div className='service-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
      </div>
    </article>
  )
}

export default Project

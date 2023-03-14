import { socialLinks } from '../../data'
import PageLinks from '../pagesLinks/PageLinks'
import SocialLink from '../social/SocialLink'

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Daniela Milieris
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}

export default Footer

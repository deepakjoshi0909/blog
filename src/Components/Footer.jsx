import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer>
        <ul className='footer_categories'> 
          <li><Link to = "/posts/categries/Agriculture">Agriculture</Link></li>
          <li><Link to = "/posts/categries/Business">Business</Link></li>
          <li><Link to = "/posts/categries/Education">Education</Link></li>
          <li><Link to = "/posts/categries/Enterrainment">Enterrainment</Link></li>
          <li><Link to = "/posts/categries/Art">Art</Link></li>
          <li><Link to = "/posts/categries/Investment">Investment</Link></li>
          <li><Link to = "/posts/categries/Uncatorized">Uncatorized</Link></li>
          <li><Link to = "/posts/categries/Weather">Weather</Link></li>
        </ul>

        <div className="footer_copyright">
          <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer

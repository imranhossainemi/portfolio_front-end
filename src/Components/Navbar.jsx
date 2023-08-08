import React, {Link} from 'react';

const Navbar = () => {
  return (
    <nav>
      <button className='mobile-nav-btm' id='open' type='buttom'></button>
      <ul className='navigation'>
        <li className='nav-item'>
          <Link to='#portfolio' className='nav-link'>Portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to = "/"> Home</Link></li>
        <li><Link to = "/games"> Games</Link></li>
        <li><Link to = "/games/new"> Create Game</Link></li>
      </ul>
    </nav>>
  )
}

export default Navbar
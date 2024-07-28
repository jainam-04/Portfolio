import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
      return (
            <div>
                  <div className="flex justify-around items-center bg-blue-800 p-6">
                        <div>
                              <h1 className='text-2xl text-white'><Link to="/">Jainam Rupani</Link></h1>
                        </div>
                        <div>
                              <ul className='flex gap-20 items-center text-lg text-white'>
                                    <li>
                                          <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                          <Link to="/skills">Skills</Link>
                                    </li>
                                    <li>
                                          <Link to="/projects">Projects</Link>
                                    </li>
                                    <li>
                                          <Link to="/contact">Contact</Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default NavBar

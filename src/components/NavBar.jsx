import React from 'react'

function NavBar() {
      return (
            <div>
                  <div className="flex justify-around items-center bg-blue-800 p-6">
                        <div>
                              <h1 className='text-2xl text-white'>Jainam Rupani</h1>
                        </div>
                        <div>
                              <ul className='flex gap-20 items-center text-lg text-white'>
                                    <li>
                                          <a href="/">Home</a>
                                    </li>
                                    <li>
                                          <a href="/skills">Skills</a>
                                    </li>
                                    <li>
                                          <a href="/projects">Projects</a>
                                    </li>
                                    <li>
                                          <a href="/contact">Contact</a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default NavBar

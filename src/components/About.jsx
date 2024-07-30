import React from 'react'
import linkedin from '../assets/imgs/linkedin.png'
import github from '../assets/imgs/github.png'
import leetcode from '../assets/imgs/leetcode.jpg'
import profile from '../assets/imgs/profile.jpg'
import resume from '../assets/resume/JainamRupani.pdf'

function About() {
      return (
            <div>
                  <div className="bg-cyan-950 text-white py-10 flex justify-center items-center gap-20">
                        <div className='text-center'>
                              <h1 className='text-6xl py-5 font-bold'>Jainam Rupani</h1>
                              <h4 className='text-3xl py-5'>Java <br /> Developer</h4>
                              <div className='flex justify-center items-center py-5 gap-10'>
                                    <a href="https://www.linkedin.com/in/jainam-rupani-263759307/"><img src={linkedin} alt="XImg" className='h-10 w-10' /></a>
                                    <a href="https://github.com/jainam-04"><img src={github} alt="XImg" className='h-10 w-10' /></a>
                                    <a href="https://leetcode.com/u/jainamrupani04/"><img src={leetcode} alt="XImg" className='h-10 w-10' /></a>
                              </div>
                              <div>
                                    <p className='text-2xl py-5'>With a passion for <br /> developing modern <br /> Java applications <br /> for commercial businesses.</p>
                              </div>
                              <div className='mt-9'>
                                    <a href={resume} download><button className='bg-white font-bold text-2xl text-black py-3 px-5 rounded-lg'>Resume</button></a>
                              </div>
                        </div>
                        <div>
                              <img className='h-72 w-72 object-left rounded-full text-center' src={profile} alt="profileImage" />
                        </div>
                  </div>
            </div>
      )
}

export default About

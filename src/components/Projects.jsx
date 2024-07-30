import React from "react";
import clinic from "../assets/imgs/clinic.jpg";
import atm from "../assets/imgs/atm.webp";
import newsapp from "../assets/imgs/newsapp.avif";
import voting from "../assets/imgs/voting.jpg";
import textutils from '../assets/imgs/textutils.png'

function Projects() {
  return (
    <div>
      <div className="bg-cyan-950 text-white py-5">
        <h1 className="text-5xl text-center">Projects</h1>
        <div className="flex justify-center items-center gap-28">
          <div className="py-10 mx-5 bg-gray-600 px-5 mt-5 rounded-xl">
            <img src={clinic} alt="clinicImage" className="rounded-lg" />
            <p className="text-lg ml-20 mt-5">Full-Stack Website for</p>
            <p className="text-lg ml-24 mb-5"> Sanjeevani Clinic</p>
            <a href="">
              <button className="ml-10 py-3 px-5 bg-white text-black font-bold text-xl rounded-2xl">
                See Project on GitHub
              </button>
            </a>
          </div>
          <div className="py-10 mx-5 bg-gray-600 px-5 mt-5 rounded-xl">
            <img src={newsapp} alt="clinicImage" className="rounded-lg h-[197px] w-[350px]" />
            <p className="text-lg ml-32 mt-5 mb-10">News App</p>
            <a href="https://github.com/jainam-04/NewsApp">
              <button className="ml-14 py-3 px-5 bg-white text-black font-bold text-xl rounded-2xl">
                See Project on GitHub
              </button>
            </a>
          </div>
          <div className="py-10 mx-5 bg-gray-600 px-5 mt-5 rounded-xl">
            <img src={atm} alt="clinicImage" className="rounded-lg h-[197px] w-[350px]" />
            <p className="text-lg ml-20 mt-5 mb-10">ATM Management System</p>
            <a href="https://github.com/jainam-04/ATM-Management-System">
              <button className="ml-16 py-3 px-5 bg-white text-black font-bold text-xl rounded-2xl">
                See Project on GitHub
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-28">
        <div className="py-10 mx-5 bg-gray-600 px-5 mt-5 rounded-xl">
            <img src={voting} alt="clinicImage" className="rounded-lg h-[197px] w-[350px]" />
            <p className="text-lg ml-28 mt-5 mb-10">Voting System</p>
            <a href="https://github.com/jainam-04/Voting-System">
              <button className="ml-16 py-3 px-5 bg-white text-black font-bold text-xl rounded-2xl">
                See Project on GitHub
              </button>
            </a>
          </div>
        <div className="py-10 mx-5 bg-gray-600 px-5 mt-5 rounded-xl">
            <img src={textutils} alt="clinicImage" className="rounded-lg h-[197px] w-[350px]" />
            <p className="text-lg ml-28 mt-5 mb-10">Text Utility App</p>
            <a href="https://github.com/jainam-04/TextUtils">
              <button className="ml-16 py-3 px-5 bg-white text-black font-bold text-xl rounded-2xl">
                See Project on GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

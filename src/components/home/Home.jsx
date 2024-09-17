import './Home.css';
import { FaDownload } from "react-icons/fa6";
import SocialButton from '../SocialButton/SocialButton';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';

function Home() {

  const handleType = (count) => {
    console.log(count);
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  }

  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  
  return (
    <>
   
      <div className="container mt-10 px-6 md:px-12">
        <div className="  pt-10 px-6 md:px-12 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Left Section - Text */}
            <div className="text-center md:text-left mt-5 md:mt-[50px] space-y-5">
              <h1  className="text-4xl md:text-5xl text-white font-bold">
                Welcome
              </h1>

              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-5">
                {' '}
                <span style={{ fontWeight: 'bold' }}>
                  <Typewriter
                    words={['I am a', 'React Developer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h2>

              <p className="text-lg md:text-xl text-white font-medium mt-3">
                You can trust me. I will make your website beautiful.
              </p>

              {/* Download CV Button */}
              <div className="mt-8">
                <a
                  className="relative  inline-flex items-center justify-center  text-lg font-semibold text-black shadow-sm gap-x-2relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700  gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  href="/resume/CV.pdf" 
                  download="myCV"
                >
                  <FaDownload className="text-xl" /> Download CV
                </a>
              </div>

              {/* Social Buttons */}
              <div className="mt-16">
                <h2 className="text-2xl font-medium text-white">Follow Me</h2>
                <div className="flex gap-6 mt-3 justify-center md:justify-start">
                  <SocialButton 
                    social_icons={<FaFacebookF className="text-xl" />}
                    social_links="https://www.facebook.com/profile.php?id=61551685600240"
                  />
                  <SocialButton
                    social_icons={<FaLinkedinIn className="text-xl" />}
                    social_links="https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/"
                  />
                  <SocialButton
                    social_icons={<FaTwitter className="text-xl" />}
                    social_links="https://x.com/Rezwan971"
                  />
                  <SocialButton
                    social_icons={<FaGithub className="text-xl" />}
                    social_links="https://github.com/Rezwan-react?tab=repositories"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div  className="img mt-10 md:mt-0">
              <img 
                className="w-[250px] md:w-[400px] mx-auto md:ml-12 rounded-lg shadow-lg"
                src="public/images/rezwan.png"
                alt="Rezwan"
              />
            </div>
          </div>
        </div>
      </div>
      
      
      
    </>
  );
}

export default Home;

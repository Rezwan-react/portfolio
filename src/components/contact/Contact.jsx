import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import SocialButton from '../SocialButton/SocialButton';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <>
   
      <div className="container mt-10">
        <div className='rounded-[20px] pt-[60px] px-[20px] sm:px-[40px] lg:px-[60px] ml-5 sm:ml-10 lg:ml-20'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex flex-col gap-5'>
              <div className="text-4xl sm:text-5xl text-[#FFEAC5] font-Poppins font-semibold">
                <h2>Contact me</h2>
              </div>
              <div className="Contact">
                <div className='w-full sm:w-[280px] h-[120px] border-[2px] border-[#677D6A] flex flex-col justify-center items-center gap-6 px-4 sm:px-8 py-4 bg-transparent rounded-md text-white relative font-semibold font-sans hover:shadow-md transition-all duration-700 text-xl sm:text-2xl'>
                  <div><FaPhoneAlt className='text-4xl sm:text-5xl text-[#fff]' /></div>
                  <a className='text-lg sm:text-xl text-white font-Poppins font-medium' href="tel:01788254971">01788254971</a>
                </div>
              </div>
              <div className="Contact">
                <div className='w-full sm:w-[280px] h-[120px] border-[2px] border-[#677D6A] flex flex-col justify-center items-center gap-6 px-4 sm:px-8 py-4 bg-transparent rounded-md text-white relative font-semibold font-sans hover:shadow-md transition-all duration-700 text-xl sm:text-2xl'>
                  <div><CgMail className='text-4xl sm:text-5xl text-[#fff]' /></div>
                  <a className='lg:text-[13px] sm:text-sm text-white font-Poppins font-medium' href="mailto:mdrazwanislam8@gmail.com">mdrazwanislam8@gmail.com</a>
                </div>
              </div>
              <div className="social_button">
                <h2 className='text-lg sm:text-2xl font-Poppins font-medium text-white'>Follow Me</h2>
                <div className='flex gap-3'>
                  <SocialButton social_icons={<FaFacebookF className='text-lg sm:text-xl' />} social_links='https://www.facebook.com/profile.php?id=61551685600240' />
                  <SocialButton social_icons={<FaLinkedinIn className='text-lg sm:text-xl' />} social_links='https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/' />
                  <SocialButton social_icons={<FaTwitter className='text-lg sm:text-xl' />} social_links='https://x.com/Rezwan971' />
                  <SocialButton social_icons={<FaGithub className='text-lg sm:text-xl' />} social_links='https://github.com/Rezwan-react?tab=repositories' />
                </div>
              </div>
            </div>
            <div className="form w-full sm:max-w-[360px] mx-auto bg-[#0d1b2a] rounded-lg shadow-md p-4 mt-10 lg:mt-0">
              <form>
                <label className="block mb-2 text-gray-50"> Name </label>
                <input
                  placeholder="Your Name"
                  className="text-white text-lg font-Poppins font-medium w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                  type="text"
                /><br /><br />
                <label className="block mb-2 text-gray-50"> Email </label>
                <input
                  placeholder="Your Email"
                  className="text-white text-lg font-Poppins font-medium w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                  name="email"
                  id="email"
                  type="email"
                /><br /><br />
                <label className="block mb-2 text-gray-50"> Message </label>
                <textarea
                  placeholder="Your Message"
                  className="text-white text-lg font-Poppins font-medium w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                  rows="4"
                  name="message"
                  id="message"
                ></textarea><br /><br />
                <button
                  className="text-white text-lg font-Poppins font-medium w-full bg-[#F7AB0A] p-2 rounded transition-all hover:bg-[#FFC857]"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <section>
            <div className="map flex justify-center mt-8 mb-7">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.263549081208!2d90.41202049069952!3d23.8316896285501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1725546973523!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </div>
      </div>
    
    </>
  );
}

export default Contact;

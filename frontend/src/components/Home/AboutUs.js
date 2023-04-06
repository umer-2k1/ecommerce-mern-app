import React from 'react'
import myImage from '../../images/myPic.png'
import linkedinIcon from '../../images/linkedin.svg'
import githubIcon from '../../images/github.svg'
import webIcon from '../../images/webicon.png'
import twitterIcon from '../../images/twitter.png'


const AboutUs = () => {
  return (
    <>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">

  <div className="mx-auto mb-4 lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="mx-auto object-cover object-center w-[50%] h-[50%]" src={myImage} alt="stats"/>
    </div>

    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Muhammad Umer</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hi there! I am Muhammad Umer, and have a strong inclination towards self-learning. As a passionate programmer, I specialize in ReactJS and MERN stack development. I enjoy problem-solving and exploring new technologies and frameworks to create web and desktop applications. My preferred technologies include ReactJS, NodeJS, MongoDB, and ExpressJS. How can I help you?

</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
<a href="https://expore-me.netlify.app/" target={'_blank'}>
        <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
         <img className='mx-auto' src={webIcon} alt="" />
          <h2 className="title-font font-medium text-xl text-gray-900">Visit the website</h2>
        </div>
</a>
      </div>
     
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
<a href="https://www.linkedin.com/in/m-umer-memon/" target={'_blank'}>
        <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
         <img className='mx-auto' src={linkedinIcon} alt="" />
          <h2 className="title-font font-medium text-xl text-gray-900">let's connect via linkedin</h2>
        </div>
</a>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
<a href="https://github.com/umermemon4648/" target={'_blank'}>
        <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
         <img className='mx-auto' src={githubIcon} alt="" />
          <h2 className="title-font font-medium text-xl text-gray-900">Follow me on Github</h2>
        </div>
</a>
</div>

      <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
<a href="https://twitter.com/Umer_Memon16" target={'_blank'}>
        <div className="border-2 border-gray-200 px-4 py-2 rounded-lg">
         <img className='mx-auto' src={twitterIcon} alt="" />
          <h2 className="title-font font-medium text-xl text-gray-900">Follow me on Twitter</h2>
        </div>
</a>
      </div>


    </div>
  </div>
</section>

    </>
  )
}

export default AboutUs

import { ArrowPathIcon, CheckBadgeIcon, CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'>My <span className='text-green-600'>Services</span></p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
          <div>
            <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
              <CodeBracketSquareIcon
                className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'
              />
              <h1 className='text-[20xp] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Frontend</h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                I am a creative and innovative front-end developer with a passion for crafting websites that are both visually stunning and user-friendly.
                I am always up-to-date on the latest and greatest front-end technologies and I&apos;m always looking for new and 
                innovative ways and ideas to improve the user experience. I am confident that I can help you create the perfect website for your business. 
              </p>
            </div>
          </div>
          <div>
            <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
              <RocketLaunchIcon
                className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'
              />
              <h1 className='text-[20xp] md:text-[30px] mt-[1.5rem] mb-[1.5]'>Backend</h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                I&apos;m a creative backend developer, passionate about crafting robust systems for dynamic websites. 
                My expertise spans scalable solutions, database design, and server-side logic. Always updated on the latest technologies, 
                I ensure optimal performance and functionality alignment. Let&apos;s collaborate to bring your digital vision to life 
                through innovative backend development.
              </p>
            </div>
          </div>
          <div>
            <div className='bg-green-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
              <CommandLineIcon
                className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'
              />
              <h1 className='text-[20xp] md:text-[30px] mt-[1.5rem] mb-[1.5]'>FullStack</h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Whether aiming to rejuvenate your current digital presence, establish a cutting-edge e-commerce platform, 
                or create a bespoke web application perfectly aligned with your unique requirements, I am confident in my capacity to 
                provide a comprehensive solution. I pledge not only to meet your expectations but to surpass them, ensuring a 
                transformative digital experience tailored precisely to your needs.
              </p>
            </div>
          </div>
          <div>
            <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
              <ArrowPathIcon
                className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'
              />
              <h1 className='text-[20xp] md:text-[30px] mt-[1.5rem] mb-[1.5]'>DevOps</h1>
              <p className='text-[15px] text-[#d3d2d2] font-normal'>
                While I&apos;m still in the early stages of my DevOps journey, I&apos;m committed to continuous learning and self-improvement. I actively seek out mentorship, 
                participate in online communities, and explore new technologies to broaden my skill set. I&apos;m confident that my enthusiasm, dedication, and eagerness to 
                learn will enable me to become a valuable asset in any DevOps team.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
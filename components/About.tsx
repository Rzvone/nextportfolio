import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {

  const handleDownloadResume = () => {
    const resumePath = '/resume/RazvanBobonea.pdf'

    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'RazvanBobonea.pdf'
    link.click()
  }

  return (
    <div className='bg-[#121121] pb-3[rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center pb-10'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-gray-400 md-[1rem]'>About <span className='text-green-600'>Me</span></h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                  From Dreams to
                    <span className='text-green-600'> Digital Reality</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                  <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                  <p className='text-[19px] text-slate-300 w-[80%]'>
                    I am an avid learner with a passion for
                    automation. My journey started with a project in
                    Power Bi, where I streamlined the casino
                    reporting, reducing it from days to mere hours.
                    This experience started my fascination with
                    making complex tasks more eﬀicient and user-
                    friendly. With this I have extended my hobby to
                    smart home projects using Pi's, esp32 controllers,
                    arduino and so on. My future plans are driven by a
                    desire to continue on this path of automation and
                    become a DevOps professional. I am to master the
                    art of automating software development,
                    deployment and infrastructure management. I
                    aspire to one day become a mentor to junior
                    professionals, sharing my knowledge, experiences
                    and values to help them grow into great
                    engineers.
                  </p>
                </div>
                <button 
                  onClick={handleDownloadResume}
                  className='
                    px-[2rem] 
                    hover:bg-green-400 
                    transition-all 
                    duration-300 
                    py-[1rem] 
                    text-[18px] 
                    font-bold 
                    uppercase 
                    bg-[#55e6a5] 
                    text-black 
                    flex 
                    items-center 
                    space-x-2'
                  >
                  <p>Download Resume</p>
                  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                </button>
            </div>
            <div className='lg:w-[500px] mx-auto md:ml-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
              <Image 
                src='/images/coderjpg.webp'
                alt='user'
                layout='fill'
                objectFit='contain'
                className='relative z-[11] w-full h-full object-contain'
              />
              <div className='absolute w-full h-full z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'>

              </div>
            </div>
        </div>
    </div>
  )
}

export default About
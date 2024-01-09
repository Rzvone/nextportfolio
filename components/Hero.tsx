import React from 'react'
import Particle from './Particles'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const Hero = () => {

    const handleDownloadResume = () => {
        const resumePath = '/resume/RazvanBobonea.pdf'

        const link = document.createElement('a')
        link.href = resumePath
        link.download = 'RazvanBobonea.pdf'
        link.click()
    }

    return (
        <div className={`h-[88vh] mt-[10vh] bg-cover bg-center`} >
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items center mt-10'>
                <div className='z-[1000]'>
                    <h1 className='text-[35px] md:text-[50px] text-white font bold'>
                        Hello, I am Raz
                        <span className='text-green-600'>
                            van
                        </span>
                        !
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[18px] text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Asperiores natus, non reiciendis tenetur voluptatibus ad quis maxime, 
                        architecto veritatis culpa quibusdam nostrum iusto cupiditate. 
                        Dolorem ratione quis quasi ducimus provident?
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm: space-x-6'>
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
                                space-x-2'>
                            <p>Download Resume</p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                    </div>  
                </div>
                <div className='lg:w-[500px] mx-auto md:ml-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[400px] h-[400px] relative ml-auto'>
                    <Image src="/images/developer.jpg" alt="user" layout="fill" objectFit="cover" className="rounded-full" />
                </div>       
            </div>
        </div>
    )
}

export default Hero
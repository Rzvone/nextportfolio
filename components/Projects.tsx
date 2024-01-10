import Image from 'next/image'
import React from 'react'

function Projects() {

    const projects = [
        {
            title: 'Pizza Order',
            image: '/images/pizza.png',
            description: 'This is a pizza order website',
            repo: 'https://github.com/Rzvone/PizzaOrder'
        },
        {
            title: 'Pizza Order',
            image: '/images/pizza.png',
            description: 'This is a pizza order website',
            repo: 'https://github.com/Rzvone/PizzaOrder'
        },
        {
            title: 'Pizza Order',
            image: '/images/pizza.png',
            description: 'This is a pizza order website',
            repo: 'https://github.com/Rzvone/PizzaOrder'
        },
        {
            title: 'Pizza Order',
            image: '/images/pizza.png',
            description: 'This is a pizza order website',
            repo: 'https://github.com/Rzvone/PizzaOrder'
        },
    ]

  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[4rem] pb-[4rem]'>
        <h1 className='heading'>Proj<span className='text-green-700'>ects</span></h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            {
                projects.map((project, index) => (
                    <div key={index} className='items-center justify-center text-center'>
                        <div className='transform hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout='fill'
                                className='object-contain'
                                draggable={false}
                            />
                        </div>
                        <button onClick={() => window.open(project.repo, '_blank')}  className='mt-5 text-white bg-green-700 w-[50%] h-[30px] rounded-full hover:bg-[#55e6a5]'>Repo</button>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Projects
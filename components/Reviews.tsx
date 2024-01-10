import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'

interface Props {
    name: string;
    image: string;
}

const Reviews = ({ name, image }: Props) => {
  return (
    <div className='flex flex-col text-center justify-center'>
        <Image 
            src={image} 
            alt={name} 
            width={100} 
            height={100}
            objectFit='contain' 
            className='mx-auto mb-[2rem] rounded-full'
            draggable={false}
        />
        <div className='flex items-center mx-auto'>
            <StarIcon className='w-[2rem] h-[2rem] text-green-400' />
            <StarIcon className='w-[2rem] h-[2rem] text-green-400' />
            <StarIcon className='w-[2rem] h-[2rem] text-green-400' />
            <StarIcon className='w-[2rem] h-[2rem] text-green-400' />
            <StarIcon className='w-[2rem] h-[2rem] text-green-400' />
        </div>
        <h1 className='text-[25px] text-white mt-[1rem]'>{name}</h1>
        <p className='text-gray-600 text-[1rem] w-[90%] md:w-[50%] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores accusantium blanditiis, 
            consectetur quas voluptates explicabo exercitationem aut sapiente iste veritatis inventore ad 
            fugit debitis veniam amet eaque laboriosam facilis?
        </p>
    </div>
  )
}

export default Reviews
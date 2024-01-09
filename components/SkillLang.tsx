import React from 'react'

interface Props {
    skill1: string
    level1: string
}

const SkillLang = ({
    skill1,  
    level1, 
 } : Props) => {

        const progressBarStyle = (lvl: string) => {
            return {
                width: lvl
            }
        }

        const skills = (skill: string, level: string) => {
            return (
                <div className='relative mb-[3rem]'>
                    <h1 className='p-5 w-[100%] capitalize bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                        {skill}
                    </h1>
                    <span className={`bottom-0 h-[6px] absolute bg-[#55e6a5] `} style={progressBarStyle(level)}>

                    </span>
                </div>
            )
        }

  return (
    <div>
        {skills(skill1, level1)}
    </div>
  )
}

export default SkillLang
import React from 'react'
import SkillsItem from './SkillsItem'
import SkillLang from './SkillLang'

const Skills = () => {

    const skillsData = [
        {
            title: 'MERN Stack Developer',
            year: '2022 - present',
            skills: [
                {
                    skill: 'html',
                    level: '91%'
                },
                {
                    skill: 'css',
                    level: '85%'
                },
                {
                    skill: 'react',
                    level: '80%'
                },
                {
                    skill: 'javascript',
                    level: '80%'
                },
                {
                    skill: 'next js',
                    level: '60%'
                },
                {
                    skill: 'node js',
                    level: '78%'
                },
                {
                    skill: 'express js',
                    level: '75%'
                },
                {
                    skill: 'mongo db',
                    level: '70%'
                }
                
            ]
        },
        {
            title: 'Java Developer',
            year: '2023 - present',
            skills: [
                {
                    skill: 'java',
                    level: '70%'
                },
                {
                    skill: 'spring',
                    level: '65%'
                },
                {
                    skill: 'spring boot',
                    level: '65%'
                },
                {
                    skill: 'spring security',
                    level: '60%'
                }
            ]
        },
        {
            title: 'DevOps',
            year: '2023 - present',
            skills: [
                {
                    skill: 'git',
                    level: '80%'
                },
                {
                    skill: 'docker',
                    level: '70%'
                },
                {
                    skill: 'linux',
                    level: '65%'
                },
                
            ]
        }
    ]


  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>Ski<span className='text-green-700'>lls</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 gap-[2rem] items-center'>
               {skillsData.map((item, index) => (
                    <div key={index}>
                        <SkillsItem title={item.title} year={item.year} />
                            {item.skills.map((skill, skillIndex) => (
                                <SkillLang 
                                    key={skillIndex}
                                    skill1={skill.skill}
                                    level1={skill.level}
                                />
                            ))}
                    </div>
               ))}
        </div>
    </div>
  )
}

export default Skills
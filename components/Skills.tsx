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
                
            ],
            description: `As an aspiring Junior MERN Stack Developer, I'm enthusiastic about leveraging MongoDB, Express.js, React, 
            and Node.js to craft dynamic web applications. Eager to learn and contribute, I bring a passion for creating responsive 
            and scalable solutions. Excited about the opportunity to grow and collaborate, I'm ready to embark on projects that enhance 
            my skills and contribute positively to your team.`
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
            ],
            description: `As a Junior Java Developer with a focus on the Spring Framework, I am eager to contribute my skills to your 
            projects. Proficient in Java and experienced in developing with Spring, I am enthusiastic about crafting efficient and 
            robust solutions. With a commitment to learning and adapting, I am ready to collaborate on building sophisticated applications 
            that meet your requirements and advance my expertise.`
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
                
            ],
            description: `As a DevOps enthusiast and learner, I am passionate about optimizing software development processes and enhancing 
            collaboration between teams. Eager to acquire skills in automation, CI/CD, and infrastructure as code, I am committed to 
            streamlining workflows and ensuring efficient, reliable deployments. Excited about the continuous learning journey, I am 
            ready to contribute to creating a more seamless and productive development environment through my evolving DevOps expertise.`
        }
    ]


  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>Ski<span className='text-green-700'>lls</span></h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 gap-[2rem] items-center'>
               {skillsData.map((item, index) => (
                    <div key={index}>
                        <SkillsItem title={item.title} year={item.year} description={item.description}/>
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
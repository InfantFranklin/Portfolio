import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import vuejs from "../assets/vuejs.png"
import mongodb from "../assets/mongodb.png"
import typescript from "../assets/typescript.png"
import bootstrap from "../assets/bootstrap.png"
import php from "../assets/php.jpg"
import docker from "../assets/docker.png"

const Experience = () => {
     const techs = [
          {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
          },
          {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
          },
          {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
          },
          {
            id: 4,
            src: vuejs,
            title: "Vuejs",
            style: "shadow-green-400",
          },
          {
            id: 5,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
          },
          {
            id: 6,
            src: typescript,
            title: "TypeScript",
            style: "shadow-cyan-400",
          },
          {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
          },
          {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-lime-100",
          },
          {
            id: 9,
            src: mongodb,
            title: "Mongo DB",
            style: "shadow-white",
          },
          {
            id: 10,
            src: php,
            title: "PHP",
            style: "shadow-indigo-400",
          },
          {
            id: 11,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-400",
          },
          {
            id: 12,
            src: docker,
            title: "Docker",
            style: "shadow-cyan-400",
          }
        ]
  return (
    <div name='experience' className=' flex flex-col justify-center bg-gradient-to-b from-black to-gray-800 w-full md:min-h-screen '>
          <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
               <div>
                    <p className='text-4xl font-bold p-2 inline border-b-4 border-b-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
               </div>
               <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({id, src, title, style })=>(
                         <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-md ${style}`}>
                              <img src={src} alt={title} className='w-20 mx-auto' />
                              <p className='mt-4'>{title}</p>
                         </div>
                    ))}
               </div>
          </div>
    </div>
  )
}

export default Experience
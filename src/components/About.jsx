import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full  h-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
               <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-500 '>About</p>
               </div>
               <p className='sm:text-2xl'>
                    Proficient in HTML, CSS, JavaScript, and related frameworks such as React.JS and Vue.Js.Experienced in server-side languages like PHP, with a solid understanding of database management systems like MySQL and MongoDB.Familiar with version control systems such as Git and collaborative development workflows.Strong understanding of web performance optimization and best practices.Skilled in the design, development, and administration of intricate web applications.Excellent communication skills and ability to work effectively in both independent and team environments.
               </p>
               <br />
               <p className='sm:text-2xl'>
               Passionate about staying up-to-date with the latest web technologies and trends, I am committed to continuously enhancing my skills and delivering high-quality results that exceed client expectations.
               </p>
          </div>
    </div>
  )
}

export default About
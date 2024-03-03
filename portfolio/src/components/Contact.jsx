import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='max-w-screen-lg mx-auto h-full flex flex-col justify-center p-4'>
               <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-b-gray-500 '>Contact</p>
                    <p className='py-6'>Submit the from to get in touch with me.</p>
               </div>
               <div className='flex justify-center items-center '>
                    <form className='flex flex-col w-full md:w-1/2 ' action="https://getform.io/f/nadevkmb" method='POST'>
                         <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                         <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>
                         <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>
                         <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk!</button>
                    </form>
               </div>
          </div>
    </div>
  )
}

export default Contact
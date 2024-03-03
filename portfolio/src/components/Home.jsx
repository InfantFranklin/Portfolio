import React from 'react'
import  ProfileImage  from '../assets/profileImage.jpg'
import { RiArrowRightSLine } from "react-icons/ri"


const Home = () => {
	return (
		<div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 min-h-screen'
		>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Full Stack Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I am a highly motivated and detail-oriented web developer with three years of experience in creating responsive and user-friendly websites. Proficient in both front-end and back-end technologies, I excel in translating design concepts into clean and efficient code. My strong problem-solving skills enable me to tackle complex challenges and deliver innovative solutions within deadlines.
					</p>
					<div>
						<button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
						Portfolio
							<span className='group-hover:rotate-90'>
								<RiArrowRightSLine size={20} className='ml-1'/>
							</span>
						</button>
					</div>
				</div>
				<div>
					<img src={ProfileImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
				</div>
			</div>
		</div>
	)
}

export default Home
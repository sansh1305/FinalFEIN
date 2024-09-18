import React from 'react'
import { Animation } from '@hemant0621/animation'

function About() {
    return (
        <div className='relative mt-10 lg:mt-20 w-screen pb-24 pt-10'>
            <div className=" bg-[#161b22] mt-10 mx-6 rounded-[15px] lg:mx-60 lg:mt-20">
                <div className="absolute top-0 right-0 -z-10 transform -rotate-90">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs">
                        <g clipPath="url(#clip0_105_560)">
                            <path fill="#b21335" fillRule="evenodd" d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329H200Z" clipRule="evenodd"></path>
                        </g>
                    </svg>
                </div>
                <svg className=" absolute bottom-0 left-0 -z-10 transform rotate-90" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs">
                    <g clipPath="url(#clip0_105_560)">
                        <path fill="#b21335" fillRule="evenodd" d="M200 100.671 100 0 0 100.671h98.667L0 200h200l-98.667-99.329H200Z" clipRule="evenodd"></path>
                    </g>
                </svg>
                <div>
                    <h1 className='text-[#f0f8ff] font-extrabold text-3xl mx-5 mt-2 lg:text-5xl lg:mx-10 pt-8' ref={Animation("top", "40px", 200)}>WHAT IS </h1>
                    <h1 className=" text-[#b21335] font-extrabold text-3xl mx-5 mt-1 lg:text-5xl lg:mx-10 lg:mt-2" ref={Animation("top", "40px", 200)}>#HACKIFYI <span className='text-white'>??</span> </h1>
                    <h4 className=' font-medium text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2' ref={Animation("left", "40px", 400)}>WELCOME TO THE LARGEST HACKATHON OF VIT CHENNAI</h4>
                    <h3 className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8' ref={Animation("left", "40px", 600)}>hackiFYI is a two day hackathon designed to test your skills and connect you with top makers in the no code community. Taking inspiration from popular online cooking shows, DOD blends time capped web development with story-driven daily prompts that challenge participants to weave creative story lines into engaging digital experiences.</h3>
                    <div className='w-full flex justify-end px-3 lg:px-10'>
                        <button className='end w-30 h-10 lg:w-60 lg:h-12 lg:my-10 lg:text-lg my-5 rounded-md text-sm p-2 font-medium text-black bg-[#f0f8ff] hover:bg-[#b21335] hover:text-[#f0f8ff]' ref={Animation("left", "40px", 600)}>Explore Rules & FAQ's &#8594;</button>
                    </div>
                </div>


                <div>
                    <h1 className='text-[#f0f8ff] font-extrabold text-3xl mx-5 mt-2 lg:text-5xl lg:mx-10 lg:mt-8' ref={Animation("left", "40px", 200)}>WHY</h1>
                    <h1 className=" text-[#b21335] font-extrabold text-3xl mx-5 mt-1 lg:text-5xl lg:mx-10 lg:mt-2" ref={Animation("left", "40px", 200)}>#Participate? </h1>
                    <h4 className=' font-SourceCodePro font-light text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2' ref={Animation("left", "40px", 400)}>WIN CASH. GET BRAGGING RIGHTS</h4>
                    <h3 className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8' ref={Animation("left", "40px", 600)}>Winning hackiFYI will elevate your stature in the Hacker community and hook you up with some serious prize money. Thanks to our generous sponsors, our prize pool is bigger than ever which means the stakes are high and the competition is going to be stiff.</h3>
                    <div className='w-full flex justify-end px-3 lg:px-10'>
                        <button className=' lg:w-52 lg:h-12 lg:my-10 lg:text-lg end w-30 h-10 my-5 rounded-md text-sm p-2 font-medium text-black  bg-[#f0f8ff] hover:bg-[#b21335] hover:text-[#f0f8ff]' ref={Animation("left", "40px", 600)}>Explore Prizes &#8594;</button>
                    </div>
                </div>


                <div>
                    <h1 className='text-[#f0f8ff] font-extrabold text-3xl mx-5 mt-2 lg:text-5xl lg:mx-10 lg:mt-8' ref={Animation("left", "40px", 200)}>ABOUT <span className='text-[#b21335]'>US.</span></h1>
                    <h4 className=' font-SourceCodePro font-light text-lg text-[#f0f8ff] mx-5 mt-2 lg:text-2xl lg:mx-10 lg:mt-2' ref={Animation("left", "40px", 400)}>FYI, FRATERNITY OF YOUNG INNOVATORS</h4>
                    <h3 className='font-SourceCodePro font-light text-sm text-[#f0f8ff] mx-5 mt-5 lg:text-2xl lg:mx-10 lg:mt-8' ref={Animation("left", "40px", 600)}>Winning hackiFYI will elevate your stature in the Hacker community and hook you up with some serious prize money. Thanks to our generous sponsors, our prize pool is bigger than ever which means the stakes are high and the competition is going to be stiff.</h3>
                    <div className='w-full flex justify-end px-3 lg:px-10'>
                        <button className='lg:w-60 lg:h-12 lg:my-10 lg:text-lg end w-30 h-10 my-5 rounded-md text-sm p-2 font-medium text-black bg-[#f0f8ff] hover:bg-[#b21335] hover:text-[#f0f8ff]' ref={Animation("left", "40px", 600)}>Know More About Us &#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
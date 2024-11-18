import React from 'react'
import { Button } from "@/components/ui/button"
import aboutImage from '../assets/about.png'

const About = () => {
    return (
        <div id="about" 
            className="mt-16 w-full min-h-screen box-border flex flex-col md:flex-row items-center justify-between px-[8%] py-8 relative shadow-[5px_10px_30px_rgba(0,0,0,0.336)] md:pt-0">
            
            <div className="about-text w-[40%] text-left text-white leading-loose md:w-[90%] mt-12 md:mt-12 ">
            <h1 className="font-[Alfa Slab One] tracking-[2px] text-[#3d2514] text-5xl md:text-7xl font-black mb-8 -ml-20 -mr-10 sm:-mr-0 sm:-ml-28 md:-ml-0 mt-10 md:mt-0 text-center md:text-left sm:whitespace-nowrap md:whitespace-normal">
             Upcomming Event
            </h1>
                <p className="font-['Bebas_Neue'] tracking-wide leading-7 md:leading-6 text-[#252525] text-2xl mt-2 sm:-mt-6 md:-mt-0 md:w-[82%] -ml-36 -mr-36 md:-mr-0 md:-ml-0 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi asperiores rem odit excepturi! Non consectetur, veniam, a iure praesentium 
                </p>
                <Button className="w-[140px] h-[40px] flex justify-center items-center text-[1.2rem] font-lato bg-[#bf2222] text-white rounded shadow-2xl shadow-red-600 hover:bg-transparent hover:border-2 hover:border-[#bf2222] hover:text-[#3d2514] transition-all duration-500 md:ml-0 ml-3 sm:ml-10  mt-5" variant="outline">
            Read More
          </Button>
            </div>

            <div className="about-image flex justify-center items-center w-[70%] md:w-[70%] sm:w-full -ml-0 md:-ml-0 mt-8 md:mt-6">
                <img 
                    src={aboutImage} 
                    alt="about" 
                    className="w-[600px] md:w-[850]" />
            </div>
        </div>
    );
}

export default About;

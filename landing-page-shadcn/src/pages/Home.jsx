import React from 'react';
import { Button } from "@/components/ui/button"
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div
    className="relative sm:w-full h-[768px]  bg-no-repeat bg-[left_70%_center] sm:bg-cover sm:bg-left md:h-[650px] sm:h-[700px] md:mt-[40px] mt-[-25px] overflow-x-hidden"
    style={{ backgroundImage: `url(${banner})` }}
  >
  
      <div className="absolute left-2 sm:left-10 top-80 sm:top-1/2 max-w-3xl w-full px-8 text-left transform -translate-y-1/2 lg:pl-16 sm:px-4">
        <h3 className="font-bebas text-[1.6rem] text-[#3d2514] tracking-tighter mb-4 md:text-[1.8rem] md:font-semibold">
          It’s Burger Time 🍔</h3>
        <h1 className="font-slab text-7xl sm:text-8xl text-[#3d2514] tracking-wide mb-4 md:text-[5rem]">
        <span className="font-black border-b-2 border-[#3d2514] text-[#bf2222] pb-2 inline-block">Burger</span>
        <span className="font-black ml-2"> for</span> <br />
        <span className="font-black">Week</span>
        </h1>

        <p className="text-lg text-[#181818] mb-6 md:text-[1rem]">Lorem ipsum dolor sit amet.</p>
        <div className="flex mt-10 md:mt-0 ">
          <Button className="w-[160px] h-[50px] flex justify-center items-center text-[1.4rem] font-lato bg-[#bf2222] text-white rounded shadow-2xl shadow-red-600 hover:bg-transparent hover:border-2 hover:border-[#bf2222] hover:text-[#3d2514] transition-all duration-500 md:ml-0 md:mt-5" variant="outline">
            Order
          </Button>
        </div>
      </div>
    </div>
     
  );
};

export default Home;
 


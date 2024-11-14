import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import footerImage from '../assets/footer.png'
const Contact = () => {
    return (
        <div 
            id="contact" 
            className="mt-[130px] w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${footerImage})` }}>
            <h1 className="font-[Alfa Slab One] tracking-[2px] text-[#3d2514] text-3xl md:text-7xl  md:font-black md:mr-32 sm:text-2xl xs:text-xl mb-8">
             Book Your Table</h1>
            
            <form className="w-[600px] flex flex-col items-center mr-32 mb-10 md:w-[45%]">
                <Input 
                    placeholder="Full Name"
                    className="w-full h-[50px] my-1 p-2.5 bg-[rgba(17,12,9,0.7)] text-white rounded placeholder-white focus:outline-none"
                />
                <Input 
                    placeholder="Email"
                    className="w-full h-[50px] my-1 p-2.5 bg-[rgba(17,12,9,0.7)] text-white rounded placeholder-white focus:outline-none"
                />
                <Textarea 
                    placeholder="Write Here"
                    className="w-full h-[150px] my-1 p-2.5 bg-[rgba(17,12,9,0.7)] text-white rounded placeholder-white focus:outline-none"
                />
                <Input 
                    type="submit" 
                    value="Book" 
                    className="w-full h-[45px] mt-4 bg-gradient-to-r from-[#bf2222] to-[#bf2222] text-white uppercase cursor-pointer rounded focus:outline-none"
                />
            </form>
        </div>
    );
}

export default Contact;

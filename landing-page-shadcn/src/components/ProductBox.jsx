import React from 'react';

const ProductBox = ({ image, title }) => {
  return (
    <div className="productbox bg-white w-[320px] h-[475px] m-5 rounded-lg overflow-hidden transition-all duration-400 ease-in-out relative hover:shadow-[5px_5px_40px_rgba(255,103,2,0.336)]  group">
      <div className="productbox-img w-full h-[60%] ">
        <img src={image} alt={title} className="w-full h-full p-4 mt-10 object-cover" />
      </div>
      <div className="productbox-text w-full h-[30%] bg-white flex justify-center items-center text-center flex-col">
        <h2 className="text-[#3d2514] mb-2 md:text-xl md:font-semibold">{title}</h2>
        <button className="productbox-button w-[120px] h-[40px] flex justify-center items-center text-base font-lato bg-[#bf2222] shadow-[5px_10px_30px_rgba(255,103,2,0.336)] rounded-[5px] text-white group-hover:bg-transparent group-hover:border-[#3d2514] group-hover:text-[#3d2514] transition-all ease-500">
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductBox;

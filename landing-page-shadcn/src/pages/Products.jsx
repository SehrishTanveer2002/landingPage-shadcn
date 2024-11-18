import React from 'react';
import ProductBox from '@/components/ProductBox';
import pimage1 from '../assets/s1.png';
import pimage2 from '../assets/s2.png';

const Products = () => {
  return (
    <div id="products" className="w-full box-border font-lato flex flex-col items-center justify-center pt-[100px] bg-white">
      <h1 className="font-[Alfa Slab One] tracking-[2px] text-[#3d2514] text-5xl font-black mb-8 -ml-0">
        Choose & Enjoy
      </h1>
      <p className="font-[Bebas Neue] tracking-[1px] text-[#3d2514] text-lg -mt-7 mb-[35px] -ml-0">
        Lorem ipsum dolor sit amet.
      </p>
      <div className="products-container flex justify-center items-center flex-wrap -ml-0">
        <ProductBox image={pimage1} title="Longer Burger" />
        <ProductBox image={pimage2} title="Double Burger" />
        <ProductBox image={pimage1} title="Longer Burger" />
      </div>
    </div>
  );
};

export default Products;

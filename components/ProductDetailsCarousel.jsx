import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import product1 from "@/public/assets/p1.png";
import product2 from "@/public/assets/p2.png";
import product3 from "@/public/assets/p3.png";
import product4 from "@/public/assets/p4.png";
import product5 from "@/public/assets/p5.png";
import product6 from "@/public/assets/p6.png";
import product7 from "@/public/assets/p7.png";

const ProductDetailsCarousel = ({images}) => {
  const productData = [
    {
      imageSrc: product1,
    },
    {
      imageSrc: product2,
    },
    {
      imageSrc: product3,
    },
    {
      imageSrc: product4,
    },
    {
      imageSrc: product5,
    },
    {
      imageSrc: product6,
    },
    {
      imageSrc: product7,
    },
  ];

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images.map((item, index) => (
          <img src={item.attributes.url} alt={item.attributes.name} key={index} width={400} height={400} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;

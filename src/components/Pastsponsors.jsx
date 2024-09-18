import { direction } from '@hemant0621/animation'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pastsponsors() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3, // Show 3 scrolling images at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: true,
    };

    const imageStyle = 'w-full h-full object-contain bg-[#161b22] rounded-xl object-cover';

    return (
        <div>
            <div ref={direction("top")} className='text-[#f0f8ff] font-extrabold text-4xl mx-5 mt-4 lg:text-7xl lg:mx-10 pt-8 mb-10'>Dataset<span className='text-[#b21335] mx-2'> Gallery!!</span></div>
        <div className="flex items-center justify-center space-x-2">
            
            {/* Fixed First Frame */}
            
            <div className="flex-shrink-0 object-cover w-[15%] h-[10rem] md:h-[14rem]">
                <img className={imageStyle} src="images\img1.png" />
                <p className="ml-10">Picture 1</p>
            </div>

            {/* Scrolling Images */}
            <div className="flex-grow w-[70%] h-[10rem] md:h-[14rem]">
                <Slider {...settings}>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img2.png" alt="image_1" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img3.png" alt="image_2" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img4.png" alt="image_3" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img5.png" alt="image_1" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img6.png" alt="image_2" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img7.png" alt="image_3" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img8.png" alt="image_1" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img9.png" alt="image_2" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img10.png" alt="image_3" />
                    </div>
                    <div className="p-2 h-[10rem] md:h-[14rem]">
                        <img className={imageStyle} src="images\img11.png" alt="image_3" />
                    </div>
                    {/* Add more images up to image_10 */}
                </Slider>
            </div>

            {/* Fixed Last Frame */}
            <div className="flex-shrink-0 w-[15%] h-[10rem] md:h-[14rem]">
                <img className={imageStyle} src="images\img12.png" alt="last_fixed_image" />
                <p className = "mr-3">Last Image</p>
            </div>
        </div>
        </div>
    );
}

export default Pastsponsors;
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import backgroundImage1 from '../assets/travel1.jpg';
import backgroundImage2 from '../assets/travel2.jpg';
import backgroundImage3 from '../assets/travel3.jpg';
import backgroundImage4 from '../assets/landing.png';

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        <div>
          <img src={backgroundImage1} alt="Image 1" className="w-full h-screen object-cover"/>
        </div>
        <div>
          <img src={backgroundImage2} alt="Image 2" className="w-full h-screen object-cover"/>
        </div>
        <div>
          <img src={backgroundImage3} alt="Image 3" className="w-full h-screen object-cover"/>
        </div>
        <div>
          <img src={backgroundImage4} alt="Image 4" className="w-full h-screen object-cover"/>
        </div>
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-white p-5">
          <h1 className="text-3xl mb-2">Discover Your Next Adventure</h1>
          <p className="mb-4">Explore the world around you</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Search destinations" className="p-2 w-80 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 " />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

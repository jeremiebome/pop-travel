
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <header className="fixed top-0 left-0 z-50  flex items-center justify-between p-4">
      <h1 className=" text-white ml-20 mr-[270px] font-bold text-[15px]">POP TRAVEL</h1>
      <nav className='flex text-[15px]'>
        <div className='flex gap-12 mr-52 items-center font-normal'>
          <Link to="/home" className="text-white hover:text-red-700">Home</Link>
          <Link to="/about" className="text-white hover:text-red-700">About</Link>
          <Link to="/blog" className="text-white hover:text-red-700">Blog</Link>
          <Link to="/destination" className="text-white hover:text-red-700">Destination</Link>
        </div>
        <div className='flex items-center gap-2 mr-20 '>
        <Link className="mr-8 ml-[70px] text-white hover:text-red-700" to = "/signin" >
           <span>Sign in</span>
           </Link>
        <Link className="bg-red-500 text-gray-50 px-6 py-2 rounded-full" to = "/signup"> 
          <span>Sign up</span>
          </Link>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;

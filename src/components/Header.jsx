
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="ml-20 mr-[270px] font-bold text-[15px]">POP TRAVEL</h1>
      <nav className='flex text-[15px]'>
        <div className='flex gap-12 mr-52 items-center font-normal'>
          <Link to="/home" className="text-black-50 hover:text-gray-700">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-gray-700">About</Link>
          <Link to="/blog" className="text-gray-400 hover:text-gray-700">Blog</Link>
          <Link to="/destination" className="text-gray-400 hover:text-gray-700">Destination</Link>
        </div>
        <div className='flex items-center gap-2 mr-20'>
          <Link to="/signin" className="mr-8 ml-[70px] text-gray-400 hover:text-gray-700">Sign in</Link>
          <Link to="/signup" className="bg-red-300 text-gray-50 px-6 py-2 rounded-full">Sign up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

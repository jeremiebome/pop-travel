import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">POP TRAVEL</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">Blog</Link>
            </li>
            <li>
              <Link to="/destination" className="hover:text-gray-400">Destination</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

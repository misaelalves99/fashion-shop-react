import { FaSearch } from 'react-icons/fa';
import Fade from 'react-reveal';

const SearchInput = () => {
  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <Fade bottom duration={2000} distance="40px">
        <input type="text" placeholder="Search..." className="w-full max-w-xl pt-3 pb-3 pr-3 pl-3 border-2 border-solid border-gray-200" />
        <FaSearch className="absolute right-3 top-6 -translate-y-8 text-xl text-gray-500" />
      </Fade>
    </div>
  );
};

export default SearchInput;

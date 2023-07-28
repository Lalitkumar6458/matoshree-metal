import { useState,useEffect } from 'react';
import { BiSolidUpArrowAlt } from 'react-icons/bi';

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 0);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`md:h-[30px] md:w-[30px] h-[40px] w-[40px]  rounded-full fixed right-9 bottom-5 bg-mainRed text-white flex items-center justify-center text-[27px] md:text-[20px] ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <BiSolidUpArrowAlt />
    </button>
  );
};

export default ScrollTop;

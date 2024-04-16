import Navbar from '@/components/Navbar';
import profile from '@/assets/profile.png';
import { stack } from '@/constants/index';
import {motion} from 'framer-motion'
import {TypewriterEffect} from '@/components/ui/typeWriter'
import Helmet from '../components/Helmet';
import { Button } from '@/components/ui/Moving-border';

const Home = () => {
  const handleClick = () => {
    window.open('http://localhost:5173/CV-rendi.pdf', '_blank');
  };

    const words = [
    {
      text: "Build",
      className: "text-white text-2xl font-bold relative z-20",
    },
    {
      text: "awesome",
      className: "text-white text-2xl font-bold relative z-20",
    },
    {
      text: "apps",
      className: "text-white text-2xl font-bold relative z-20",
    },
    {
      text: "with",
      className: "text-white text-2xl font-bold relative z-20",
    },
    {
      text: "Rendi code.",
      className: "relative z-20 text-yellow-600 dark:text-blue-500 font-neon text-2xl",
    },
  ];
  return (
    <Helmet>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2, delay: 1 }}>
        <h1 className='absolute left-2 bottom-0 font-extrabold text-[100px] md:text-[200px] lg:text-[300px] text-white opacity-10'>WEB DEVELOPER</h1>
      </motion.div>
      <Navbar />
      <motion.div className="relative z-20" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}>
        <img
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center filter sepia opacity-70 shadow-lg shadow-white"
          src={profile}
          alt="profile"
        />
      </motion.div>
      <TypewriterEffect words={words} />
      <p className="text-center mt-2 text-neutral-300 relative z-20 font-mplus font-bold">
        Web Developer
      </p>
      <motion.div className="relative z-20 flex flex-wrap gap-4 max-w-[400px] items-center justify-center m-4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}>
        {stack.map((item, index) => (
          <div
            key={index}
            className="py-2 px-4 border-2 border-gray-500 rounded-full flex gap-2 items-center">
            <img
              className="w-6 h-6 aspect-square object-cover object-center"
              src={item.image}
              alt={item.name}
            />
            <p className="text-center text-neutral-300">{item.name}</p>
          </div>
        ))}
      </motion.div>
      <Button
        onClick={handleClick}
        borderRadius="1.5rem"
        className="bg-yellow-600text-black font-neon font-bold text-lg bg-yellow-600 text-black/80 z-40">
        Hire me
      </Button>
    </Helmet>
  );
};

export default Home;

import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])
  return (
    <motion.div className="fixed w-[70px] h-[70px] rounded-full z-20 border-2 border-yellow-600" animate={{ x: position.x -5, y: position.y -5, transition: { ease: [0.6, 0.01, -0.05, 0.9],  } }}></motion.div>
  )
}

export default Cursor
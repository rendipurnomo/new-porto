import Logo from '../ui/Logo'
import { socialMedia } from '../../constants'

const Navbar = () => {
  return (
    <header className='absolute top-0 z-20 right-0 left-0 p-4'>
      <div className='flex justify-between items-center'>
      <Logo />
      <div className='flex items-center gap-2'>
        {socialMedia.map((item, index) => (
          <a href={item.url} target='_blank' key={index}>
        <img className='w-6 h-6 object-cover hover:animate-bounce shadow-md shadow-gray-300/60 rounded-full bg-white' src={item.name} alt={item.name}/>
          </a>
        ))}
      </div>
        </div>
    </header>
  )
}

export default Navbar
import { ContainerScroll } from '@/components/ui/ContainerScroll'
import hero from '@/assets/modernui.png'
import umkm from '@/assets/digitalumkm.png'
import pizza from '@/assets/pizza.png'
import chat from '@/assets/chat.png'

const Portofolio = () => {
  return (
      <div className="mt-24 flex flex-col overflow-hidden">
        {porto.map((item, index) => (
          <ContainerScroll
        key={index}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Featured Project <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-yellow-600">
                {item.name}
              </span>
            </h1>
          </>
        }
      >
        <div className='flex flex-col gap-2'>
        <img
          src={item.image}
          alt="porto"
          className="mx-auto rounded-2xl object-contain h-full object-left-top"
          draggable={false}
          />
        <a href={item.url} target='_blank' className='md:mt-4 bg-yellow-600 rounded-md text-balck mx-auto py-2 px-4 hover:bg-yellow-500 font-semibold border-1 border-yellow-900'>See Demo</a>
          </div>
      </ContainerScroll>
        ))}

    </div>
  )
}

export default Portofolio

const porto = [
  {
    name: 'Modern UI',
    image: hero,
    url: 'https://modern-tailwind-ui.vercel.app'
  },
  {
    name: 'UMKM Digital',
    image: umkm,
    url: 'https://umkm-digital.netlify.app'
  },
  {
    name: 'Pizza App',
    image: pizza,
    url: 'https://pizza-go.vercel.app'
  },
  {
    name: 'Chat App',
    image: chat,
    url: 'https://pakabar.my.id'
  },
]
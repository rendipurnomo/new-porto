import Map from '@/components/Map'
import ContactUs from '@/components/ContactUs'

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row px-4'>
      <div className='md:w-1/2'>
      <ContactUs />
      </ div>
      <div className='md:w-1/2'>
      <Map />
      </div>
    </div>
  )
}

export default Contact
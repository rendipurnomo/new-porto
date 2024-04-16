import Helmet from '@/components/Helmet'
import {WavyBackground} from '@/components/ui/wavy-bg'

const About = () => {
  return (
    <Helmet>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Quote of the day
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking." - Steve Jobs
      </p>
    </WavyBackground>
    </Helmet>
  )
}

export default About

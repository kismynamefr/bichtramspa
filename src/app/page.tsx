import CarouselComponent from '~/components/Carousel'
import OurServices from '~/components/OurServices'
import Sale from '~/components/Sale'
import MissKOL from '~/components/MissKOL'
import AboutUs from '~/components/AboutUs'
import Infrastructure from '~/components/Infrastructure'
import News from '~/components/News'
import Branch from '~/components/Branch'

const Home: React.FunctionComponent = () => {
  return (
    <>
      <CarouselComponent />
      <OurServices/>
      <Sale/>
      <MissKOL/>
      {/* <AboutUs/> */}
      <Infrastructure/>
      <News/>
      <Branch/>
    </>
  )
}

export default Home;
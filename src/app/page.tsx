import NavbarComponents from '~/components/Navbar'
import CarouselComponent from '~/components/Carousel'
import Header from '~/components/Header/Header'

const Home: React.FunctionComponent = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <NavbarComponents />
      <CarouselComponent />
    </main>
  )
}

export default Home;

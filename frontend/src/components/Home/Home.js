import headerImg from '../../images/header.jpeg'
import HeroSection from './HeroSection'
import Details from './Details'


const Home = () => {
  return (
    <div>
      <div className='min-h-screen'>
        <div className="h-[70vh]">
          <div>
            <img src={headerImg} alt="" className="object-cover min-h-[50vh]" />
          </div>
        </div>
        <HeroSection />
      </div>
      <Details />
    </div>
  )
}
export default Home

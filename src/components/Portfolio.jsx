import NavigationBar from './NavigationBar';
import { Hero, About, Contact, Experience, Tech, Works, StarsCanvas, Feedbacks, SocialBar } from './'

const Portfolio = () => {
    return(
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

          <NavigationBar/>
          <Hero />     
        </div>
        <About/>
        <Experience />
        <Works />
        <Tech />
        <Feedbacks />
        <SocialBar />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
    )
}

export default Portfolio;
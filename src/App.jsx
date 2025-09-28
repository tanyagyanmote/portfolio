import './App.css'
import Desk from './Desk';
import StarMenu from './StarMenu';
import Title from './Title'
import Headphones from './Headphones'
import LightsHitbox from './LightsHitbox'
import Laptop from './Laptop';
import Boba from "./Boba";
import Keys from "./Keys";
import Camera from "./Camera";
import Nails from "./Nails";
import Phone from "./Phone";
import Journal from "./Journal";
import Sunglasses from "./Sunglasses";
import JewelryBox from "./JewelryBox";
import Flowers from "./Flowers";


function App() {

  return (
    <main>
      <div className="scene">
        <section className="hero" aria-label="Intro">
          <StarMenu />
          <Title />
          <LightsHitbox /> 
          <div className="desk-scale">
            <div className="desk-area">
              {/* <div className="desk-stage"> */}
                <Desk />
                <Laptop />
                <Boba stepMs={500} />
                <Headphones />
                <Keys />
                <Camera />
                <Nails />
                <Phone />
                <Sunglasses />
                <JewelryBox />
                <Flowers />
                <Journal />
              {/* </div> */}
            </div>
          </div>

        </section>
      </div>
      {/* <Projects />
      <Experience />
      <About /> 
      <Contact /> 
      <Extras /> */}
    </main>
  )
}

export default App

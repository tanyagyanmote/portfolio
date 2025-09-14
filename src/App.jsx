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
import Skills from "./Skills";
import Projects from "./Projects";


function App() {

  return (
    <main>
      <div className="scene">
        <section className="hero" aria-label="Intro">
          <StarMenu />
          <Title />
          <LightsHitbox /> 
          <div className="desk-area">
            <Desk />
            <Laptop />
            <Boba stepMs={500} />
            <Headphones />
            <Keys />
            <Camera/>
            {/* <Nails /> */}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App

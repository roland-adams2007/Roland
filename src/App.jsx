// import { useState } from 'react'

import Nav from './onxy/Nav'
import Home from './onxy/Home'
import About from './onxy/About'
import Service from './onxy/Service'
import Skill from "./onxy/Skill"
import Portfolio from "./onxy/Portfolio"
import Contact from "./onxy/Contact"
import Footer from "./onxy/Footer"
 /* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */



function App() {

  return(

    <>
     <Nav/>
     <Home/>
     <About/>
     <Service/>
     <Skill/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    
    </>


  )


  // const [count, setCount] = useState(0)

  // return (
    // <>



    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>  
      

      


  //   // </>
  // )
}

export default App

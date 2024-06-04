import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * initially imported {...link} from "react-router-dom and
    got a SyntaxError: The requested module 
    '/node_modules/.vite/deps/react-router-dom.js?t=1717417228255&v=425e280b'
     does not provide an export named 'link'
*
* then I changed it to import { Link } from "react-router-dom"
* and it worked
*
*/

import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar";
import PAsystems from "./components/PAsystems";
/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {

  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/PAsystems" element={<PAsystems />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        
      
     
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App

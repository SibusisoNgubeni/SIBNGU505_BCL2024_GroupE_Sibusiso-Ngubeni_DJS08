import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/**
 * initially imported {...link} from "react-router-dom and
    got a SyntaxError: The requested module 
    '/node_modules/.vite/deps/react-router-dom.js?t=1717417228255&v=425e280b'
     does not provide an export named 'link'
*
* Link can only be imported once, if you are gonna import a file with {Link}, it will 
  give an error if you duplicate import Link again in App.jsx
*
*/

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PAsystems from "./components/PAsystems"
import Dashboard from "./pages/Host/Dashboard";
import PAsystemsDetails from "./components/PAsystemsDetails";

/**
 * 
 * 
 */
function App() {

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/PAsystems" element={<PAsystems />} />
        <Route path="/host/Dashboard" element={<Dashboard/>}/>
        <Route path="/PAsystems/:id" element={<PAsystemsDetails />}/>


            
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

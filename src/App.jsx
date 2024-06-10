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
import Vans from "./components/PAsystems";
import SystemDetails from "./components/PAsystemsDetails";

import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/layout";
import HostLayout from "./components/HostLayout";

/**
 * Layout route fixed, Note: component imports should be uppercase
 * 
 */
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}> 
        <Route path="/PAsystems" element={<Vans />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element= {<SystemDetails />} />     
        </Route>

        <Route path="/components/HostLayout" element={<HostLayout />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      
     
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App

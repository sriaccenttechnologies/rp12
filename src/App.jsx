import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import Home from "./component/Home"
import Aboutus from "./component/Aboutus"
import Contactus from "./component/Contactus"

function App() {
 
  return (
    <>
     <BrowserRouter>
     
     <ul>
      <li> <Link to="/user/Home">Home</Link> </li>
      <li> <Link to="/user/Aboutus">Aboutus</Link> </li>
      <li> <Link to="/user/Contactus">Contactus</Link> </li>
     </ul>


     <Routes>
      <Route  path="/user">
        <Route  path="Home"  element={<Home/>} />
        <Route  path="Aboutus"  element={<Aboutus/>} />
        <Route  path="Contactus"  element={<Contactus/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

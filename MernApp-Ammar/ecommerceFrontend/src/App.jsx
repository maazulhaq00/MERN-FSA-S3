import Footer from "./Components/Home";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Shop from "./Pages/Shop";

function App() {
  return ( 

<>
<Router>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/shop" element={<Shop/>} />

</Routes>

</Router>


<Footer/>
</>

   );
}

export default App;
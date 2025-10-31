import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DisplayCategories from "./pages/DisplayCategories";
import AddCategory from "./pages/AddCategory";
import NavBar from "./components/NavBar";
function App() {
  return ( 
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<DisplayCategories /> } />
        <Route path="/add-category" element={<AddCategory /> } />
      </Routes>
    </Router>
    </>
   );
}

export default App;
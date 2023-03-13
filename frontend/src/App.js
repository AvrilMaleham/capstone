
import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



//Screens
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import ServicesScreen from './screens/servicesScreen';
import IndividualServiceScreen from './screens/individualServiceScreen';

//Components
import Navbar from './components/navbar';
import Backdrop from './components/backdrop';
import SideDrawer from './components/sideDrawer';
import Footer from './components/footer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
     <Navbar click ={() => setSideToggle(true)}/>
     <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
     <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
     <main className="app">
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
       {/* <Route path="/product/:id" element={<ProductScreen/>} /> */}
        <Route path="/cart" element={<CartScreen/>} />
        <Route path="/services" element={<ServicesScreen/>} />
        <Route path="/service/:id" element={<IndividualServiceScreen/>} />
      </Routes>
     </main>
     <Footer/>
     </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
<div className='App'>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Index />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
</div>

  );
}

export default App;

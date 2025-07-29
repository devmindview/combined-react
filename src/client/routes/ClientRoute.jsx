import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ClientLayout from '../layout/ClientLayout';
import Products from '../pages/Products';
import View from '../components/products-ui/View';
import Contact from '../pages/Contact';



function ClientRoute() {
 

  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/view" element={<View />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default ClientRoute;

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ClientLayout from '../layout/ClientLayout';
import Products from '../pages/Products';
import View from '../components/products-ui/View';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../policy/PrivacyPolicy';
import TermsAndConditions from '../policy/TermsAndConditions';
import DealerForm from '../pages/DealerForm';
import MaintenancePage from '../pages/MaintenancePage';



function ClientRoute() {
 

  return (
    <Routes>
        <Route path="/" element={<MaintenancePage/>} />
      <Route element={<ClientLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/view" element={<View />} />
        <Route path="/dealer" element={<DealerForm/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
      </Route>
    </Routes>
  );
}

export default ClientRoute;

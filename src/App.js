import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navgiation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import ContactForm from './routes/contact/contact';
import Checkout from './routes/checkout/checkout.component';
import Footer from './routes/footer/footer';
import 'react-notifications-component/dist/theme.css'
import FAQ from './routes/faq/faq';
const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='income' element={<ContactForm />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='faq' element={<FAQ />} />
        </Route>
      </Routes>

      <Footer />

    </>
  );
};

export default App;
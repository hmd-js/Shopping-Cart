
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Landing from './component/Landing';
// import Products from './component/Products'; class based
import ProductsF from './component/ProductsF';  //functional based
import ProductsDetails from "./component/ProductsDetails"
import SignUp from './component/SignUp';
import Login from './component/Login';
// import ShopCard from './component/ShopCard';
import Shop from './component/Shop';
import Product from './component/Product';

import { Route, Routes  } from 'react-router-dom';
///////////////////////////////////contexts:///////////////////////////
// import ProductContextProvider from './Contexts/ProductContextProvider';
// import CartContextProvider from './Contexts/CartContextProvider';

/////////////////////////////////////redux/////////////////////////////
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <div className="App">

     {/* <ProductContextProvider>
          <CartContextProvider> */}

        <Provider store = {store} >

              <Navbar/>

              <Routes>
                  {/* <Route path='/shopCard' Component={ShopCard}/> */}
                  <Route path='/products/:id' Component={ProductsDetails}  />
                  <Route path='/products' Component={ProductsF} />
                  <Route path= '/products' Component={Product} />
                  <Route path='/shop' Component={Shop} />
                  <Route path='/Login' Component={Login} />
                  <Route path='/SignUp' Component={SignUp} />
                  <Route path='/' Component={Landing} /> 
              </Routes>

        </Provider>

      {/* </CartContextProvider>
         </ProductContextProvider> */}     
            <Footer/> 

    </div>
  );
}

export default App;

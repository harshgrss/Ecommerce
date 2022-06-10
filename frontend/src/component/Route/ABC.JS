// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Navigate} from 'react-router-dom';
// //import { Component } from 'react';

// const ProtectedRoute = ({ children }) => {
//       const {  isAuthenticated,user,isAdmin} = useSelector((state) => state.user);

//        //if (loading){ return (null)};

//        if (isAdmin === true && user.role !== "admin") {
//                         return <Navigate to="/login" />;
//                        }


//       return isAuthenticated ? children:<Navigate to="/login" replace />
            

      
// };
// export default ProtectedRoute; 



// import './App.css';
// import { useEffect, useState } from "react";

// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
// import WebFont from "webfontloader"
// import React from 'react';
// import Footer from "./component/layout/Footer/Footer.js";
// import Home from "./component/Home/Home.js";
// import  ProductDetails from './component/Product/ProductDetails.js';
// import Products from "./component/Product/Products.js";
// import Search from "./component/Product/Search.js"
// import LoginSignUp from './component/User/LoginSignUp';
// import store from "./store"
// import { loadUser } from './actions/userAction';
// import UserOptions from "./component/layout/Header/UserOptions.js";
// import { useSelector } from 'react-redux';
// import Profile from "./component/User/Profile.js"
// import ProtectedRoute from './component/Route/ProtectedRoute';
// import  UpdateProfile  from './component/User/UpdateProfile.js';
// import UpdatePassword from './component/User/UpdatePassword.js';
// import ForgotPassword from "./component/User/ForgotPassword.js";
// import ResetPassword from "./component/User/ResetPassword.js";
// import Cart from "./component/Cart/Cart.js";
// import Shipping from "./component/Cart/Shipping.js";
// import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
// import axios from 'axios';
// import Payment from "./component/Cart/Payment.js";
// import {  Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess.js"
// import MyOrders from "./component/Order/MyOrders.js"
// import OrderDetails from "./component/Order/OrderDetails.js";
// import Dashboard from "./component/admin/Dashboard.js"
// import ProductList from "./component/admin/ProductList.js";
// import NewProduct from "./component/admin/NewProduct.js";
// import UpdateProduct from './component/admin/UpdateProduct.js';
// import OrderList from './component/admin/OrderList';
// import ProcessOrder from './component/admin/ProcessOrder';
// import UsersList from './component/admin/UsersList.js';
// import UpdateUser from './component/admin/UpdateUser';
// import ProductReviews from './component/admin/ProductReviews';

// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound.js";

// function App() {
// const {isAuthenticated,user}=useSelector(state=>state.user)

//  const [stripeApiKey, setStripeApiKey] = useState("");

//  async function getStripeApiKey() {
//      const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//    }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families:["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });
// store.dispatch(loadUser());
//    getStripeApiKey(); 
//   }, []);

//   // window.addEventListener("contextmenu", (e) => e.preventDefault());


//   return (



// <Elements stripe={loadStripe(stripeApiKey)}>




    
//     <Router>
// <Header/>
// {isAuthenticated && <UserOptions user={user} />}


      



  
        

// <Routes>
 

 
        
        

     
        
          
  

      


// <Route exact path="/" element={<Home/>}/>



// <Route exact path="/product/:id" element={<ProductDetails/>} />
// <Route exact path="/products" element={<Products/>} />
// <Route  path="/products/:keyword" element={<Products/>} />

// <Route exact path="/search" element={<Search/>} />
// <Route exact path="/contact" element={<Contact/>} />
// <Route exact path="/about" element={<About/>} />
//   <Route path="/account" element={(<ProtectedRoute><Profile /></ProtectedRoute>)} />
  
//   <Route path="/me/update" element={(<ProtectedRoute><UpdateProfile /></ProtectedRoute>)} />

//   <Route path="/password/update" 
//   element={(<ProtectedRoute>
//     <UpdatePassword />
//   </ProtectedRoute>)} />

//   <Route exact path="/password/forgot" element={<ForgotPassword/>} />


//   <Route exact path="/password/reset/:token" element={<ResetPassword/>} />

//    <Route exact path="/login" element={<LoginSignUp/>} /> 

//    {/* <Route exact path="/cart" element={<Cart/>} />  */}

   
//    <Route path="/cart" 
//   element={(<ProtectedRoute>
//     <Cart />
//   </ProtectedRoute>)} /> 


//     <Route path="/shipping" 
//   element={(<ProtectedRoute>
//     <Shipping />
//   </ProtectedRoute>)} /> 
 
 


//   <Route  exact path="/order/confirm" element={(<ProtectedRoute><ConfirmOrder/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/process/payment" element={(<ProtectedRoute><Payment/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/success" element={(<ProtectedRoute><OrderSuccess/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/orders" element={(<ProtectedRoute><MyOrders/> </ProtectedRoute>)}
    
//     />
   
//    <Route  exact path="/order/:id" element={(<ProtectedRoute><OrderDetails/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/admin/dashboard"  element={(<ProtectedRoute isAdmin={true}><Dashboard/> </ProtectedRoute>)}
    
//     />

//  <Route  exact path="/admin/products" element={(<ProtectedRoute isAdmin={true} ><ProductList/> </ProtectedRoute>)}
    
//     /> 

// <Route  exact path="/admin/product" element={(<ProtectedRoute isAdmin={true} ><NewProduct/> </ProtectedRoute>)}
    
//     /> 

// <Route  exact path="/admin/product/:id" element={(<ProtectedRoute isAdmin={true} ><UpdateProduct/> </ProtectedRoute>)}
    
//     /> 

// <Route  exact path="/admin/orders" element={(<ProtectedRoute isAdmin={true} ><OrderList/> </ProtectedRoute>)}
    
//     /> 

// <Route  exact path="/admin/order/:id" element={(<ProtectedRoute isAdmin={true} ><ProcessOrder/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/admin/users" element={(<ProtectedRoute isAdmin={true} ><UsersList/> </ProtectedRoute>)}
    
//     />

// <Route  exact path="/admin/user/:id" element={(<ProtectedRoute isAdmin={true} ><UpdateUser/> </ProtectedRoute>)}
    
//     />


// <Route  exact path="/admin/reviews" element={(<ProtectedRoute isAdmin={true} ><ProductReviews/> </ProtectedRoute>)}
    
//     />

//   {/* <Route exact path="/process/payment" 
//  element={isAuthenticated ? stripeApiKey && <Elements 
// stripe={loadStripe(stripeApiKey )}> <Payment /> <Elements/>  :
//  <LoginSignup /> } />    */}

// <Route
// exact path="*"
//            element={
//             window.location.pathname === "/process/payment" ? null : <NotFound/>
//           }
//         />


// </Routes>
// <Footer/>
//     </Router>

//     </Elements> 
//   );
// }

// export default App;

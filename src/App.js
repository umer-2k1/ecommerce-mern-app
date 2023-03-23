// import axios from "axios";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductPages/ProductDetails";
import Products from "./components/ProductPages/Products";
import Login from "./components/userPage/Login";
import RegisterUser from "./components/userPage/RegisterUser";
import store from './store.js'
import { loadTheUser } from "./actions/userAction";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import UserOptions from "./components/userPage/UserOptions";
import UserProfile from "./components/userPage/UserProfile";
import Cart from "./components/CartPage/Cart";
import Demo from './components/ProductPages/Demo'
import Orders from "./components/OrdersPage/Orders";
import OrderConfirm from "./components/OrdersPage/OrderConfirm";
import Payment from "./components/PaymentPage/Payment";
import Success from "./components/PaymentPage/Success";
import MyOrders from "./components/OrdersPage/MyOrders";
import OrderDetails from "./components/OrdersPage/OrderDetails";
import ScrollToTop from "./layout/ScrollToTop";
import ErrorPage from "./components/Routes/ErrorPage";
import ProtectedRoute from "./components/Routes/ProtectedRoute";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  const dispatch = useDispatch()
  const {isAuthenticate, newUser, loading} = useSelector((state)=> state.user)



useEffect(() => {
  store.dispatch(loadTheUser())
    },[]);

    
 
  return (
    <>

<Router>
<ScrollToTop/>

<Navbar />

{isAuthenticate&&<UserOptions user={newUser}/>}
<Routes>

<Route exact path ="/" element = {  <Home /> } />
<Route exact path ="/product/getProductDet/:id" element = {  <ProductDetails /> } />
<Route exact path ="/product/getproducts" element = {  <Products /> } />
<Route  path ="/product/getproducts/:keyword" element = {  <Products /> } />
<Route exact path ="/auth/loginUser" element = {  <Login /> } />
<Route exact path ="/auth/newUser" element = {  <RegisterUser /> } />
<Route exact path ="/cart" element = {  <Cart /> } />









<Route element={<ProtectedRoute isAuthenticate={isAuthenticate} />}>
<>
<Route exact path ="/account" element = {  <UserProfile /> } />
<Route exact path ="/orders" element = {  <Orders /> } />
<Route exact path ="/orders/confirm" element = {  <OrderConfirm /> } />
<Route exact path ="/payment/process" element = {<Payment /> } />

<Route exact path ="/order-placed" element = {  <Success /> } />
<Route exact path ="/order/myOrders" element = {  <MyOrders /> } />
<Route exact path ="/order/single/:id" element = {  <OrderDetails /> } />

</>
</Route>





<Route  exact path ="/demo" element = {  <Demo /> } />
<Route  exact path ="*" element = {  <ErrorPage /> } />

</Routes>

</Router>
<Footer />



    </>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/user/Register'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './pages/user/Login'
import Home from './pages/home/Home'
import Products from './pages/product/Products'
import SingleProduct from './pages/single-product/SingleProduct'
import About from './pages/about/About'
import MyCart from './pages/cart/my-cart'
import Checkout from './pages/checkout/Checkout'
import Blog from './pages/blog/Blog'

import MyOrder from './pages/my-orders/MyOrder'
import MyOrderDetail from './pages/my-orders-details/MyOrderDetail'

import Categories from './pages/admin/categories/Categories'

import AdminStats from './pages/admin/stats/AdminStats'
import Users from './pages/admin/users/Users'
function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-cart' element={<MyCart />} />
          <Route path='/my-checkout' element={<Checkout />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/my-orders" element={<MyOrder />} />
          <Route path='/my-orders/:id' element={<MyOrderDetail />} />
          <Route path='/admin' element={<AdminStats />} />
          <Route path='/admin/categories' element={<Categories />} />
          <Route path='/admin/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

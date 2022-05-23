import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Header from './Page/Shared/Header/Header';
import Blogs from './Page/Home/Blogs/Blogs';
import About from './Page/Home/About/About';
import Footer from './Page/Shared/Footer/Footer';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import NotFound from './Page/Home/NotFound/NotFound';
import Inventory from './Page/Home/Inventory/Inventory';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';
import Update from './Page/Home/Update/Update';
import MyItem from './Page/Home/MyItem/MyItem';
import AddItem from './Page/Home/Home/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}> </Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/products/:productId'
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }>

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

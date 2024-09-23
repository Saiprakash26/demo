// import logo from './logo.svg';
// import './App.css';


import React from "react";


import { Link, Route, Routes } from "react-router-dom";
import Sai from './Component/Sai/Sai';
import Navbar from './Component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar2 from './Component/Navbar/Navbar1/Navbar2';
import Bank from './Component/Props/Bank';
import UseststeHook from './Component/Hook/UseststeHook';
import Form from './Component/form/form';
import Class from './Component/teach/class';
import Incre from './Component/teach/Incre';
import Website from './Component/websitetask/website';
import Home from './Component/websitetask/home';
// import Link from './Component/websitetask/lipage';
import Lipage from './Component/websitetask/lipage';
import Login from './Component/form/Login';
// import Fashion from './Component/fasshion/Fashion';
import Mens from "./Component/fasshion/Mens";
import Womens from './Component/fasshion/Womens'
import Kids from "./Component/fasshion/Kids";
import Accessories from "./Component/fasshion/Accessories";
import Grandparent from "./Component/Hook/usecontext/Grandparent";
import View from "./Component/Hook/useReducer/View";
import UseEffectHook from "./Component/Hook/UseEffect/UseEffectHook";
import Post from "./Component/axios/Post";
import Update from "./Component/axios/Update";
import Usestate1 from "./Component/Hook/Usestate1";
import Parenttask from "./Component/task/Parenttask";
import Taskchild from "./Component/task/Taskchild";
import Font from "./Component/fontsize/Font";
import { FontSizeProvider } from "./Component/size/FontSizeContext";
import ParentPage from "./Component/size/ParentPage";
import Infrom from "./Component/axios/Infrom"; 
import Useref from "./Component/useRef/Useref";
import MianContext from "./Component/Hook/context/MianContext";
import UseCallbackHook from "./Component/Hook/useCallback/UseCallbackHook";
import UseMemoHook from "./Component/Hook/useMemo/UseMemoHook";

// import { img } from "./logo (1).png";




function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-warning-subtle">
        <div className="container-fluid">
          <a id='navone' className="navbar-brand" href="#"><h5>BF FASHIONS</h5></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Mens">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Branches</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cloth Designs
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Cotton shirts and phants</a></li>
                  <li><a className="dropdown-item" href="#">lycra shirts and phants</a></li>
                  <li><a className="dropdown-item" href="#">jeans shirts and phants</a></li>
                  <li><a className="dropdown-item" href="#">T shirts</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About our shop</a>
              </li>
            </ul>

          </div>

        </div>
      </nav>
     
      <Routes>
        {/* <Route path='/Mens' element={<Fashion />}></Route> */}
        <Route path='/login' element={<Mens></Mens>}></Route>
        <Route path='/Womens' element={<Womens/>}></Route>
        <Route path='/womenspage' element={<Womens></Womens>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/womenspage' element={<Kids></Kids>}></Route>
        <Route path='/Accessories' element={<Accessories/>}></Route>
        <Route path='/womenspage' element={<Accessories></Accessories>}></Route>
        {/* <Route path='/create' element={<Infrom/>}></Route>  */}
         {/* <Route path='/update/:id' element={<Update/>}></Route> */}
      </Routes>
      {/* <Grandparent/> */}
      {/* <View></View> */}
      {/* <Login></Login> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <Post></Post> */}
      {/* <Usestate1></Usestate1> */}
      {/* <Parenttask></Parenttask> */}
      {/* <Taskchild></Taskchild> */}
       {/* <Fashion></Fashion> */}
      {/* <Mens></Mens> */}
      {/* <Font></Font> */}
      {/* <FontSizeProvider>
        <ParentPage/>
      </FontSizeProvider> */}
      {/* <Infrom></Infrom> */}
      {/* <Useref></Useref> */}
      {/* <MianContext /> */}
      {/* <UseCallbackHook /> */}
      <UseMemoHook />
    </div>
  );
}

export default App;


{/* <Route path= '/' element={<Navbar2/>}></Route> */ }
{/* <Route path= '/Sai' element={<Sai/>}></Route> */ }
{/* <Route path= '/Bank' element={<Bank/>}></Route> */ }
{/* <Route path= '/Home' element={<Home/>}></Route> */ }
{/* <Form></Form> */ }
{/* <Class></Class> */ }
{/* <Route path='/home' element={<Website />}>
          <Route path='login' element={<Home></Home>}></Route>
        </Route>
        <Route path='/link' element={<Website />}>
          <Route path='linkpage' element={<Lipage></Lipage>}></Route>
      // <Login></Login>

        </Route> */}
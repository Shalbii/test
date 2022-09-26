import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "./Login";
import Signin from "./Signin";



export default function Navigation(){
return<>
<BrowserRouter>
<Routes>
<Route path="/" element ={<Login/>}></Route>
<Route path="/Signin" element ={<Signin/>}></Route>

</Routes>
</BrowserRouter>
</>

}
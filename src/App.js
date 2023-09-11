import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import IPad from "./pages/iPad";
import IPhone from "./pages/iPhone";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/iphone" element={<IPhone />} />
        <Route path="/ipad" element={<IPad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

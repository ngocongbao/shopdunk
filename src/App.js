import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import iPad from "./pages/iPad";
import iPhone from "./pages/iPhone";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/iphone" element={<iPhone></iPhone>}/>
          <Route path="/ipad" element={<iPad></iPad>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

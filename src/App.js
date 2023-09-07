import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

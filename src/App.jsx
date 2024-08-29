import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/clothing" element={<Category/>}/>
          <Route path="/cosmetics" element={<Category/>}/>
          <Route path="/electronics" element={<Category/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productID" element={<Product/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  )
}
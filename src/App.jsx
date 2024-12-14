import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Product from "./Pages/Product"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./Pages/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product/>} />
        <Route path="pricing" element={<Pricing/>} />
        <Route path="app" element={<AppLayout/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

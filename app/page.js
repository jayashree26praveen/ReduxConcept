'use client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainHome from "./pages/Home/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import ProductDetails from "../app/productdetails/[id]/page";

export default function Home() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<MainHome />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

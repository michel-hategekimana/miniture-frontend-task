import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hooks from "./components/Hooks"
import Faqs from "./pages/Faqs";
import Blog from "./pages/Blog";

function App() {
  return (
    
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element ={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="/hooks" element={<Hooks />} />
    </Routes>
    
  );
}

export default App;

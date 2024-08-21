import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.body}>
        <Navbar />
        <Routes>
          <Route path="/PortfolioZ/" element={<Home />} />
          <Route path="/PortfolioZ/about" element={<About />} />
          <Route path="/PortfolioZ/project" element={<Project />} />
          <Route path="/PortfolioZ/blog" element={<Blog />} />
          <Route path="/PortfolioZ/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
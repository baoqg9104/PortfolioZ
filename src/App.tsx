import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.body}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/PortfolioZ/" element={ <Home></Home> } />
            <Route path="/PortfolioZ/project" element={<Project></Project>}></Route>
            <Route path="/PortfolioZ/blog" element={<Blog></Blog>}></Route>
            <Route path="/PortfolioZ/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

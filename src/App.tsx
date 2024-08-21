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
            <Route path="/" element={ <Home></Home> } />
            <Route path="/Project" element={<Project></Project>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

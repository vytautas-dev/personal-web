import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";
import SkillsPage from "./pages/SkillsPage/SkillsPage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<SkillsPage />} />
        <Route path='projects' element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/about/About'
import Content from "./components/content/Content";
import Course from "./components/course/Course";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Item from "./components/item/Item";
import Lang from "./components/lang/Lang";
import Parallax from "./components/parallax/Parallax";
import Requisite from "./components/requisite/Requisite";
import Tutor from "./components/tutorsearch/Tutor";
import Backpage from "./components/page/itpage/backpage";
import Frontpage from "./components/page/itpage/frontpage";
import Uiuxpage from "./components/page/itpage/uiuxpage";
import LoginRegistr from "./components/page/login-registr/Loginregistr";
import Engpage from "./components/page/langpage/Engpage";
import Gerpage from "./components/page/langpage/Gerpage";
import Korpage from "./components/page/langpage/Korpage";

function MainPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Tutor />
      <Content />
      <Lang />
      <Course />
      <Item />
      <About />
      <Requisite />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/backpage" element={<Backpage />} />
          <Route path="/uiuxpage" element={<Uiuxpage />} />
          <Route path="/frontpage" element={<Frontpage />} />
          <Route path="/engpage" element={<Engpage />} />
          <Route path="/gerpage" element={<Gerpage />} />
          <Route path="/korpage" element={<Korpage />} />
          <Route path="/loginregistr" element={<LoginRegistr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
